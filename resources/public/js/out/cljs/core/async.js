// Compiled by ClojureScript 0.0-3269 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t8994 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t8994 = (function (fn_handler,f,meta8995){
this.fn_handler = fn_handler;
this.f = f;
this.meta8995 = meta8995;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t8994.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8996,meta8995__$1){
var self__ = this;
var _8996__$1 = this;
return (new cljs.core.async.t8994(self__.fn_handler,self__.f,meta8995__$1));
});

cljs.core.async.t8994.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8996){
var self__ = this;
var _8996__$1 = this;
return self__.meta8995;
});

cljs.core.async.t8994.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t8994.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t8994.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t8994.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta8995","meta8995",28585731,null)], null);
});

cljs.core.async.t8994.cljs$lang$type = true;

cljs.core.async.t8994.cljs$lang$ctorStr = "cljs.core.async/t8994";

cljs.core.async.t8994.cljs$lang$ctorPrWriter = (function (this__4886__auto__,writer__4887__auto__,opt__4888__auto__){
return cljs.core._write.call(null,writer__4887__auto__,"cljs.core.async/t8994");
});

cljs.core.async.__GT_t8994 = (function cljs$core$async$fn_handler_$___GT_t8994(fn_handler__$1,f__$1,meta8995){
return (new cljs.core.async.t8994(fn_handler__$1,f__$1,meta8995));
});

}

return (new cljs.core.async.t8994(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 * val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 * buffered, but oldest elements in buffer will be dropped (not
 * transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full.
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
var G__8998 = buff;
if(G__8998){
var bit__4981__auto__ = null;
if(cljs.core.truth_((function (){var or__4307__auto__ = bit__4981__auto__;
if(cljs.core.truth_(or__4307__auto__)){
return or__4307__auto__;
} else {
return G__8998.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__8998.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__8998);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__8998);
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
var G__9000 = arguments.length;
switch (G__9000) {
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
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
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
var G__9003 = arguments.length;
switch (G__9003) {
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
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_9005 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_9005);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_9005,ret){
return (function (){
return fn1.call(null,val_9005);
});})(val_9005,ret))
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
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
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
var G__9007 = arguments.length;
switch (G__9007) {
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
var temp__4421__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4421__auto__)){
var ret = temp__4421__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4421__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4421__auto__)){
var retb = temp__4421__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4421__auto__){
return (function (){
return fn1.call(null,ret);
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
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5192__auto___9009 = n;
var x_9010 = (0);
while(true){
if((x_9010 < n__5192__auto___9009)){
(a[x_9010] = (0));

var G__9011 = (x_9010 + (1));
x_9010 = G__9011;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__9012 = (i + (1));
i = G__9012;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t9016 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t9016 = (function (alt_flag,flag,meta9017){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta9017 = meta9017;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t9016.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_9018,meta9017__$1){
var self__ = this;
var _9018__$1 = this;
return (new cljs.core.async.t9016(self__.alt_flag,self__.flag,meta9017__$1));
});})(flag))
;

cljs.core.async.t9016.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_9018){
var self__ = this;
var _9018__$1 = this;
return self__.meta9017;
});})(flag))
;

cljs.core.async.t9016.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t9016.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t9016.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t9016.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta9017","meta9017",-1535106767,null)], null);
});})(flag))
;

cljs.core.async.t9016.cljs$lang$type = true;

cljs.core.async.t9016.cljs$lang$ctorStr = "cljs.core.async/t9016";

cljs.core.async.t9016.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4886__auto__,writer__4887__auto__,opt__4888__auto__){
return cljs.core._write.call(null,writer__4887__auto__,"cljs.core.async/t9016");
});})(flag))
;

cljs.core.async.__GT_t9016 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t9016(alt_flag__$1,flag__$1,meta9017){
return (new cljs.core.async.t9016(alt_flag__$1,flag__$1,meta9017));
});})(flag))
;

}

return (new cljs.core.async.t9016(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t9022 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t9022 = (function (alt_handler,flag,cb,meta9023){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta9023 = meta9023;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t9022.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9024,meta9023__$1){
var self__ = this;
var _9024__$1 = this;
return (new cljs.core.async.t9022(self__.alt_handler,self__.flag,self__.cb,meta9023__$1));
});

cljs.core.async.t9022.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9024){
var self__ = this;
var _9024__$1 = this;
return self__.meta9023;
});

cljs.core.async.t9022.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t9022.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t9022.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t9022.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta9023","meta9023",1272360131,null)], null);
});

cljs.core.async.t9022.cljs$lang$type = true;

cljs.core.async.t9022.cljs$lang$ctorStr = "cljs.core.async/t9022";

cljs.core.async.t9022.cljs$lang$ctorPrWriter = (function (this__4886__auto__,writer__4887__auto__,opt__4888__auto__){
return cljs.core._write.call(null,writer__4887__auto__,"cljs.core.async/t9022");
});

cljs.core.async.__GT_t9022 = (function cljs$core$async$alt_handler_$___GT_t9022(alt_handler__$1,flag__$1,cb__$1,meta9023){
return (new cljs.core.async.t9022(alt_handler__$1,flag__$1,cb__$1,meta9023));
});

}

return (new cljs.core.async.t9022(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__9025_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__9025_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__9026_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__9026_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4307__auto__ = wport;
if(cljs.core.truth_(or__4307__auto__)){
return or__4307__auto__;
} else {
return port;
}
})()], null));
} else {
var G__9027 = (i + (1));
i = G__9027;
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
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4423__auto__ = (function (){var and__4295__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4295__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4295__auto__;
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var got = temp__4423__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__9030){
var map__9031 = p__9030;
var map__9031__$1 = ((cljs.core.seq_QMARK_.call(null,map__9031))?cljs.core.apply.call(null,cljs.core.hash_map,map__9031):map__9031);
var opts = map__9031__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq9028){
var G__9029 = cljs.core.first.call(null,seq9028);
var seq9028__$1 = cljs.core.next.call(null,seq9028);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__9029,seq9028__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var G__9033 = arguments.length;
switch (G__9033) {
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
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__6667__auto___9082 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6667__auto___9082){
return (function (){
var f__6668__auto__ = (function (){var switch__6605__auto__ = ((function (c__6667__auto___9082){
return (function (state_9057){
var state_val_9058 = (state_9057[(1)]);
if((state_val_9058 === (7))){
var inst_9053 = (state_9057[(2)]);
var state_9057__$1 = state_9057;
var statearr_9059_9083 = state_9057__$1;
(statearr_9059_9083[(2)] = inst_9053);

(statearr_9059_9083[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9058 === (1))){
var state_9057__$1 = state_9057;
var statearr_9060_9084 = state_9057__$1;
(statearr_9060_9084[(2)] = null);

(statearr_9060_9084[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9058 === (4))){
var inst_9036 = (state_9057[(7)]);
var inst_9036__$1 = (state_9057[(2)]);
var inst_9037 = (inst_9036__$1 == null);
var state_9057__$1 = (function (){var statearr_9061 = state_9057;
(statearr_9061[(7)] = inst_9036__$1);

return statearr_9061;
})();
if(cljs.core.truth_(inst_9037)){
var statearr_9062_9085 = state_9057__$1;
(statearr_9062_9085[(1)] = (5));

} else {
var statearr_9063_9086 = state_9057__$1;
(statearr_9063_9086[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9058 === (13))){
var state_9057__$1 = state_9057;
var statearr_9064_9087 = state_9057__$1;
(statearr_9064_9087[(2)] = null);

(statearr_9064_9087[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9058 === (6))){
var inst_9036 = (state_9057[(7)]);
var state_9057__$1 = state_9057;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9057__$1,(11),to,inst_9036);
} else {
if((state_val_9058 === (3))){
var inst_9055 = (state_9057[(2)]);
var state_9057__$1 = state_9057;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9057__$1,inst_9055);
} else {
if((state_val_9058 === (12))){
var state_9057__$1 = state_9057;
var statearr_9065_9088 = state_9057__$1;
(statearr_9065_9088[(2)] = null);

(statearr_9065_9088[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9058 === (2))){
var state_9057__$1 = state_9057;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9057__$1,(4),from);
} else {
if((state_val_9058 === (11))){
var inst_9046 = (state_9057[(2)]);
var state_9057__$1 = state_9057;
if(cljs.core.truth_(inst_9046)){
var statearr_9066_9089 = state_9057__$1;
(statearr_9066_9089[(1)] = (12));

} else {
var statearr_9067_9090 = state_9057__$1;
(statearr_9067_9090[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9058 === (9))){
var state_9057__$1 = state_9057;
var statearr_9068_9091 = state_9057__$1;
(statearr_9068_9091[(2)] = null);

(statearr_9068_9091[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9058 === (5))){
var state_9057__$1 = state_9057;
if(cljs.core.truth_(close_QMARK_)){
var statearr_9069_9092 = state_9057__$1;
(statearr_9069_9092[(1)] = (8));

} else {
var statearr_9070_9093 = state_9057__$1;
(statearr_9070_9093[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9058 === (14))){
var inst_9051 = (state_9057[(2)]);
var state_9057__$1 = state_9057;
var statearr_9071_9094 = state_9057__$1;
(statearr_9071_9094[(2)] = inst_9051);

(statearr_9071_9094[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9058 === (10))){
var inst_9043 = (state_9057[(2)]);
var state_9057__$1 = state_9057;
var statearr_9072_9095 = state_9057__$1;
(statearr_9072_9095[(2)] = inst_9043);

(statearr_9072_9095[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9058 === (8))){
var inst_9040 = cljs.core.async.close_BANG_.call(null,to);
var state_9057__$1 = state_9057;
var statearr_9073_9096 = state_9057__$1;
(statearr_9073_9096[(2)] = inst_9040);

(statearr_9073_9096[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__6667__auto___9082))
;
return ((function (switch__6605__auto__,c__6667__auto___9082){
return (function() {
var cljs$core$async$state_machine__6606__auto__ = null;
var cljs$core$async$state_machine__6606__auto____0 = (function (){
var statearr_9077 = [null,null,null,null,null,null,null,null];
(statearr_9077[(0)] = cljs$core$async$state_machine__6606__auto__);

(statearr_9077[(1)] = (1));

return statearr_9077;
});
var cljs$core$async$state_machine__6606__auto____1 = (function (state_9057){
while(true){
var ret_value__6607__auto__ = (function (){try{while(true){
var result__6608__auto__ = switch__6605__auto__.call(null,state_9057);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6608__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6608__auto__;
}
break;
}
}catch (e9078){if((e9078 instanceof Object)){
var ex__6609__auto__ = e9078;
var statearr_9079_9097 = state_9057;
(statearr_9079_9097[(5)] = ex__6609__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9057);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9078;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9098 = state_9057;
state_9057 = G__9098;
continue;
} else {
return ret_value__6607__auto__;
}
break;
}
});
cljs$core$async$state_machine__6606__auto__ = function(state_9057){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6606__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6606__auto____1.call(this,state_9057);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6606__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6606__auto____0;
cljs$core$async$state_machine__6606__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6606__auto____1;
return cljs$core$async$state_machine__6606__auto__;
})()
;})(switch__6605__auto__,c__6667__auto___9082))
})();
var state__6669__auto__ = (function (){var statearr_9080 = f__6668__auto__.call(null);
(statearr_9080[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6667__auto___9082);

return statearr_9080;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6669__auto__);
});})(c__6667__auto___9082))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__9282){
var vec__9283 = p__9282;
var v = cljs.core.nth.call(null,vec__9283,(0),null);
var p = cljs.core.nth.call(null,vec__9283,(1),null);
var job = vec__9283;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__6667__auto___9465 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6667__auto___9465,res,vec__9283,v,p,job,jobs,results){
return (function (){
var f__6668__auto__ = (function (){var switch__6605__auto__ = ((function (c__6667__auto___9465,res,vec__9283,v,p,job,jobs,results){
return (function (state_9288){
var state_val_9289 = (state_9288[(1)]);
if((state_val_9289 === (1))){
var state_9288__$1 = state_9288;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9288__$1,(2),res,v);
} else {
if((state_val_9289 === (2))){
var inst_9285 = (state_9288[(2)]);
var inst_9286 = cljs.core.async.close_BANG_.call(null,res);
var state_9288__$1 = (function (){var statearr_9290 = state_9288;
(statearr_9290[(7)] = inst_9285);

return statearr_9290;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9288__$1,inst_9286);
} else {
return null;
}
}
});})(c__6667__auto___9465,res,vec__9283,v,p,job,jobs,results))
;
return ((function (switch__6605__auto__,c__6667__auto___9465,res,vec__9283,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6606__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6606__auto____0 = (function (){
var statearr_9294 = [null,null,null,null,null,null,null,null];
(statearr_9294[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6606__auto__);

(statearr_9294[(1)] = (1));

return statearr_9294;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6606__auto____1 = (function (state_9288){
while(true){
var ret_value__6607__auto__ = (function (){try{while(true){
var result__6608__auto__ = switch__6605__auto__.call(null,state_9288);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6608__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6608__auto__;
}
break;
}
}catch (e9295){if((e9295 instanceof Object)){
var ex__6609__auto__ = e9295;
var statearr_9296_9466 = state_9288;
(statearr_9296_9466[(5)] = ex__6609__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9288);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9295;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9467 = state_9288;
state_9288 = G__9467;
continue;
} else {
return ret_value__6607__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6606__auto__ = function(state_9288){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6606__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6606__auto____1.call(this,state_9288);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6606__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6606__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6606__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6606__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6606__auto__;
})()
;})(switch__6605__auto__,c__6667__auto___9465,res,vec__9283,v,p,job,jobs,results))
})();
var state__6669__auto__ = (function (){var statearr_9297 = f__6668__auto__.call(null);
(statearr_9297[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6667__auto___9465);

return statearr_9297;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6669__auto__);
});})(c__6667__auto___9465,res,vec__9283,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__9298){
var vec__9299 = p__9298;
var v = cljs.core.nth.call(null,vec__9299,(0),null);
var p = cljs.core.nth.call(null,vec__9299,(1),null);
var job = vec__9299;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__5192__auto___9468 = n;
var __9469 = (0);
while(true){
if((__9469 < n__5192__auto___9468)){
var G__9300_9470 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__9300_9470) {
case "compute":
var c__6667__auto___9472 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__9469,c__6667__auto___9472,G__9300_9470,n__5192__auto___9468,jobs,results,process,async){
return (function (){
var f__6668__auto__ = (function (){var switch__6605__auto__ = ((function (__9469,c__6667__auto___9472,G__9300_9470,n__5192__auto___9468,jobs,results,process,async){
return (function (state_9313){
var state_val_9314 = (state_9313[(1)]);
if((state_val_9314 === (1))){
var state_9313__$1 = state_9313;
var statearr_9315_9473 = state_9313__$1;
(statearr_9315_9473[(2)] = null);

(statearr_9315_9473[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9314 === (2))){
var state_9313__$1 = state_9313;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9313__$1,(4),jobs);
} else {
if((state_val_9314 === (3))){
var inst_9311 = (state_9313[(2)]);
var state_9313__$1 = state_9313;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9313__$1,inst_9311);
} else {
if((state_val_9314 === (4))){
var inst_9303 = (state_9313[(2)]);
var inst_9304 = process.call(null,inst_9303);
var state_9313__$1 = state_9313;
if(cljs.core.truth_(inst_9304)){
var statearr_9316_9474 = state_9313__$1;
(statearr_9316_9474[(1)] = (5));

} else {
var statearr_9317_9475 = state_9313__$1;
(statearr_9317_9475[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9314 === (5))){
var state_9313__$1 = state_9313;
var statearr_9318_9476 = state_9313__$1;
(statearr_9318_9476[(2)] = null);

(statearr_9318_9476[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9314 === (6))){
var state_9313__$1 = state_9313;
var statearr_9319_9477 = state_9313__$1;
(statearr_9319_9477[(2)] = null);

(statearr_9319_9477[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9314 === (7))){
var inst_9309 = (state_9313[(2)]);
var state_9313__$1 = state_9313;
var statearr_9320_9478 = state_9313__$1;
(statearr_9320_9478[(2)] = inst_9309);

(statearr_9320_9478[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__9469,c__6667__auto___9472,G__9300_9470,n__5192__auto___9468,jobs,results,process,async))
;
return ((function (__9469,switch__6605__auto__,c__6667__auto___9472,G__9300_9470,n__5192__auto___9468,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6606__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6606__auto____0 = (function (){
var statearr_9324 = [null,null,null,null,null,null,null];
(statearr_9324[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6606__auto__);

(statearr_9324[(1)] = (1));

return statearr_9324;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6606__auto____1 = (function (state_9313){
while(true){
var ret_value__6607__auto__ = (function (){try{while(true){
var result__6608__auto__ = switch__6605__auto__.call(null,state_9313);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6608__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6608__auto__;
}
break;
}
}catch (e9325){if((e9325 instanceof Object)){
var ex__6609__auto__ = e9325;
var statearr_9326_9479 = state_9313;
(statearr_9326_9479[(5)] = ex__6609__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9313);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9325;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9480 = state_9313;
state_9313 = G__9480;
continue;
} else {
return ret_value__6607__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6606__auto__ = function(state_9313){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6606__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6606__auto____1.call(this,state_9313);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6606__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6606__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6606__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6606__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6606__auto__;
})()
;})(__9469,switch__6605__auto__,c__6667__auto___9472,G__9300_9470,n__5192__auto___9468,jobs,results,process,async))
})();
var state__6669__auto__ = (function (){var statearr_9327 = f__6668__auto__.call(null);
(statearr_9327[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6667__auto___9472);

return statearr_9327;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6669__auto__);
});})(__9469,c__6667__auto___9472,G__9300_9470,n__5192__auto___9468,jobs,results,process,async))
);


break;
case "async":
var c__6667__auto___9481 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__9469,c__6667__auto___9481,G__9300_9470,n__5192__auto___9468,jobs,results,process,async){
return (function (){
var f__6668__auto__ = (function (){var switch__6605__auto__ = ((function (__9469,c__6667__auto___9481,G__9300_9470,n__5192__auto___9468,jobs,results,process,async){
return (function (state_9340){
var state_val_9341 = (state_9340[(1)]);
if((state_val_9341 === (1))){
var state_9340__$1 = state_9340;
var statearr_9342_9482 = state_9340__$1;
(statearr_9342_9482[(2)] = null);

(statearr_9342_9482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9341 === (2))){
var state_9340__$1 = state_9340;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9340__$1,(4),jobs);
} else {
if((state_val_9341 === (3))){
var inst_9338 = (state_9340[(2)]);
var state_9340__$1 = state_9340;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9340__$1,inst_9338);
} else {
if((state_val_9341 === (4))){
var inst_9330 = (state_9340[(2)]);
var inst_9331 = async.call(null,inst_9330);
var state_9340__$1 = state_9340;
if(cljs.core.truth_(inst_9331)){
var statearr_9343_9483 = state_9340__$1;
(statearr_9343_9483[(1)] = (5));

} else {
var statearr_9344_9484 = state_9340__$1;
(statearr_9344_9484[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9341 === (5))){
var state_9340__$1 = state_9340;
var statearr_9345_9485 = state_9340__$1;
(statearr_9345_9485[(2)] = null);

(statearr_9345_9485[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9341 === (6))){
var state_9340__$1 = state_9340;
var statearr_9346_9486 = state_9340__$1;
(statearr_9346_9486[(2)] = null);

(statearr_9346_9486[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9341 === (7))){
var inst_9336 = (state_9340[(2)]);
var state_9340__$1 = state_9340;
var statearr_9347_9487 = state_9340__$1;
(statearr_9347_9487[(2)] = inst_9336);

(statearr_9347_9487[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__9469,c__6667__auto___9481,G__9300_9470,n__5192__auto___9468,jobs,results,process,async))
;
return ((function (__9469,switch__6605__auto__,c__6667__auto___9481,G__9300_9470,n__5192__auto___9468,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6606__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6606__auto____0 = (function (){
var statearr_9351 = [null,null,null,null,null,null,null];
(statearr_9351[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6606__auto__);

(statearr_9351[(1)] = (1));

return statearr_9351;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6606__auto____1 = (function (state_9340){
while(true){
var ret_value__6607__auto__ = (function (){try{while(true){
var result__6608__auto__ = switch__6605__auto__.call(null,state_9340);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6608__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6608__auto__;
}
break;
}
}catch (e9352){if((e9352 instanceof Object)){
var ex__6609__auto__ = e9352;
var statearr_9353_9488 = state_9340;
(statearr_9353_9488[(5)] = ex__6609__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9340);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9352;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9489 = state_9340;
state_9340 = G__9489;
continue;
} else {
return ret_value__6607__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6606__auto__ = function(state_9340){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6606__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6606__auto____1.call(this,state_9340);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6606__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6606__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6606__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6606__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6606__auto__;
})()
;})(__9469,switch__6605__auto__,c__6667__auto___9481,G__9300_9470,n__5192__auto___9468,jobs,results,process,async))
})();
var state__6669__auto__ = (function (){var statearr_9354 = f__6668__auto__.call(null);
(statearr_9354[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6667__auto___9481);

return statearr_9354;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6669__auto__);
});})(__9469,c__6667__auto___9481,G__9300_9470,n__5192__auto___9468,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__9490 = (__9469 + (1));
__9469 = G__9490;
continue;
} else {
}
break;
}

var c__6667__auto___9491 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6667__auto___9491,jobs,results,process,async){
return (function (){
var f__6668__auto__ = (function (){var switch__6605__auto__ = ((function (c__6667__auto___9491,jobs,results,process,async){
return (function (state_9376){
var state_val_9377 = (state_9376[(1)]);
if((state_val_9377 === (1))){
var state_9376__$1 = state_9376;
var statearr_9378_9492 = state_9376__$1;
(statearr_9378_9492[(2)] = null);

(statearr_9378_9492[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9377 === (2))){
var state_9376__$1 = state_9376;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9376__$1,(4),from);
} else {
if((state_val_9377 === (3))){
var inst_9374 = (state_9376[(2)]);
var state_9376__$1 = state_9376;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9376__$1,inst_9374);
} else {
if((state_val_9377 === (4))){
var inst_9357 = (state_9376[(7)]);
var inst_9357__$1 = (state_9376[(2)]);
var inst_9358 = (inst_9357__$1 == null);
var state_9376__$1 = (function (){var statearr_9379 = state_9376;
(statearr_9379[(7)] = inst_9357__$1);

return statearr_9379;
})();
if(cljs.core.truth_(inst_9358)){
var statearr_9380_9493 = state_9376__$1;
(statearr_9380_9493[(1)] = (5));

} else {
var statearr_9381_9494 = state_9376__$1;
(statearr_9381_9494[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9377 === (5))){
var inst_9360 = cljs.core.async.close_BANG_.call(null,jobs);
var state_9376__$1 = state_9376;
var statearr_9382_9495 = state_9376__$1;
(statearr_9382_9495[(2)] = inst_9360);

(statearr_9382_9495[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9377 === (6))){
var inst_9362 = (state_9376[(8)]);
var inst_9357 = (state_9376[(7)]);
var inst_9362__$1 = cljs.core.async.chan.call(null,(1));
var inst_9363 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_9364 = [inst_9357,inst_9362__$1];
var inst_9365 = (new cljs.core.PersistentVector(null,2,(5),inst_9363,inst_9364,null));
var state_9376__$1 = (function (){var statearr_9383 = state_9376;
(statearr_9383[(8)] = inst_9362__$1);

return statearr_9383;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9376__$1,(8),jobs,inst_9365);
} else {
if((state_val_9377 === (7))){
var inst_9372 = (state_9376[(2)]);
var state_9376__$1 = state_9376;
var statearr_9384_9496 = state_9376__$1;
(statearr_9384_9496[(2)] = inst_9372);

(statearr_9384_9496[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9377 === (8))){
var inst_9362 = (state_9376[(8)]);
var inst_9367 = (state_9376[(2)]);
var state_9376__$1 = (function (){var statearr_9385 = state_9376;
(statearr_9385[(9)] = inst_9367);

return statearr_9385;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9376__$1,(9),results,inst_9362);
} else {
if((state_val_9377 === (9))){
var inst_9369 = (state_9376[(2)]);
var state_9376__$1 = (function (){var statearr_9386 = state_9376;
(statearr_9386[(10)] = inst_9369);

return statearr_9386;
})();
var statearr_9387_9497 = state_9376__$1;
(statearr_9387_9497[(2)] = null);

(statearr_9387_9497[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__6667__auto___9491,jobs,results,process,async))
;
return ((function (switch__6605__auto__,c__6667__auto___9491,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6606__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6606__auto____0 = (function (){
var statearr_9391 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_9391[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6606__auto__);

(statearr_9391[(1)] = (1));

return statearr_9391;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6606__auto____1 = (function (state_9376){
while(true){
var ret_value__6607__auto__ = (function (){try{while(true){
var result__6608__auto__ = switch__6605__auto__.call(null,state_9376);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6608__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6608__auto__;
}
break;
}
}catch (e9392){if((e9392 instanceof Object)){
var ex__6609__auto__ = e9392;
var statearr_9393_9498 = state_9376;
(statearr_9393_9498[(5)] = ex__6609__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9376);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9392;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9499 = state_9376;
state_9376 = G__9499;
continue;
} else {
return ret_value__6607__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6606__auto__ = function(state_9376){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6606__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6606__auto____1.call(this,state_9376);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6606__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6606__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6606__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6606__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6606__auto__;
})()
;})(switch__6605__auto__,c__6667__auto___9491,jobs,results,process,async))
})();
var state__6669__auto__ = (function (){var statearr_9394 = f__6668__auto__.call(null);
(statearr_9394[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6667__auto___9491);

return statearr_9394;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6669__auto__);
});})(c__6667__auto___9491,jobs,results,process,async))
);


var c__6667__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6667__auto__,jobs,results,process,async){
return (function (){
var f__6668__auto__ = (function (){var switch__6605__auto__ = ((function (c__6667__auto__,jobs,results,process,async){
return (function (state_9432){
var state_val_9433 = (state_9432[(1)]);
if((state_val_9433 === (7))){
var inst_9428 = (state_9432[(2)]);
var state_9432__$1 = state_9432;
var statearr_9434_9500 = state_9432__$1;
(statearr_9434_9500[(2)] = inst_9428);

(statearr_9434_9500[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9433 === (20))){
var state_9432__$1 = state_9432;
var statearr_9435_9501 = state_9432__$1;
(statearr_9435_9501[(2)] = null);

(statearr_9435_9501[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9433 === (1))){
var state_9432__$1 = state_9432;
var statearr_9436_9502 = state_9432__$1;
(statearr_9436_9502[(2)] = null);

(statearr_9436_9502[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9433 === (4))){
var inst_9397 = (state_9432[(7)]);
var inst_9397__$1 = (state_9432[(2)]);
var inst_9398 = (inst_9397__$1 == null);
var state_9432__$1 = (function (){var statearr_9437 = state_9432;
(statearr_9437[(7)] = inst_9397__$1);

return statearr_9437;
})();
if(cljs.core.truth_(inst_9398)){
var statearr_9438_9503 = state_9432__$1;
(statearr_9438_9503[(1)] = (5));

} else {
var statearr_9439_9504 = state_9432__$1;
(statearr_9439_9504[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9433 === (15))){
var inst_9410 = (state_9432[(8)]);
var state_9432__$1 = state_9432;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9432__$1,(18),to,inst_9410);
} else {
if((state_val_9433 === (21))){
var inst_9423 = (state_9432[(2)]);
var state_9432__$1 = state_9432;
var statearr_9440_9505 = state_9432__$1;
(statearr_9440_9505[(2)] = inst_9423);

(statearr_9440_9505[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9433 === (13))){
var inst_9425 = (state_9432[(2)]);
var state_9432__$1 = (function (){var statearr_9441 = state_9432;
(statearr_9441[(9)] = inst_9425);

return statearr_9441;
})();
var statearr_9442_9506 = state_9432__$1;
(statearr_9442_9506[(2)] = null);

(statearr_9442_9506[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9433 === (6))){
var inst_9397 = (state_9432[(7)]);
var state_9432__$1 = state_9432;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9432__$1,(11),inst_9397);
} else {
if((state_val_9433 === (17))){
var inst_9418 = (state_9432[(2)]);
var state_9432__$1 = state_9432;
if(cljs.core.truth_(inst_9418)){
var statearr_9443_9507 = state_9432__$1;
(statearr_9443_9507[(1)] = (19));

} else {
var statearr_9444_9508 = state_9432__$1;
(statearr_9444_9508[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9433 === (3))){
var inst_9430 = (state_9432[(2)]);
var state_9432__$1 = state_9432;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9432__$1,inst_9430);
} else {
if((state_val_9433 === (12))){
var inst_9407 = (state_9432[(10)]);
var state_9432__$1 = state_9432;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9432__$1,(14),inst_9407);
} else {
if((state_val_9433 === (2))){
var state_9432__$1 = state_9432;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9432__$1,(4),results);
} else {
if((state_val_9433 === (19))){
var state_9432__$1 = state_9432;
var statearr_9445_9509 = state_9432__$1;
(statearr_9445_9509[(2)] = null);

(statearr_9445_9509[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9433 === (11))){
var inst_9407 = (state_9432[(2)]);
var state_9432__$1 = (function (){var statearr_9446 = state_9432;
(statearr_9446[(10)] = inst_9407);

return statearr_9446;
})();
var statearr_9447_9510 = state_9432__$1;
(statearr_9447_9510[(2)] = null);

(statearr_9447_9510[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9433 === (9))){
var state_9432__$1 = state_9432;
var statearr_9448_9511 = state_9432__$1;
(statearr_9448_9511[(2)] = null);

(statearr_9448_9511[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9433 === (5))){
var state_9432__$1 = state_9432;
if(cljs.core.truth_(close_QMARK_)){
var statearr_9449_9512 = state_9432__$1;
(statearr_9449_9512[(1)] = (8));

} else {
var statearr_9450_9513 = state_9432__$1;
(statearr_9450_9513[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9433 === (14))){
var inst_9412 = (state_9432[(11)]);
var inst_9410 = (state_9432[(8)]);
var inst_9410__$1 = (state_9432[(2)]);
var inst_9411 = (inst_9410__$1 == null);
var inst_9412__$1 = cljs.core.not.call(null,inst_9411);
var state_9432__$1 = (function (){var statearr_9451 = state_9432;
(statearr_9451[(11)] = inst_9412__$1);

(statearr_9451[(8)] = inst_9410__$1);

return statearr_9451;
})();
if(inst_9412__$1){
var statearr_9452_9514 = state_9432__$1;
(statearr_9452_9514[(1)] = (15));

} else {
var statearr_9453_9515 = state_9432__$1;
(statearr_9453_9515[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9433 === (16))){
var inst_9412 = (state_9432[(11)]);
var state_9432__$1 = state_9432;
var statearr_9454_9516 = state_9432__$1;
(statearr_9454_9516[(2)] = inst_9412);

(statearr_9454_9516[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9433 === (10))){
var inst_9404 = (state_9432[(2)]);
var state_9432__$1 = state_9432;
var statearr_9455_9517 = state_9432__$1;
(statearr_9455_9517[(2)] = inst_9404);

(statearr_9455_9517[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9433 === (18))){
var inst_9415 = (state_9432[(2)]);
var state_9432__$1 = state_9432;
var statearr_9456_9518 = state_9432__$1;
(statearr_9456_9518[(2)] = inst_9415);

(statearr_9456_9518[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9433 === (8))){
var inst_9401 = cljs.core.async.close_BANG_.call(null,to);
var state_9432__$1 = state_9432;
var statearr_9457_9519 = state_9432__$1;
(statearr_9457_9519[(2)] = inst_9401);

(statearr_9457_9519[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__6667__auto__,jobs,results,process,async))
;
return ((function (switch__6605__auto__,c__6667__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6606__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6606__auto____0 = (function (){
var statearr_9461 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9461[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6606__auto__);

(statearr_9461[(1)] = (1));

return statearr_9461;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6606__auto____1 = (function (state_9432){
while(true){
var ret_value__6607__auto__ = (function (){try{while(true){
var result__6608__auto__ = switch__6605__auto__.call(null,state_9432);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6608__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6608__auto__;
}
break;
}
}catch (e9462){if((e9462 instanceof Object)){
var ex__6609__auto__ = e9462;
var statearr_9463_9520 = state_9432;
(statearr_9463_9520[(5)] = ex__6609__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9432);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9462;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9521 = state_9432;
state_9432 = G__9521;
continue;
} else {
return ret_value__6607__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6606__auto__ = function(state_9432){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6606__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6606__auto____1.call(this,state_9432);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6606__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6606__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6606__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6606__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6606__auto__;
})()
;})(switch__6605__auto__,c__6667__auto__,jobs,results,process,async))
})();
var state__6669__auto__ = (function (){var statearr_9464 = f__6668__auto__.call(null);
(statearr_9464[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6667__auto__);

return statearr_9464;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6669__auto__);
});})(c__6667__auto__,jobs,results,process,async))
);

return c__6667__auto__;
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
var G__9523 = arguments.length;
switch (G__9523) {
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
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
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
var G__9526 = arguments.length;
switch (G__9526) {
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
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
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
var G__9529 = arguments.length;
switch (G__9529) {
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
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__6667__auto___9581 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6667__auto___9581,tc,fc){
return (function (){
var f__6668__auto__ = (function (){var switch__6605__auto__ = ((function (c__6667__auto___9581,tc,fc){
return (function (state_9555){
var state_val_9556 = (state_9555[(1)]);
if((state_val_9556 === (7))){
var inst_9551 = (state_9555[(2)]);
var state_9555__$1 = state_9555;
var statearr_9557_9582 = state_9555__$1;
(statearr_9557_9582[(2)] = inst_9551);

(statearr_9557_9582[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9556 === (1))){
var state_9555__$1 = state_9555;
var statearr_9558_9583 = state_9555__$1;
(statearr_9558_9583[(2)] = null);

(statearr_9558_9583[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9556 === (4))){
var inst_9532 = (state_9555[(7)]);
var inst_9532__$1 = (state_9555[(2)]);
var inst_9533 = (inst_9532__$1 == null);
var state_9555__$1 = (function (){var statearr_9559 = state_9555;
(statearr_9559[(7)] = inst_9532__$1);

return statearr_9559;
})();
if(cljs.core.truth_(inst_9533)){
var statearr_9560_9584 = state_9555__$1;
(statearr_9560_9584[(1)] = (5));

} else {
var statearr_9561_9585 = state_9555__$1;
(statearr_9561_9585[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9556 === (13))){
var state_9555__$1 = state_9555;
var statearr_9562_9586 = state_9555__$1;
(statearr_9562_9586[(2)] = null);

(statearr_9562_9586[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9556 === (6))){
var inst_9532 = (state_9555[(7)]);
var inst_9538 = p.call(null,inst_9532);
var state_9555__$1 = state_9555;
if(cljs.core.truth_(inst_9538)){
var statearr_9563_9587 = state_9555__$1;
(statearr_9563_9587[(1)] = (9));

} else {
var statearr_9564_9588 = state_9555__$1;
(statearr_9564_9588[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9556 === (3))){
var inst_9553 = (state_9555[(2)]);
var state_9555__$1 = state_9555;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9555__$1,inst_9553);
} else {
if((state_val_9556 === (12))){
var state_9555__$1 = state_9555;
var statearr_9565_9589 = state_9555__$1;
(statearr_9565_9589[(2)] = null);

(statearr_9565_9589[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9556 === (2))){
var state_9555__$1 = state_9555;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9555__$1,(4),ch);
} else {
if((state_val_9556 === (11))){
var inst_9532 = (state_9555[(7)]);
var inst_9542 = (state_9555[(2)]);
var state_9555__$1 = state_9555;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9555__$1,(8),inst_9542,inst_9532);
} else {
if((state_val_9556 === (9))){
var state_9555__$1 = state_9555;
var statearr_9566_9590 = state_9555__$1;
(statearr_9566_9590[(2)] = tc);

(statearr_9566_9590[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9556 === (5))){
var inst_9535 = cljs.core.async.close_BANG_.call(null,tc);
var inst_9536 = cljs.core.async.close_BANG_.call(null,fc);
var state_9555__$1 = (function (){var statearr_9567 = state_9555;
(statearr_9567[(8)] = inst_9535);

return statearr_9567;
})();
var statearr_9568_9591 = state_9555__$1;
(statearr_9568_9591[(2)] = inst_9536);

(statearr_9568_9591[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9556 === (14))){
var inst_9549 = (state_9555[(2)]);
var state_9555__$1 = state_9555;
var statearr_9569_9592 = state_9555__$1;
(statearr_9569_9592[(2)] = inst_9549);

(statearr_9569_9592[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9556 === (10))){
var state_9555__$1 = state_9555;
var statearr_9570_9593 = state_9555__$1;
(statearr_9570_9593[(2)] = fc);

(statearr_9570_9593[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9556 === (8))){
var inst_9544 = (state_9555[(2)]);
var state_9555__$1 = state_9555;
if(cljs.core.truth_(inst_9544)){
var statearr_9571_9594 = state_9555__$1;
(statearr_9571_9594[(1)] = (12));

} else {
var statearr_9572_9595 = state_9555__$1;
(statearr_9572_9595[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__6667__auto___9581,tc,fc))
;
return ((function (switch__6605__auto__,c__6667__auto___9581,tc,fc){
return (function() {
var cljs$core$async$state_machine__6606__auto__ = null;
var cljs$core$async$state_machine__6606__auto____0 = (function (){
var statearr_9576 = [null,null,null,null,null,null,null,null,null];
(statearr_9576[(0)] = cljs$core$async$state_machine__6606__auto__);

(statearr_9576[(1)] = (1));

return statearr_9576;
});
var cljs$core$async$state_machine__6606__auto____1 = (function (state_9555){
while(true){
var ret_value__6607__auto__ = (function (){try{while(true){
var result__6608__auto__ = switch__6605__auto__.call(null,state_9555);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6608__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6608__auto__;
}
break;
}
}catch (e9577){if((e9577 instanceof Object)){
var ex__6609__auto__ = e9577;
var statearr_9578_9596 = state_9555;
(statearr_9578_9596[(5)] = ex__6609__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9555);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9577;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9597 = state_9555;
state_9555 = G__9597;
continue;
} else {
return ret_value__6607__auto__;
}
break;
}
});
cljs$core$async$state_machine__6606__auto__ = function(state_9555){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6606__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6606__auto____1.call(this,state_9555);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6606__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6606__auto____0;
cljs$core$async$state_machine__6606__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6606__auto____1;
return cljs$core$async$state_machine__6606__auto__;
})()
;})(switch__6605__auto__,c__6667__auto___9581,tc,fc))
})();
var state__6669__auto__ = (function (){var statearr_9579 = f__6668__auto__.call(null);
(statearr_9579[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6667__auto___9581);

return statearr_9579;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6669__auto__);
});})(c__6667__auto___9581,tc,fc))
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
var c__6667__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6667__auto__){
return (function (){
var f__6668__auto__ = (function (){var switch__6605__auto__ = ((function (c__6667__auto__){
return (function (state_9644){
var state_val_9645 = (state_9644[(1)]);
if((state_val_9645 === (1))){
var inst_9630 = init;
var state_9644__$1 = (function (){var statearr_9646 = state_9644;
(statearr_9646[(7)] = inst_9630);

return statearr_9646;
})();
var statearr_9647_9662 = state_9644__$1;
(statearr_9647_9662[(2)] = null);

(statearr_9647_9662[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9645 === (2))){
var state_9644__$1 = state_9644;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9644__$1,(4),ch);
} else {
if((state_val_9645 === (3))){
var inst_9642 = (state_9644[(2)]);
var state_9644__$1 = state_9644;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9644__$1,inst_9642);
} else {
if((state_val_9645 === (4))){
var inst_9633 = (state_9644[(8)]);
var inst_9633__$1 = (state_9644[(2)]);
var inst_9634 = (inst_9633__$1 == null);
var state_9644__$1 = (function (){var statearr_9648 = state_9644;
(statearr_9648[(8)] = inst_9633__$1);

return statearr_9648;
})();
if(cljs.core.truth_(inst_9634)){
var statearr_9649_9663 = state_9644__$1;
(statearr_9649_9663[(1)] = (5));

} else {
var statearr_9650_9664 = state_9644__$1;
(statearr_9650_9664[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9645 === (5))){
var inst_9630 = (state_9644[(7)]);
var state_9644__$1 = state_9644;
var statearr_9651_9665 = state_9644__$1;
(statearr_9651_9665[(2)] = inst_9630);

(statearr_9651_9665[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9645 === (6))){
var inst_9633 = (state_9644[(8)]);
var inst_9630 = (state_9644[(7)]);
var inst_9637 = f.call(null,inst_9630,inst_9633);
var inst_9630__$1 = inst_9637;
var state_9644__$1 = (function (){var statearr_9652 = state_9644;
(statearr_9652[(7)] = inst_9630__$1);

return statearr_9652;
})();
var statearr_9653_9666 = state_9644__$1;
(statearr_9653_9666[(2)] = null);

(statearr_9653_9666[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9645 === (7))){
var inst_9640 = (state_9644[(2)]);
var state_9644__$1 = state_9644;
var statearr_9654_9667 = state_9644__$1;
(statearr_9654_9667[(2)] = inst_9640);

(statearr_9654_9667[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__6667__auto__))
;
return ((function (switch__6605__auto__,c__6667__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__6606__auto__ = null;
var cljs$core$async$reduce_$_state_machine__6606__auto____0 = (function (){
var statearr_9658 = [null,null,null,null,null,null,null,null,null];
(statearr_9658[(0)] = cljs$core$async$reduce_$_state_machine__6606__auto__);

(statearr_9658[(1)] = (1));

return statearr_9658;
});
var cljs$core$async$reduce_$_state_machine__6606__auto____1 = (function (state_9644){
while(true){
var ret_value__6607__auto__ = (function (){try{while(true){
var result__6608__auto__ = switch__6605__auto__.call(null,state_9644);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6608__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6608__auto__;
}
break;
}
}catch (e9659){if((e9659 instanceof Object)){
var ex__6609__auto__ = e9659;
var statearr_9660_9668 = state_9644;
(statearr_9660_9668[(5)] = ex__6609__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9644);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9659;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9669 = state_9644;
state_9644 = G__9669;
continue;
} else {
return ret_value__6607__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__6606__auto__ = function(state_9644){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__6606__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__6606__auto____1.call(this,state_9644);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__6606__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__6606__auto____0;
cljs$core$async$reduce_$_state_machine__6606__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__6606__auto____1;
return cljs$core$async$reduce_$_state_machine__6606__auto__;
})()
;})(switch__6605__auto__,c__6667__auto__))
})();
var state__6669__auto__ = (function (){var statearr_9661 = f__6668__auto__.call(null);
(statearr_9661[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6667__auto__);

return statearr_9661;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6669__auto__);
});})(c__6667__auto__))
);

return c__6667__auto__;
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
var G__9671 = arguments.length;
switch (G__9671) {
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
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__6667__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6667__auto__){
return (function (){
var f__6668__auto__ = (function (){var switch__6605__auto__ = ((function (c__6667__auto__){
return (function (state_9696){
var state_val_9697 = (state_9696[(1)]);
if((state_val_9697 === (7))){
var inst_9678 = (state_9696[(2)]);
var state_9696__$1 = state_9696;
var statearr_9698_9722 = state_9696__$1;
(statearr_9698_9722[(2)] = inst_9678);

(statearr_9698_9722[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9697 === (1))){
var inst_9672 = cljs.core.seq.call(null,coll);
var inst_9673 = inst_9672;
var state_9696__$1 = (function (){var statearr_9699 = state_9696;
(statearr_9699[(7)] = inst_9673);

return statearr_9699;
})();
var statearr_9700_9723 = state_9696__$1;
(statearr_9700_9723[(2)] = null);

(statearr_9700_9723[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9697 === (4))){
var inst_9673 = (state_9696[(7)]);
var inst_9676 = cljs.core.first.call(null,inst_9673);
var state_9696__$1 = state_9696;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9696__$1,(7),ch,inst_9676);
} else {
if((state_val_9697 === (13))){
var inst_9690 = (state_9696[(2)]);
var state_9696__$1 = state_9696;
var statearr_9701_9724 = state_9696__$1;
(statearr_9701_9724[(2)] = inst_9690);

(statearr_9701_9724[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9697 === (6))){
var inst_9681 = (state_9696[(2)]);
var state_9696__$1 = state_9696;
if(cljs.core.truth_(inst_9681)){
var statearr_9702_9725 = state_9696__$1;
(statearr_9702_9725[(1)] = (8));

} else {
var statearr_9703_9726 = state_9696__$1;
(statearr_9703_9726[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9697 === (3))){
var inst_9694 = (state_9696[(2)]);
var state_9696__$1 = state_9696;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9696__$1,inst_9694);
} else {
if((state_val_9697 === (12))){
var state_9696__$1 = state_9696;
var statearr_9704_9727 = state_9696__$1;
(statearr_9704_9727[(2)] = null);

(statearr_9704_9727[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9697 === (2))){
var inst_9673 = (state_9696[(7)]);
var state_9696__$1 = state_9696;
if(cljs.core.truth_(inst_9673)){
var statearr_9705_9728 = state_9696__$1;
(statearr_9705_9728[(1)] = (4));

} else {
var statearr_9706_9729 = state_9696__$1;
(statearr_9706_9729[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9697 === (11))){
var inst_9687 = cljs.core.async.close_BANG_.call(null,ch);
var state_9696__$1 = state_9696;
var statearr_9707_9730 = state_9696__$1;
(statearr_9707_9730[(2)] = inst_9687);

(statearr_9707_9730[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9697 === (9))){
var state_9696__$1 = state_9696;
if(cljs.core.truth_(close_QMARK_)){
var statearr_9708_9731 = state_9696__$1;
(statearr_9708_9731[(1)] = (11));

} else {
var statearr_9709_9732 = state_9696__$1;
(statearr_9709_9732[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9697 === (5))){
var inst_9673 = (state_9696[(7)]);
var state_9696__$1 = state_9696;
var statearr_9710_9733 = state_9696__$1;
(statearr_9710_9733[(2)] = inst_9673);

(statearr_9710_9733[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9697 === (10))){
var inst_9692 = (state_9696[(2)]);
var state_9696__$1 = state_9696;
var statearr_9711_9734 = state_9696__$1;
(statearr_9711_9734[(2)] = inst_9692);

(statearr_9711_9734[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9697 === (8))){
var inst_9673 = (state_9696[(7)]);
var inst_9683 = cljs.core.next.call(null,inst_9673);
var inst_9673__$1 = inst_9683;
var state_9696__$1 = (function (){var statearr_9712 = state_9696;
(statearr_9712[(7)] = inst_9673__$1);

return statearr_9712;
})();
var statearr_9713_9735 = state_9696__$1;
(statearr_9713_9735[(2)] = null);

(statearr_9713_9735[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__6667__auto__))
;
return ((function (switch__6605__auto__,c__6667__auto__){
return (function() {
var cljs$core$async$state_machine__6606__auto__ = null;
var cljs$core$async$state_machine__6606__auto____0 = (function (){
var statearr_9717 = [null,null,null,null,null,null,null,null];
(statearr_9717[(0)] = cljs$core$async$state_machine__6606__auto__);

(statearr_9717[(1)] = (1));

return statearr_9717;
});
var cljs$core$async$state_machine__6606__auto____1 = (function (state_9696){
while(true){
var ret_value__6607__auto__ = (function (){try{while(true){
var result__6608__auto__ = switch__6605__auto__.call(null,state_9696);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6608__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6608__auto__;
}
break;
}
}catch (e9718){if((e9718 instanceof Object)){
var ex__6609__auto__ = e9718;
var statearr_9719_9736 = state_9696;
(statearr_9719_9736[(5)] = ex__6609__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9696);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9718;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9737 = state_9696;
state_9696 = G__9737;
continue;
} else {
return ret_value__6607__auto__;
}
break;
}
});
cljs$core$async$state_machine__6606__auto__ = function(state_9696){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6606__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6606__auto____1.call(this,state_9696);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6606__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6606__auto____0;
cljs$core$async$state_machine__6606__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6606__auto____1;
return cljs$core$async$state_machine__6606__auto__;
})()
;})(switch__6605__auto__,c__6667__auto__))
})();
var state__6669__auto__ = (function (){var statearr_9720 = f__6668__auto__.call(null);
(statearr_9720[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6667__auto__);

return statearr_9720;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6669__auto__);
});})(c__6667__auto__))
);

return c__6667__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 * closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj9739 = {};
return obj9739;
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
return (function (){var or__4307__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4943__auto__)]);
if(or__4307__auto__){
return or__4307__auto__;
} else {
var or__4307__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__4307__auto____$1){
return or__4307__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj9741 = {};
return obj9741;
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
return (function (){var or__4307__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4943__auto__)]);
if(or__4307__auto__){
return or__4307__auto__;
} else {
var or__4307__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__4307__auto____$1){
return or__4307__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
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
return (function (){var or__4307__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4943__auto__)]);
if(or__4307__auto__){
return or__4307__auto__;
} else {
var or__4307__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__4307__auto____$1){
return or__4307__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
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
return (function (){var or__4307__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4943__auto__)]);
if(or__4307__auto__){
return or__4307__auto__;
} else {
var or__4307__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__4307__auto____$1){
return or__4307__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t9963 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t9963 = (function (mult,ch,cs,meta9964){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta9964 = meta9964;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t9963.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_9965,meta9964__$1){
var self__ = this;
var _9965__$1 = this;
return (new cljs.core.async.t9963(self__.mult,self__.ch,self__.cs,meta9964__$1));
});})(cs))
;

cljs.core.async.t9963.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_9965){
var self__ = this;
var _9965__$1 = this;
return self__.meta9964;
});})(cs))
;

cljs.core.async.t9963.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t9963.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t9963.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t9963.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t9963.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t9963.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t9963.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta9964","meta9964",-1746135394,null)], null);
});})(cs))
;

cljs.core.async.t9963.cljs$lang$type = true;

cljs.core.async.t9963.cljs$lang$ctorStr = "cljs.core.async/t9963";

cljs.core.async.t9963.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4886__auto__,writer__4887__auto__,opt__4888__auto__){
return cljs.core._write.call(null,writer__4887__auto__,"cljs.core.async/t9963");
});})(cs))
;

cljs.core.async.__GT_t9963 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t9963(mult__$1,ch__$1,cs__$1,meta9964){
return (new cljs.core.async.t9963(mult__$1,ch__$1,cs__$1,meta9964));
});})(cs))
;

}

return (new cljs.core.async.t9963(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__6667__auto___10184 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6667__auto___10184,cs,m,dchan,dctr,done){
return (function (){
var f__6668__auto__ = (function (){var switch__6605__auto__ = ((function (c__6667__auto___10184,cs,m,dchan,dctr,done){
return (function (state_10096){
var state_val_10097 = (state_10096[(1)]);
if((state_val_10097 === (7))){
var inst_10092 = (state_10096[(2)]);
var state_10096__$1 = state_10096;
var statearr_10098_10185 = state_10096__$1;
(statearr_10098_10185[(2)] = inst_10092);

(statearr_10098_10185[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10097 === (20))){
var inst_9997 = (state_10096[(7)]);
var inst_10007 = cljs.core.first.call(null,inst_9997);
var inst_10008 = cljs.core.nth.call(null,inst_10007,(0),null);
var inst_10009 = cljs.core.nth.call(null,inst_10007,(1),null);
var state_10096__$1 = (function (){var statearr_10099 = state_10096;
(statearr_10099[(8)] = inst_10008);

return statearr_10099;
})();
if(cljs.core.truth_(inst_10009)){
var statearr_10100_10186 = state_10096__$1;
(statearr_10100_10186[(1)] = (22));

} else {
var statearr_10101_10187 = state_10096__$1;
(statearr_10101_10187[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10097 === (27))){
var inst_10044 = (state_10096[(9)]);
var inst_10039 = (state_10096[(10)]);
var inst_9968 = (state_10096[(11)]);
var inst_10037 = (state_10096[(12)]);
var inst_10044__$1 = cljs.core._nth.call(null,inst_10037,inst_10039);
var inst_10045 = cljs.core.async.put_BANG_.call(null,inst_10044__$1,inst_9968,done);
var state_10096__$1 = (function (){var statearr_10102 = state_10096;
(statearr_10102[(9)] = inst_10044__$1);

return statearr_10102;
})();
if(cljs.core.truth_(inst_10045)){
var statearr_10103_10188 = state_10096__$1;
(statearr_10103_10188[(1)] = (30));

} else {
var statearr_10104_10189 = state_10096__$1;
(statearr_10104_10189[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10097 === (1))){
var state_10096__$1 = state_10096;
var statearr_10105_10190 = state_10096__$1;
(statearr_10105_10190[(2)] = null);

(statearr_10105_10190[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10097 === (24))){
var inst_9997 = (state_10096[(7)]);
var inst_10014 = (state_10096[(2)]);
var inst_10015 = cljs.core.next.call(null,inst_9997);
var inst_9977 = inst_10015;
var inst_9978 = null;
var inst_9979 = (0);
var inst_9980 = (0);
var state_10096__$1 = (function (){var statearr_10106 = state_10096;
(statearr_10106[(13)] = inst_9978);

(statearr_10106[(14)] = inst_10014);

(statearr_10106[(15)] = inst_9979);

(statearr_10106[(16)] = inst_9977);

(statearr_10106[(17)] = inst_9980);

return statearr_10106;
})();
var statearr_10107_10191 = state_10096__$1;
(statearr_10107_10191[(2)] = null);

(statearr_10107_10191[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10097 === (39))){
var state_10096__$1 = state_10096;
var statearr_10111_10192 = state_10096__$1;
(statearr_10111_10192[(2)] = null);

(statearr_10111_10192[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10097 === (4))){
var inst_9968 = (state_10096[(11)]);
var inst_9968__$1 = (state_10096[(2)]);
var inst_9969 = (inst_9968__$1 == null);
var state_10096__$1 = (function (){var statearr_10112 = state_10096;
(statearr_10112[(11)] = inst_9968__$1);

return statearr_10112;
})();
if(cljs.core.truth_(inst_9969)){
var statearr_10113_10193 = state_10096__$1;
(statearr_10113_10193[(1)] = (5));

} else {
var statearr_10114_10194 = state_10096__$1;
(statearr_10114_10194[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10097 === (15))){
var inst_9978 = (state_10096[(13)]);
var inst_9979 = (state_10096[(15)]);
var inst_9977 = (state_10096[(16)]);
var inst_9980 = (state_10096[(17)]);
var inst_9993 = (state_10096[(2)]);
var inst_9994 = (inst_9980 + (1));
var tmp10108 = inst_9978;
var tmp10109 = inst_9979;
var tmp10110 = inst_9977;
var inst_9977__$1 = tmp10110;
var inst_9978__$1 = tmp10108;
var inst_9979__$1 = tmp10109;
var inst_9980__$1 = inst_9994;
var state_10096__$1 = (function (){var statearr_10115 = state_10096;
(statearr_10115[(18)] = inst_9993);

(statearr_10115[(13)] = inst_9978__$1);

(statearr_10115[(15)] = inst_9979__$1);

(statearr_10115[(16)] = inst_9977__$1);

(statearr_10115[(17)] = inst_9980__$1);

return statearr_10115;
})();
var statearr_10116_10195 = state_10096__$1;
(statearr_10116_10195[(2)] = null);

(statearr_10116_10195[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10097 === (21))){
var inst_10018 = (state_10096[(2)]);
var state_10096__$1 = state_10096;
var statearr_10120_10196 = state_10096__$1;
(statearr_10120_10196[(2)] = inst_10018);

(statearr_10120_10196[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10097 === (31))){
var inst_10044 = (state_10096[(9)]);
var inst_10048 = done.call(null,null);
var inst_10049 = cljs.core.async.untap_STAR_.call(null,m,inst_10044);
var state_10096__$1 = (function (){var statearr_10121 = state_10096;
(statearr_10121[(19)] = inst_10048);

return statearr_10121;
})();
var statearr_10122_10197 = state_10096__$1;
(statearr_10122_10197[(2)] = inst_10049);

(statearr_10122_10197[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10097 === (32))){
var inst_10036 = (state_10096[(20)]);
var inst_10039 = (state_10096[(10)]);
var inst_10038 = (state_10096[(21)]);
var inst_10037 = (state_10096[(12)]);
var inst_10051 = (state_10096[(2)]);
var inst_10052 = (inst_10039 + (1));
var tmp10117 = inst_10036;
var tmp10118 = inst_10038;
var tmp10119 = inst_10037;
var inst_10036__$1 = tmp10117;
var inst_10037__$1 = tmp10119;
var inst_10038__$1 = tmp10118;
var inst_10039__$1 = inst_10052;
var state_10096__$1 = (function (){var statearr_10123 = state_10096;
(statearr_10123[(22)] = inst_10051);

(statearr_10123[(20)] = inst_10036__$1);

(statearr_10123[(10)] = inst_10039__$1);

(statearr_10123[(21)] = inst_10038__$1);

(statearr_10123[(12)] = inst_10037__$1);

return statearr_10123;
})();
var statearr_10124_10198 = state_10096__$1;
(statearr_10124_10198[(2)] = null);

(statearr_10124_10198[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10097 === (40))){
var inst_10064 = (state_10096[(23)]);
var inst_10068 = done.call(null,null);
var inst_10069 = cljs.core.async.untap_STAR_.call(null,m,inst_10064);
var state_10096__$1 = (function (){var statearr_10125 = state_10096;
(statearr_10125[(24)] = inst_10068);

return statearr_10125;
})();
var statearr_10126_10199 = state_10096__$1;
(statearr_10126_10199[(2)] = inst_10069);

(statearr_10126_10199[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10097 === (33))){
var inst_10055 = (state_10096[(25)]);
var inst_10057 = cljs.core.chunked_seq_QMARK_.call(null,inst_10055);
var state_10096__$1 = state_10096;
if(inst_10057){
var statearr_10127_10200 = state_10096__$1;
(statearr_10127_10200[(1)] = (36));

} else {
var statearr_10128_10201 = state_10096__$1;
(statearr_10128_10201[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10097 === (13))){
var inst_9987 = (state_10096[(26)]);
var inst_9990 = cljs.core.async.close_BANG_.call(null,inst_9987);
var state_10096__$1 = state_10096;
var statearr_10129_10202 = state_10096__$1;
(statearr_10129_10202[(2)] = inst_9990);

(statearr_10129_10202[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10097 === (22))){
var inst_10008 = (state_10096[(8)]);
var inst_10011 = cljs.core.async.close_BANG_.call(null,inst_10008);
var state_10096__$1 = state_10096;
var statearr_10130_10203 = state_10096__$1;
(statearr_10130_10203[(2)] = inst_10011);

(statearr_10130_10203[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10097 === (36))){
var inst_10055 = (state_10096[(25)]);
var inst_10059 = cljs.core.chunk_first.call(null,inst_10055);
var inst_10060 = cljs.core.chunk_rest.call(null,inst_10055);
var inst_10061 = cljs.core.count.call(null,inst_10059);
var inst_10036 = inst_10060;
var inst_10037 = inst_10059;
var inst_10038 = inst_10061;
var inst_10039 = (0);
var state_10096__$1 = (function (){var statearr_10131 = state_10096;
(statearr_10131[(20)] = inst_10036);

(statearr_10131[(10)] = inst_10039);

(statearr_10131[(21)] = inst_10038);

(statearr_10131[(12)] = inst_10037);

return statearr_10131;
})();
var statearr_10132_10204 = state_10096__$1;
(statearr_10132_10204[(2)] = null);

(statearr_10132_10204[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10097 === (41))){
var inst_10055 = (state_10096[(25)]);
var inst_10071 = (state_10096[(2)]);
var inst_10072 = cljs.core.next.call(null,inst_10055);
var inst_10036 = inst_10072;
var inst_10037 = null;
var inst_10038 = (0);
var inst_10039 = (0);
var state_10096__$1 = (function (){var statearr_10133 = state_10096;
(statearr_10133[(27)] = inst_10071);

(statearr_10133[(20)] = inst_10036);

(statearr_10133[(10)] = inst_10039);

(statearr_10133[(21)] = inst_10038);

(statearr_10133[(12)] = inst_10037);

return statearr_10133;
})();
var statearr_10134_10205 = state_10096__$1;
(statearr_10134_10205[(2)] = null);

(statearr_10134_10205[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10097 === (43))){
var state_10096__$1 = state_10096;
var statearr_10135_10206 = state_10096__$1;
(statearr_10135_10206[(2)] = null);

(statearr_10135_10206[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10097 === (29))){
var inst_10080 = (state_10096[(2)]);
var state_10096__$1 = state_10096;
var statearr_10136_10207 = state_10096__$1;
(statearr_10136_10207[(2)] = inst_10080);

(statearr_10136_10207[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10097 === (44))){
var inst_10089 = (state_10096[(2)]);
var state_10096__$1 = (function (){var statearr_10137 = state_10096;
(statearr_10137[(28)] = inst_10089);

return statearr_10137;
})();
var statearr_10138_10208 = state_10096__$1;
(statearr_10138_10208[(2)] = null);

(statearr_10138_10208[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10097 === (6))){
var inst_10028 = (state_10096[(29)]);
var inst_10027 = cljs.core.deref.call(null,cs);
var inst_10028__$1 = cljs.core.keys.call(null,inst_10027);
var inst_10029 = cljs.core.count.call(null,inst_10028__$1);
var inst_10030 = cljs.core.reset_BANG_.call(null,dctr,inst_10029);
var inst_10035 = cljs.core.seq.call(null,inst_10028__$1);
var inst_10036 = inst_10035;
var inst_10037 = null;
var inst_10038 = (0);
var inst_10039 = (0);
var state_10096__$1 = (function (){var statearr_10139 = state_10096;
(statearr_10139[(20)] = inst_10036);

(statearr_10139[(29)] = inst_10028__$1);

(statearr_10139[(10)] = inst_10039);

(statearr_10139[(30)] = inst_10030);

(statearr_10139[(21)] = inst_10038);

(statearr_10139[(12)] = inst_10037);

return statearr_10139;
})();
var statearr_10140_10209 = state_10096__$1;
(statearr_10140_10209[(2)] = null);

(statearr_10140_10209[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10097 === (28))){
var inst_10036 = (state_10096[(20)]);
var inst_10055 = (state_10096[(25)]);
var inst_10055__$1 = cljs.core.seq.call(null,inst_10036);
var state_10096__$1 = (function (){var statearr_10141 = state_10096;
(statearr_10141[(25)] = inst_10055__$1);

return statearr_10141;
})();
if(inst_10055__$1){
var statearr_10142_10210 = state_10096__$1;
(statearr_10142_10210[(1)] = (33));

} else {
var statearr_10143_10211 = state_10096__$1;
(statearr_10143_10211[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10097 === (25))){
var inst_10039 = (state_10096[(10)]);
var inst_10038 = (state_10096[(21)]);
var inst_10041 = (inst_10039 < inst_10038);
var inst_10042 = inst_10041;
var state_10096__$1 = state_10096;
if(cljs.core.truth_(inst_10042)){
var statearr_10144_10212 = state_10096__$1;
(statearr_10144_10212[(1)] = (27));

} else {
var statearr_10145_10213 = state_10096__$1;
(statearr_10145_10213[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10097 === (34))){
var state_10096__$1 = state_10096;
var statearr_10146_10214 = state_10096__$1;
(statearr_10146_10214[(2)] = null);

(statearr_10146_10214[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10097 === (17))){
var state_10096__$1 = state_10096;
var statearr_10147_10215 = state_10096__$1;
(statearr_10147_10215[(2)] = null);

(statearr_10147_10215[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10097 === (3))){
var inst_10094 = (state_10096[(2)]);
var state_10096__$1 = state_10096;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10096__$1,inst_10094);
} else {
if((state_val_10097 === (12))){
var inst_10023 = (state_10096[(2)]);
var state_10096__$1 = state_10096;
var statearr_10148_10216 = state_10096__$1;
(statearr_10148_10216[(2)] = inst_10023);

(statearr_10148_10216[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10097 === (2))){
var state_10096__$1 = state_10096;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10096__$1,(4),ch);
} else {
if((state_val_10097 === (23))){
var state_10096__$1 = state_10096;
var statearr_10149_10217 = state_10096__$1;
(statearr_10149_10217[(2)] = null);

(statearr_10149_10217[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10097 === (35))){
var inst_10078 = (state_10096[(2)]);
var state_10096__$1 = state_10096;
var statearr_10150_10218 = state_10096__$1;
(statearr_10150_10218[(2)] = inst_10078);

(statearr_10150_10218[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10097 === (19))){
var inst_9997 = (state_10096[(7)]);
var inst_10001 = cljs.core.chunk_first.call(null,inst_9997);
var inst_10002 = cljs.core.chunk_rest.call(null,inst_9997);
var inst_10003 = cljs.core.count.call(null,inst_10001);
var inst_9977 = inst_10002;
var inst_9978 = inst_10001;
var inst_9979 = inst_10003;
var inst_9980 = (0);
var state_10096__$1 = (function (){var statearr_10151 = state_10096;
(statearr_10151[(13)] = inst_9978);

(statearr_10151[(15)] = inst_9979);

(statearr_10151[(16)] = inst_9977);

(statearr_10151[(17)] = inst_9980);

return statearr_10151;
})();
var statearr_10152_10219 = state_10096__$1;
(statearr_10152_10219[(2)] = null);

(statearr_10152_10219[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10097 === (11))){
var inst_9997 = (state_10096[(7)]);
var inst_9977 = (state_10096[(16)]);
var inst_9997__$1 = cljs.core.seq.call(null,inst_9977);
var state_10096__$1 = (function (){var statearr_10153 = state_10096;
(statearr_10153[(7)] = inst_9997__$1);

return statearr_10153;
})();
if(inst_9997__$1){
var statearr_10154_10220 = state_10096__$1;
(statearr_10154_10220[(1)] = (16));

} else {
var statearr_10155_10221 = state_10096__$1;
(statearr_10155_10221[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10097 === (9))){
var inst_10025 = (state_10096[(2)]);
var state_10096__$1 = state_10096;
var statearr_10156_10222 = state_10096__$1;
(statearr_10156_10222[(2)] = inst_10025);

(statearr_10156_10222[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10097 === (5))){
var inst_9975 = cljs.core.deref.call(null,cs);
var inst_9976 = cljs.core.seq.call(null,inst_9975);
var inst_9977 = inst_9976;
var inst_9978 = null;
var inst_9979 = (0);
var inst_9980 = (0);
var state_10096__$1 = (function (){var statearr_10157 = state_10096;
(statearr_10157[(13)] = inst_9978);

(statearr_10157[(15)] = inst_9979);

(statearr_10157[(16)] = inst_9977);

(statearr_10157[(17)] = inst_9980);

return statearr_10157;
})();
var statearr_10158_10223 = state_10096__$1;
(statearr_10158_10223[(2)] = null);

(statearr_10158_10223[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10097 === (14))){
var state_10096__$1 = state_10096;
var statearr_10159_10224 = state_10096__$1;
(statearr_10159_10224[(2)] = null);

(statearr_10159_10224[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10097 === (45))){
var inst_10086 = (state_10096[(2)]);
var state_10096__$1 = state_10096;
var statearr_10160_10225 = state_10096__$1;
(statearr_10160_10225[(2)] = inst_10086);

(statearr_10160_10225[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10097 === (26))){
var inst_10028 = (state_10096[(29)]);
var inst_10082 = (state_10096[(2)]);
var inst_10083 = cljs.core.seq.call(null,inst_10028);
var state_10096__$1 = (function (){var statearr_10161 = state_10096;
(statearr_10161[(31)] = inst_10082);

return statearr_10161;
})();
if(inst_10083){
var statearr_10162_10226 = state_10096__$1;
(statearr_10162_10226[(1)] = (42));

} else {
var statearr_10163_10227 = state_10096__$1;
(statearr_10163_10227[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10097 === (16))){
var inst_9997 = (state_10096[(7)]);
var inst_9999 = cljs.core.chunked_seq_QMARK_.call(null,inst_9997);
var state_10096__$1 = state_10096;
if(inst_9999){
var statearr_10164_10228 = state_10096__$1;
(statearr_10164_10228[(1)] = (19));

} else {
var statearr_10165_10229 = state_10096__$1;
(statearr_10165_10229[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10097 === (38))){
var inst_10075 = (state_10096[(2)]);
var state_10096__$1 = state_10096;
var statearr_10166_10230 = state_10096__$1;
(statearr_10166_10230[(2)] = inst_10075);

(statearr_10166_10230[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10097 === (30))){
var state_10096__$1 = state_10096;
var statearr_10167_10231 = state_10096__$1;
(statearr_10167_10231[(2)] = null);

(statearr_10167_10231[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10097 === (10))){
var inst_9978 = (state_10096[(13)]);
var inst_9980 = (state_10096[(17)]);
var inst_9986 = cljs.core._nth.call(null,inst_9978,inst_9980);
var inst_9987 = cljs.core.nth.call(null,inst_9986,(0),null);
var inst_9988 = cljs.core.nth.call(null,inst_9986,(1),null);
var state_10096__$1 = (function (){var statearr_10168 = state_10096;
(statearr_10168[(26)] = inst_9987);

return statearr_10168;
})();
if(cljs.core.truth_(inst_9988)){
var statearr_10169_10232 = state_10096__$1;
(statearr_10169_10232[(1)] = (13));

} else {
var statearr_10170_10233 = state_10096__$1;
(statearr_10170_10233[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10097 === (18))){
var inst_10021 = (state_10096[(2)]);
var state_10096__$1 = state_10096;
var statearr_10171_10234 = state_10096__$1;
(statearr_10171_10234[(2)] = inst_10021);

(statearr_10171_10234[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10097 === (42))){
var state_10096__$1 = state_10096;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10096__$1,(45),dchan);
} else {
if((state_val_10097 === (37))){
var inst_10064 = (state_10096[(23)]);
var inst_10055 = (state_10096[(25)]);
var inst_9968 = (state_10096[(11)]);
var inst_10064__$1 = cljs.core.first.call(null,inst_10055);
var inst_10065 = cljs.core.async.put_BANG_.call(null,inst_10064__$1,inst_9968,done);
var state_10096__$1 = (function (){var statearr_10172 = state_10096;
(statearr_10172[(23)] = inst_10064__$1);

return statearr_10172;
})();
if(cljs.core.truth_(inst_10065)){
var statearr_10173_10235 = state_10096__$1;
(statearr_10173_10235[(1)] = (39));

} else {
var statearr_10174_10236 = state_10096__$1;
(statearr_10174_10236[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10097 === (8))){
var inst_9979 = (state_10096[(15)]);
var inst_9980 = (state_10096[(17)]);
var inst_9982 = (inst_9980 < inst_9979);
var inst_9983 = inst_9982;
var state_10096__$1 = state_10096;
if(cljs.core.truth_(inst_9983)){
var statearr_10175_10237 = state_10096__$1;
(statearr_10175_10237[(1)] = (10));

} else {
var statearr_10176_10238 = state_10096__$1;
(statearr_10176_10238[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__6667__auto___10184,cs,m,dchan,dctr,done))
;
return ((function (switch__6605__auto__,c__6667__auto___10184,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__6606__auto__ = null;
var cljs$core$async$mult_$_state_machine__6606__auto____0 = (function (){
var statearr_10180 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10180[(0)] = cljs$core$async$mult_$_state_machine__6606__auto__);

(statearr_10180[(1)] = (1));

return statearr_10180;
});
var cljs$core$async$mult_$_state_machine__6606__auto____1 = (function (state_10096){
while(true){
var ret_value__6607__auto__ = (function (){try{while(true){
var result__6608__auto__ = switch__6605__auto__.call(null,state_10096);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6608__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6608__auto__;
}
break;
}
}catch (e10181){if((e10181 instanceof Object)){
var ex__6609__auto__ = e10181;
var statearr_10182_10239 = state_10096;
(statearr_10182_10239[(5)] = ex__6609__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10096);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10181;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10240 = state_10096;
state_10096 = G__10240;
continue;
} else {
return ret_value__6607__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__6606__auto__ = function(state_10096){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__6606__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__6606__auto____1.call(this,state_10096);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__6606__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__6606__auto____0;
cljs$core$async$mult_$_state_machine__6606__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__6606__auto____1;
return cljs$core$async$mult_$_state_machine__6606__auto__;
})()
;})(switch__6605__auto__,c__6667__auto___10184,cs,m,dchan,dctr,done))
})();
var state__6669__auto__ = (function (){var statearr_10183 = f__6668__auto__.call(null);
(statearr_10183[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6667__auto___10184);

return statearr_10183;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6669__auto__);
});})(c__6667__auto___10184,cs,m,dchan,dctr,done))
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
var G__10242 = arguments.length;
switch (G__10242) {
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
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj10245 = {};
return obj10245;
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
return (function (){var or__4307__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4943__auto__)]);
if(or__4307__auto__){
return or__4307__auto__;
} else {
var or__4307__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__4307__auto____$1){
return or__4307__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
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
return (function (){var or__4307__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4943__auto__)]);
if(or__4307__auto__){
return or__4307__auto__;
} else {
var or__4307__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__4307__auto____$1){
return or__4307__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
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
return (function (){var or__4307__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4943__auto__)]);
if(or__4307__auto__){
return or__4307__auto__;
} else {
var or__4307__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__4307__auto____$1){
return or__4307__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
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
return (function (){var or__4307__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4943__auto__)]);
if(or__4307__auto__){
return or__4307__auto__;
} else {
var or__4307__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__4307__auto____$1){
return or__4307__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
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
return (function (){var or__4307__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4943__auto__)]);
if(or__4307__auto__){
return or__4307__auto__;
} else {
var or__4307__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__4307__auto____$1){
return or__4307__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(){
var argseq__5347__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5347__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__10250){
var map__10251 = p__10250;
var map__10251__$1 = ((cljs.core.seq_QMARK_.call(null,map__10251))?cljs.core.apply.call(null,cljs.core.hash_map,map__10251):map__10251);
var opts = map__10251__$1;
var statearr_10252_10255 = state;
(statearr_10252_10255[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4423__auto__ = cljs.core.async.do_alts.call(null,((function (map__10251,map__10251__$1,opts){
return (function (val){
var statearr_10253_10256 = state;
(statearr_10253_10256[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__10251,map__10251__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4423__auto__)){
var cb = temp__4423__auto__;
var statearr_10254_10257 = state;
(statearr_10254_10257[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq10246){
var G__10247 = cljs.core.first.call(null,seq10246);
var seq10246__$1 = cljs.core.next.call(null,seq10246);
var G__10248 = cljs.core.first.call(null,seq10246__$1);
var seq10246__$2 = cljs.core.next.call(null,seq10246__$1);
var G__10249 = cljs.core.first.call(null,seq10246__$2);
var seq10246__$3 = cljs.core.next.call(null,seq10246__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__10247,G__10248,G__10249,seq10246__$3);
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t10377 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t10377 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta10378){
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
this.meta10378 = meta10378;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t10377.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_10379,meta10378__$1){
var self__ = this;
var _10379__$1 = this;
return (new cljs.core.async.t10377(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta10378__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t10377.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_10379){
var self__ = this;
var _10379__$1 = this;
return self__.meta10378;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t10377.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t10377.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t10377.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t10377.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t10377.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t10377.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t10377.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t10377.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t10377.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta10378","meta10378",-1118506371,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t10377.cljs$lang$type = true;

cljs.core.async.t10377.cljs$lang$ctorStr = "cljs.core.async/t10377";

cljs.core.async.t10377.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4886__auto__,writer__4887__auto__,opt__4888__auto__){
return cljs.core._write.call(null,writer__4887__auto__,"cljs.core.async/t10377");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t10377 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t10377(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta10378){
return (new cljs.core.async.t10377(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta10378));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t10377(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__6667__auto___10496 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6667__auto___10496,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__6668__auto__ = (function (){var switch__6605__auto__ = ((function (c__6667__auto___10496,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_10449){
var state_val_10450 = (state_10449[(1)]);
if((state_val_10450 === (7))){
var inst_10393 = (state_10449[(7)]);
var inst_10398 = cljs.core.apply.call(null,cljs.core.hash_map,inst_10393);
var state_10449__$1 = state_10449;
var statearr_10451_10497 = state_10449__$1;
(statearr_10451_10497[(2)] = inst_10398);

(statearr_10451_10497[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10450 === (20))){
var inst_10408 = (state_10449[(8)]);
var state_10449__$1 = state_10449;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10449__$1,(23),out,inst_10408);
} else {
if((state_val_10450 === (1))){
var inst_10383 = (state_10449[(9)]);
var inst_10383__$1 = calc_state.call(null);
var inst_10384 = cljs.core.seq_QMARK_.call(null,inst_10383__$1);
var state_10449__$1 = (function (){var statearr_10452 = state_10449;
(statearr_10452[(9)] = inst_10383__$1);

return statearr_10452;
})();
if(inst_10384){
var statearr_10453_10498 = state_10449__$1;
(statearr_10453_10498[(1)] = (2));

} else {
var statearr_10454_10499 = state_10449__$1;
(statearr_10454_10499[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10450 === (24))){
var inst_10401 = (state_10449[(10)]);
var inst_10393 = inst_10401;
var state_10449__$1 = (function (){var statearr_10455 = state_10449;
(statearr_10455[(7)] = inst_10393);

return statearr_10455;
})();
var statearr_10456_10500 = state_10449__$1;
(statearr_10456_10500[(2)] = null);

(statearr_10456_10500[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10450 === (4))){
var inst_10383 = (state_10449[(9)]);
var inst_10389 = (state_10449[(2)]);
var inst_10390 = cljs.core.get.call(null,inst_10389,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_10391 = cljs.core.get.call(null,inst_10389,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_10392 = cljs.core.get.call(null,inst_10389,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_10393 = inst_10383;
var state_10449__$1 = (function (){var statearr_10457 = state_10449;
(statearr_10457[(7)] = inst_10393);

(statearr_10457[(11)] = inst_10392);

(statearr_10457[(12)] = inst_10391);

(statearr_10457[(13)] = inst_10390);

return statearr_10457;
})();
var statearr_10458_10501 = state_10449__$1;
(statearr_10458_10501[(2)] = null);

(statearr_10458_10501[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10450 === (15))){
var state_10449__$1 = state_10449;
var statearr_10459_10502 = state_10449__$1;
(statearr_10459_10502[(2)] = null);

(statearr_10459_10502[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10450 === (21))){
var inst_10401 = (state_10449[(10)]);
var inst_10393 = inst_10401;
var state_10449__$1 = (function (){var statearr_10460 = state_10449;
(statearr_10460[(7)] = inst_10393);

return statearr_10460;
})();
var statearr_10461_10503 = state_10449__$1;
(statearr_10461_10503[(2)] = null);

(statearr_10461_10503[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10450 === (13))){
var inst_10445 = (state_10449[(2)]);
var state_10449__$1 = state_10449;
var statearr_10462_10504 = state_10449__$1;
(statearr_10462_10504[(2)] = inst_10445);

(statearr_10462_10504[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10450 === (22))){
var inst_10443 = (state_10449[(2)]);
var state_10449__$1 = state_10449;
var statearr_10463_10505 = state_10449__$1;
(statearr_10463_10505[(2)] = inst_10443);

(statearr_10463_10505[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10450 === (6))){
var inst_10447 = (state_10449[(2)]);
var state_10449__$1 = state_10449;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10449__$1,inst_10447);
} else {
if((state_val_10450 === (25))){
var state_10449__$1 = state_10449;
var statearr_10464_10506 = state_10449__$1;
(statearr_10464_10506[(2)] = null);

(statearr_10464_10506[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10450 === (17))){
var inst_10423 = (state_10449[(14)]);
var state_10449__$1 = state_10449;
var statearr_10465_10507 = state_10449__$1;
(statearr_10465_10507[(2)] = inst_10423);

(statearr_10465_10507[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10450 === (3))){
var inst_10383 = (state_10449[(9)]);
var state_10449__$1 = state_10449;
var statearr_10466_10508 = state_10449__$1;
(statearr_10466_10508[(2)] = inst_10383);

(statearr_10466_10508[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10450 === (12))){
var inst_10402 = (state_10449[(15)]);
var inst_10423 = (state_10449[(14)]);
var inst_10409 = (state_10449[(16)]);
var inst_10423__$1 = inst_10402.call(null,inst_10409);
var state_10449__$1 = (function (){var statearr_10467 = state_10449;
(statearr_10467[(14)] = inst_10423__$1);

return statearr_10467;
})();
if(cljs.core.truth_(inst_10423__$1)){
var statearr_10468_10509 = state_10449__$1;
(statearr_10468_10509[(1)] = (17));

} else {
var statearr_10469_10510 = state_10449__$1;
(statearr_10469_10510[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10450 === (2))){
var inst_10383 = (state_10449[(9)]);
var inst_10386 = cljs.core.apply.call(null,cljs.core.hash_map,inst_10383);
var state_10449__$1 = state_10449;
var statearr_10470_10511 = state_10449__$1;
(statearr_10470_10511[(2)] = inst_10386);

(statearr_10470_10511[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10450 === (23))){
var inst_10434 = (state_10449[(2)]);
var state_10449__$1 = state_10449;
if(cljs.core.truth_(inst_10434)){
var statearr_10471_10512 = state_10449__$1;
(statearr_10471_10512[(1)] = (24));

} else {
var statearr_10472_10513 = state_10449__$1;
(statearr_10472_10513[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10450 === (19))){
var inst_10431 = (state_10449[(2)]);
var state_10449__$1 = state_10449;
if(cljs.core.truth_(inst_10431)){
var statearr_10473_10514 = state_10449__$1;
(statearr_10473_10514[(1)] = (20));

} else {
var statearr_10474_10515 = state_10449__$1;
(statearr_10474_10515[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10450 === (11))){
var inst_10408 = (state_10449[(8)]);
var inst_10414 = (inst_10408 == null);
var state_10449__$1 = state_10449;
if(cljs.core.truth_(inst_10414)){
var statearr_10475_10516 = state_10449__$1;
(statearr_10475_10516[(1)] = (14));

} else {
var statearr_10476_10517 = state_10449__$1;
(statearr_10476_10517[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10450 === (9))){
var inst_10401 = (state_10449[(10)]);
var inst_10401__$1 = (state_10449[(2)]);
var inst_10402 = cljs.core.get.call(null,inst_10401__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_10403 = cljs.core.get.call(null,inst_10401__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_10404 = cljs.core.get.call(null,inst_10401__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_10449__$1 = (function (){var statearr_10477 = state_10449;
(statearr_10477[(15)] = inst_10402);

(statearr_10477[(10)] = inst_10401__$1);

(statearr_10477[(17)] = inst_10403);

return statearr_10477;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_10449__$1,(10),inst_10404);
} else {
if((state_val_10450 === (5))){
var inst_10393 = (state_10449[(7)]);
var inst_10396 = cljs.core.seq_QMARK_.call(null,inst_10393);
var state_10449__$1 = state_10449;
if(inst_10396){
var statearr_10478_10518 = state_10449__$1;
(statearr_10478_10518[(1)] = (7));

} else {
var statearr_10479_10519 = state_10449__$1;
(statearr_10479_10519[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10450 === (14))){
var inst_10409 = (state_10449[(16)]);
var inst_10416 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_10409);
var state_10449__$1 = state_10449;
var statearr_10480_10520 = state_10449__$1;
(statearr_10480_10520[(2)] = inst_10416);

(statearr_10480_10520[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10450 === (26))){
var inst_10439 = (state_10449[(2)]);
var state_10449__$1 = state_10449;
var statearr_10481_10521 = state_10449__$1;
(statearr_10481_10521[(2)] = inst_10439);

(statearr_10481_10521[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10450 === (16))){
var inst_10419 = (state_10449[(2)]);
var inst_10420 = calc_state.call(null);
var inst_10393 = inst_10420;
var state_10449__$1 = (function (){var statearr_10482 = state_10449;
(statearr_10482[(7)] = inst_10393);

(statearr_10482[(18)] = inst_10419);

return statearr_10482;
})();
var statearr_10483_10522 = state_10449__$1;
(statearr_10483_10522[(2)] = null);

(statearr_10483_10522[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10450 === (10))){
var inst_10408 = (state_10449[(8)]);
var inst_10409 = (state_10449[(16)]);
var inst_10407 = (state_10449[(2)]);
var inst_10408__$1 = cljs.core.nth.call(null,inst_10407,(0),null);
var inst_10409__$1 = cljs.core.nth.call(null,inst_10407,(1),null);
var inst_10410 = (inst_10408__$1 == null);
var inst_10411 = cljs.core._EQ_.call(null,inst_10409__$1,change);
var inst_10412 = (inst_10410) || (inst_10411);
var state_10449__$1 = (function (){var statearr_10484 = state_10449;
(statearr_10484[(8)] = inst_10408__$1);

(statearr_10484[(16)] = inst_10409__$1);

return statearr_10484;
})();
if(cljs.core.truth_(inst_10412)){
var statearr_10485_10523 = state_10449__$1;
(statearr_10485_10523[(1)] = (11));

} else {
var statearr_10486_10524 = state_10449__$1;
(statearr_10486_10524[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10450 === (18))){
var inst_10402 = (state_10449[(15)]);
var inst_10403 = (state_10449[(17)]);
var inst_10409 = (state_10449[(16)]);
var inst_10426 = cljs.core.empty_QMARK_.call(null,inst_10402);
var inst_10427 = inst_10403.call(null,inst_10409);
var inst_10428 = cljs.core.not.call(null,inst_10427);
var inst_10429 = (inst_10426) && (inst_10428);
var state_10449__$1 = state_10449;
var statearr_10487_10525 = state_10449__$1;
(statearr_10487_10525[(2)] = inst_10429);

(statearr_10487_10525[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10450 === (8))){
var inst_10393 = (state_10449[(7)]);
var state_10449__$1 = state_10449;
var statearr_10488_10526 = state_10449__$1;
(statearr_10488_10526[(2)] = inst_10393);

(statearr_10488_10526[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__6667__auto___10496,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__6605__auto__,c__6667__auto___10496,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__6606__auto__ = null;
var cljs$core$async$mix_$_state_machine__6606__auto____0 = (function (){
var statearr_10492 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10492[(0)] = cljs$core$async$mix_$_state_machine__6606__auto__);

(statearr_10492[(1)] = (1));

return statearr_10492;
});
var cljs$core$async$mix_$_state_machine__6606__auto____1 = (function (state_10449){
while(true){
var ret_value__6607__auto__ = (function (){try{while(true){
var result__6608__auto__ = switch__6605__auto__.call(null,state_10449);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6608__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6608__auto__;
}
break;
}
}catch (e10493){if((e10493 instanceof Object)){
var ex__6609__auto__ = e10493;
var statearr_10494_10527 = state_10449;
(statearr_10494_10527[(5)] = ex__6609__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10449);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10493;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10528 = state_10449;
state_10449 = G__10528;
continue;
} else {
return ret_value__6607__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__6606__auto__ = function(state_10449){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__6606__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__6606__auto____1.call(this,state_10449);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__6606__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__6606__auto____0;
cljs$core$async$mix_$_state_machine__6606__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__6606__auto____1;
return cljs$core$async$mix_$_state_machine__6606__auto__;
})()
;})(switch__6605__auto__,c__6667__auto___10496,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__6669__auto__ = (function (){var statearr_10495 = f__6668__auto__.call(null);
(statearr_10495[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6667__auto___10496);

return statearr_10495;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6669__auto__);
});})(c__6667__auto___10496,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
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
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj10530 = {};
return obj10530;
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
return (function (){var or__4307__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4943__auto__)]);
if(or__4307__auto__){
return or__4307__auto__;
} else {
var or__4307__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__4307__auto____$1){
return or__4307__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
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
return (function (){var or__4307__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4943__auto__)]);
if(or__4307__auto__){
return or__4307__auto__;
} else {
var or__4307__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__4307__auto____$1){
return or__4307__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(){
var G__10532 = arguments.length;
switch (G__10532) {
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
return (function (){var or__4307__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4943__auto__)]);
if(or__4307__auto__){
return or__4307__auto__;
} else {
var or__4307__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__4307__auto____$1){
return or__4307__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
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
return (function (){var or__4307__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4943__auto__)]);
if(or__4307__auto__){
return or__4307__auto__;
} else {
var or__4307__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__4307__auto____$1){
return or__4307__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
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
var G__10536 = arguments.length;
switch (G__10536) {
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
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4307__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4307__auto__)){
return or__4307__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4307__auto__,mults){
return (function (p1__10534_SHARP_){
if(cljs.core.truth_(p1__10534_SHARP_.call(null,topic))){
return p1__10534_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__10534_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4307__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t10537 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t10537 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta10538){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta10538 = meta10538;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t10537.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_10539,meta10538__$1){
var self__ = this;
var _10539__$1 = this;
return (new cljs.core.async.t10537(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta10538__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t10537.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_10539){
var self__ = this;
var _10539__$1 = this;
return self__.meta10538;
});})(mults,ensure_mult))
;

cljs.core.async.t10537.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t10537.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t10537.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t10537.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t10537.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4423__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4423__auto__)){
var m = temp__4423__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t10537.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t10537.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t10537.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta10538","meta10538",643912681,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t10537.cljs$lang$type = true;

cljs.core.async.t10537.cljs$lang$ctorStr = "cljs.core.async/t10537";

cljs.core.async.t10537.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4886__auto__,writer__4887__auto__,opt__4888__auto__){
return cljs.core._write.call(null,writer__4887__auto__,"cljs.core.async/t10537");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t10537 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t10537(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta10538){
return (new cljs.core.async.t10537(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta10538));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t10537(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__6667__auto___10660 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6667__auto___10660,mults,ensure_mult,p){
return (function (){
var f__6668__auto__ = (function (){var switch__6605__auto__ = ((function (c__6667__auto___10660,mults,ensure_mult,p){
return (function (state_10611){
var state_val_10612 = (state_10611[(1)]);
if((state_val_10612 === (7))){
var inst_10607 = (state_10611[(2)]);
var state_10611__$1 = state_10611;
var statearr_10613_10661 = state_10611__$1;
(statearr_10613_10661[(2)] = inst_10607);

(statearr_10613_10661[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10612 === (20))){
var state_10611__$1 = state_10611;
var statearr_10614_10662 = state_10611__$1;
(statearr_10614_10662[(2)] = null);

(statearr_10614_10662[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10612 === (1))){
var state_10611__$1 = state_10611;
var statearr_10615_10663 = state_10611__$1;
(statearr_10615_10663[(2)] = null);

(statearr_10615_10663[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10612 === (24))){
var inst_10590 = (state_10611[(7)]);
var inst_10599 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_10590);
var state_10611__$1 = state_10611;
var statearr_10616_10664 = state_10611__$1;
(statearr_10616_10664[(2)] = inst_10599);

(statearr_10616_10664[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10612 === (4))){
var inst_10542 = (state_10611[(8)]);
var inst_10542__$1 = (state_10611[(2)]);
var inst_10543 = (inst_10542__$1 == null);
var state_10611__$1 = (function (){var statearr_10617 = state_10611;
(statearr_10617[(8)] = inst_10542__$1);

return statearr_10617;
})();
if(cljs.core.truth_(inst_10543)){
var statearr_10618_10665 = state_10611__$1;
(statearr_10618_10665[(1)] = (5));

} else {
var statearr_10619_10666 = state_10611__$1;
(statearr_10619_10666[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10612 === (15))){
var inst_10584 = (state_10611[(2)]);
var state_10611__$1 = state_10611;
var statearr_10620_10667 = state_10611__$1;
(statearr_10620_10667[(2)] = inst_10584);

(statearr_10620_10667[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10612 === (21))){
var inst_10604 = (state_10611[(2)]);
var state_10611__$1 = (function (){var statearr_10621 = state_10611;
(statearr_10621[(9)] = inst_10604);

return statearr_10621;
})();
var statearr_10622_10668 = state_10611__$1;
(statearr_10622_10668[(2)] = null);

(statearr_10622_10668[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10612 === (13))){
var inst_10566 = (state_10611[(10)]);
var inst_10568 = cljs.core.chunked_seq_QMARK_.call(null,inst_10566);
var state_10611__$1 = state_10611;
if(inst_10568){
var statearr_10623_10669 = state_10611__$1;
(statearr_10623_10669[(1)] = (16));

} else {
var statearr_10624_10670 = state_10611__$1;
(statearr_10624_10670[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10612 === (22))){
var inst_10596 = (state_10611[(2)]);
var state_10611__$1 = state_10611;
if(cljs.core.truth_(inst_10596)){
var statearr_10625_10671 = state_10611__$1;
(statearr_10625_10671[(1)] = (23));

} else {
var statearr_10626_10672 = state_10611__$1;
(statearr_10626_10672[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10612 === (6))){
var inst_10592 = (state_10611[(11)]);
var inst_10542 = (state_10611[(8)]);
var inst_10590 = (state_10611[(7)]);
var inst_10590__$1 = topic_fn.call(null,inst_10542);
var inst_10591 = cljs.core.deref.call(null,mults);
var inst_10592__$1 = cljs.core.get.call(null,inst_10591,inst_10590__$1);
var state_10611__$1 = (function (){var statearr_10627 = state_10611;
(statearr_10627[(11)] = inst_10592__$1);

(statearr_10627[(7)] = inst_10590__$1);

return statearr_10627;
})();
if(cljs.core.truth_(inst_10592__$1)){
var statearr_10628_10673 = state_10611__$1;
(statearr_10628_10673[(1)] = (19));

} else {
var statearr_10629_10674 = state_10611__$1;
(statearr_10629_10674[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10612 === (25))){
var inst_10601 = (state_10611[(2)]);
var state_10611__$1 = state_10611;
var statearr_10630_10675 = state_10611__$1;
(statearr_10630_10675[(2)] = inst_10601);

(statearr_10630_10675[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10612 === (17))){
var inst_10566 = (state_10611[(10)]);
var inst_10575 = cljs.core.first.call(null,inst_10566);
var inst_10576 = cljs.core.async.muxch_STAR_.call(null,inst_10575);
var inst_10577 = cljs.core.async.close_BANG_.call(null,inst_10576);
var inst_10578 = cljs.core.next.call(null,inst_10566);
var inst_10552 = inst_10578;
var inst_10553 = null;
var inst_10554 = (0);
var inst_10555 = (0);
var state_10611__$1 = (function (){var statearr_10631 = state_10611;
(statearr_10631[(12)] = inst_10552);

(statearr_10631[(13)] = inst_10555);

(statearr_10631[(14)] = inst_10577);

(statearr_10631[(15)] = inst_10553);

(statearr_10631[(16)] = inst_10554);

return statearr_10631;
})();
var statearr_10632_10676 = state_10611__$1;
(statearr_10632_10676[(2)] = null);

(statearr_10632_10676[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10612 === (3))){
var inst_10609 = (state_10611[(2)]);
var state_10611__$1 = state_10611;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10611__$1,inst_10609);
} else {
if((state_val_10612 === (12))){
var inst_10586 = (state_10611[(2)]);
var state_10611__$1 = state_10611;
var statearr_10633_10677 = state_10611__$1;
(statearr_10633_10677[(2)] = inst_10586);

(statearr_10633_10677[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10612 === (2))){
var state_10611__$1 = state_10611;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10611__$1,(4),ch);
} else {
if((state_val_10612 === (23))){
var state_10611__$1 = state_10611;
var statearr_10634_10678 = state_10611__$1;
(statearr_10634_10678[(2)] = null);

(statearr_10634_10678[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10612 === (19))){
var inst_10592 = (state_10611[(11)]);
var inst_10542 = (state_10611[(8)]);
var inst_10594 = cljs.core.async.muxch_STAR_.call(null,inst_10592);
var state_10611__$1 = state_10611;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10611__$1,(22),inst_10594,inst_10542);
} else {
if((state_val_10612 === (11))){
var inst_10566 = (state_10611[(10)]);
var inst_10552 = (state_10611[(12)]);
var inst_10566__$1 = cljs.core.seq.call(null,inst_10552);
var state_10611__$1 = (function (){var statearr_10635 = state_10611;
(statearr_10635[(10)] = inst_10566__$1);

return statearr_10635;
})();
if(inst_10566__$1){
var statearr_10636_10679 = state_10611__$1;
(statearr_10636_10679[(1)] = (13));

} else {
var statearr_10637_10680 = state_10611__$1;
(statearr_10637_10680[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10612 === (9))){
var inst_10588 = (state_10611[(2)]);
var state_10611__$1 = state_10611;
var statearr_10638_10681 = state_10611__$1;
(statearr_10638_10681[(2)] = inst_10588);

(statearr_10638_10681[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10612 === (5))){
var inst_10549 = cljs.core.deref.call(null,mults);
var inst_10550 = cljs.core.vals.call(null,inst_10549);
var inst_10551 = cljs.core.seq.call(null,inst_10550);
var inst_10552 = inst_10551;
var inst_10553 = null;
var inst_10554 = (0);
var inst_10555 = (0);
var state_10611__$1 = (function (){var statearr_10639 = state_10611;
(statearr_10639[(12)] = inst_10552);

(statearr_10639[(13)] = inst_10555);

(statearr_10639[(15)] = inst_10553);

(statearr_10639[(16)] = inst_10554);

return statearr_10639;
})();
var statearr_10640_10682 = state_10611__$1;
(statearr_10640_10682[(2)] = null);

(statearr_10640_10682[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10612 === (14))){
var state_10611__$1 = state_10611;
var statearr_10644_10683 = state_10611__$1;
(statearr_10644_10683[(2)] = null);

(statearr_10644_10683[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10612 === (16))){
var inst_10566 = (state_10611[(10)]);
var inst_10570 = cljs.core.chunk_first.call(null,inst_10566);
var inst_10571 = cljs.core.chunk_rest.call(null,inst_10566);
var inst_10572 = cljs.core.count.call(null,inst_10570);
var inst_10552 = inst_10571;
var inst_10553 = inst_10570;
var inst_10554 = inst_10572;
var inst_10555 = (0);
var state_10611__$1 = (function (){var statearr_10645 = state_10611;
(statearr_10645[(12)] = inst_10552);

(statearr_10645[(13)] = inst_10555);

(statearr_10645[(15)] = inst_10553);

(statearr_10645[(16)] = inst_10554);

return statearr_10645;
})();
var statearr_10646_10684 = state_10611__$1;
(statearr_10646_10684[(2)] = null);

(statearr_10646_10684[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10612 === (10))){
var inst_10552 = (state_10611[(12)]);
var inst_10555 = (state_10611[(13)]);
var inst_10553 = (state_10611[(15)]);
var inst_10554 = (state_10611[(16)]);
var inst_10560 = cljs.core._nth.call(null,inst_10553,inst_10555);
var inst_10561 = cljs.core.async.muxch_STAR_.call(null,inst_10560);
var inst_10562 = cljs.core.async.close_BANG_.call(null,inst_10561);
var inst_10563 = (inst_10555 + (1));
var tmp10641 = inst_10552;
var tmp10642 = inst_10553;
var tmp10643 = inst_10554;
var inst_10552__$1 = tmp10641;
var inst_10553__$1 = tmp10642;
var inst_10554__$1 = tmp10643;
var inst_10555__$1 = inst_10563;
var state_10611__$1 = (function (){var statearr_10647 = state_10611;
(statearr_10647[(17)] = inst_10562);

(statearr_10647[(12)] = inst_10552__$1);

(statearr_10647[(13)] = inst_10555__$1);

(statearr_10647[(15)] = inst_10553__$1);

(statearr_10647[(16)] = inst_10554__$1);

return statearr_10647;
})();
var statearr_10648_10685 = state_10611__$1;
(statearr_10648_10685[(2)] = null);

(statearr_10648_10685[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10612 === (18))){
var inst_10581 = (state_10611[(2)]);
var state_10611__$1 = state_10611;
var statearr_10649_10686 = state_10611__$1;
(statearr_10649_10686[(2)] = inst_10581);

(statearr_10649_10686[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10612 === (8))){
var inst_10555 = (state_10611[(13)]);
var inst_10554 = (state_10611[(16)]);
var inst_10557 = (inst_10555 < inst_10554);
var inst_10558 = inst_10557;
var state_10611__$1 = state_10611;
if(cljs.core.truth_(inst_10558)){
var statearr_10650_10687 = state_10611__$1;
(statearr_10650_10687[(1)] = (10));

} else {
var statearr_10651_10688 = state_10611__$1;
(statearr_10651_10688[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__6667__auto___10660,mults,ensure_mult,p))
;
return ((function (switch__6605__auto__,c__6667__auto___10660,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__6606__auto__ = null;
var cljs$core$async$state_machine__6606__auto____0 = (function (){
var statearr_10655 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10655[(0)] = cljs$core$async$state_machine__6606__auto__);

(statearr_10655[(1)] = (1));

return statearr_10655;
});
var cljs$core$async$state_machine__6606__auto____1 = (function (state_10611){
while(true){
var ret_value__6607__auto__ = (function (){try{while(true){
var result__6608__auto__ = switch__6605__auto__.call(null,state_10611);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6608__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6608__auto__;
}
break;
}
}catch (e10656){if((e10656 instanceof Object)){
var ex__6609__auto__ = e10656;
var statearr_10657_10689 = state_10611;
(statearr_10657_10689[(5)] = ex__6609__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10611);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10656;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10690 = state_10611;
state_10611 = G__10690;
continue;
} else {
return ret_value__6607__auto__;
}
break;
}
});
cljs$core$async$state_machine__6606__auto__ = function(state_10611){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6606__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6606__auto____1.call(this,state_10611);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6606__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6606__auto____0;
cljs$core$async$state_machine__6606__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6606__auto____1;
return cljs$core$async$state_machine__6606__auto__;
})()
;})(switch__6605__auto__,c__6667__auto___10660,mults,ensure_mult,p))
})();
var state__6669__auto__ = (function (){var statearr_10658 = f__6668__auto__.call(null);
(statearr_10658[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6667__auto___10660);

return statearr_10658;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6669__auto__);
});})(c__6667__auto___10660,mults,ensure_mult,p))
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
var G__10692 = arguments.length;
switch (G__10692) {
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
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(){
var G__10695 = arguments.length;
switch (G__10695) {
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
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
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
var G__10698 = arguments.length;
switch (G__10698) {
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
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__6667__auto___10768 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6667__auto___10768,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__6668__auto__ = (function (){var switch__6605__auto__ = ((function (c__6667__auto___10768,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_10737){
var state_val_10738 = (state_10737[(1)]);
if((state_val_10738 === (7))){
var state_10737__$1 = state_10737;
var statearr_10739_10769 = state_10737__$1;
(statearr_10739_10769[(2)] = null);

(statearr_10739_10769[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10738 === (1))){
var state_10737__$1 = state_10737;
var statearr_10740_10770 = state_10737__$1;
(statearr_10740_10770[(2)] = null);

(statearr_10740_10770[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10738 === (4))){
var inst_10701 = (state_10737[(7)]);
var inst_10703 = (inst_10701 < cnt);
var state_10737__$1 = state_10737;
if(cljs.core.truth_(inst_10703)){
var statearr_10741_10771 = state_10737__$1;
(statearr_10741_10771[(1)] = (6));

} else {
var statearr_10742_10772 = state_10737__$1;
(statearr_10742_10772[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10738 === (15))){
var inst_10733 = (state_10737[(2)]);
var state_10737__$1 = state_10737;
var statearr_10743_10773 = state_10737__$1;
(statearr_10743_10773[(2)] = inst_10733);

(statearr_10743_10773[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10738 === (13))){
var inst_10726 = cljs.core.async.close_BANG_.call(null,out);
var state_10737__$1 = state_10737;
var statearr_10744_10774 = state_10737__$1;
(statearr_10744_10774[(2)] = inst_10726);

(statearr_10744_10774[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10738 === (6))){
var state_10737__$1 = state_10737;
var statearr_10745_10775 = state_10737__$1;
(statearr_10745_10775[(2)] = null);

(statearr_10745_10775[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10738 === (3))){
var inst_10735 = (state_10737[(2)]);
var state_10737__$1 = state_10737;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10737__$1,inst_10735);
} else {
if((state_val_10738 === (12))){
var inst_10723 = (state_10737[(8)]);
var inst_10723__$1 = (state_10737[(2)]);
var inst_10724 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_10723__$1);
var state_10737__$1 = (function (){var statearr_10746 = state_10737;
(statearr_10746[(8)] = inst_10723__$1);

return statearr_10746;
})();
if(cljs.core.truth_(inst_10724)){
var statearr_10747_10776 = state_10737__$1;
(statearr_10747_10776[(1)] = (13));

} else {
var statearr_10748_10777 = state_10737__$1;
(statearr_10748_10777[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10738 === (2))){
var inst_10700 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_10701 = (0);
var state_10737__$1 = (function (){var statearr_10749 = state_10737;
(statearr_10749[(7)] = inst_10701);

(statearr_10749[(9)] = inst_10700);

return statearr_10749;
})();
var statearr_10750_10778 = state_10737__$1;
(statearr_10750_10778[(2)] = null);

(statearr_10750_10778[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10738 === (11))){
var inst_10701 = (state_10737[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_10737,(10),Object,null,(9));
var inst_10710 = chs__$1.call(null,inst_10701);
var inst_10711 = done.call(null,inst_10701);
var inst_10712 = cljs.core.async.take_BANG_.call(null,inst_10710,inst_10711);
var state_10737__$1 = state_10737;
var statearr_10751_10779 = state_10737__$1;
(statearr_10751_10779[(2)] = inst_10712);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10737__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10738 === (9))){
var inst_10701 = (state_10737[(7)]);
var inst_10714 = (state_10737[(2)]);
var inst_10715 = (inst_10701 + (1));
var inst_10701__$1 = inst_10715;
var state_10737__$1 = (function (){var statearr_10752 = state_10737;
(statearr_10752[(7)] = inst_10701__$1);

(statearr_10752[(10)] = inst_10714);

return statearr_10752;
})();
var statearr_10753_10780 = state_10737__$1;
(statearr_10753_10780[(2)] = null);

(statearr_10753_10780[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10738 === (5))){
var inst_10721 = (state_10737[(2)]);
var state_10737__$1 = (function (){var statearr_10754 = state_10737;
(statearr_10754[(11)] = inst_10721);

return statearr_10754;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10737__$1,(12),dchan);
} else {
if((state_val_10738 === (14))){
var inst_10723 = (state_10737[(8)]);
var inst_10728 = cljs.core.apply.call(null,f,inst_10723);
var state_10737__$1 = state_10737;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10737__$1,(16),out,inst_10728);
} else {
if((state_val_10738 === (16))){
var inst_10730 = (state_10737[(2)]);
var state_10737__$1 = (function (){var statearr_10755 = state_10737;
(statearr_10755[(12)] = inst_10730);

return statearr_10755;
})();
var statearr_10756_10781 = state_10737__$1;
(statearr_10756_10781[(2)] = null);

(statearr_10756_10781[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10738 === (10))){
var inst_10705 = (state_10737[(2)]);
var inst_10706 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_10737__$1 = (function (){var statearr_10757 = state_10737;
(statearr_10757[(13)] = inst_10705);

return statearr_10757;
})();
var statearr_10758_10782 = state_10737__$1;
(statearr_10758_10782[(2)] = inst_10706);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10737__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10738 === (8))){
var inst_10719 = (state_10737[(2)]);
var state_10737__$1 = state_10737;
var statearr_10759_10783 = state_10737__$1;
(statearr_10759_10783[(2)] = inst_10719);

(statearr_10759_10783[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__6667__auto___10768,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__6605__auto__,c__6667__auto___10768,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__6606__auto__ = null;
var cljs$core$async$state_machine__6606__auto____0 = (function (){
var statearr_10763 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10763[(0)] = cljs$core$async$state_machine__6606__auto__);

(statearr_10763[(1)] = (1));

return statearr_10763;
});
var cljs$core$async$state_machine__6606__auto____1 = (function (state_10737){
while(true){
var ret_value__6607__auto__ = (function (){try{while(true){
var result__6608__auto__ = switch__6605__auto__.call(null,state_10737);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6608__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6608__auto__;
}
break;
}
}catch (e10764){if((e10764 instanceof Object)){
var ex__6609__auto__ = e10764;
var statearr_10765_10784 = state_10737;
(statearr_10765_10784[(5)] = ex__6609__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10737);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10764;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10785 = state_10737;
state_10737 = G__10785;
continue;
} else {
return ret_value__6607__auto__;
}
break;
}
});
cljs$core$async$state_machine__6606__auto__ = function(state_10737){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6606__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6606__auto____1.call(this,state_10737);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6606__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6606__auto____0;
cljs$core$async$state_machine__6606__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6606__auto____1;
return cljs$core$async$state_machine__6606__auto__;
})()
;})(switch__6605__auto__,c__6667__auto___10768,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__6669__auto__ = (function (){var statearr_10766 = f__6668__auto__.call(null);
(statearr_10766[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6667__auto___10768);

return statearr_10766;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6669__auto__);
});})(c__6667__auto___10768,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__10788 = arguments.length;
switch (G__10788) {
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
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6667__auto___10843 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6667__auto___10843,out){
return (function (){
var f__6668__auto__ = (function (){var switch__6605__auto__ = ((function (c__6667__auto___10843,out){
return (function (state_10818){
var state_val_10819 = (state_10818[(1)]);
if((state_val_10819 === (7))){
var inst_10797 = (state_10818[(7)]);
var inst_10798 = (state_10818[(8)]);
var inst_10797__$1 = (state_10818[(2)]);
var inst_10798__$1 = cljs.core.nth.call(null,inst_10797__$1,(0),null);
var inst_10799 = cljs.core.nth.call(null,inst_10797__$1,(1),null);
var inst_10800 = (inst_10798__$1 == null);
var state_10818__$1 = (function (){var statearr_10820 = state_10818;
(statearr_10820[(7)] = inst_10797__$1);

(statearr_10820[(9)] = inst_10799);

(statearr_10820[(8)] = inst_10798__$1);

return statearr_10820;
})();
if(cljs.core.truth_(inst_10800)){
var statearr_10821_10844 = state_10818__$1;
(statearr_10821_10844[(1)] = (8));

} else {
var statearr_10822_10845 = state_10818__$1;
(statearr_10822_10845[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10819 === (1))){
var inst_10789 = cljs.core.vec.call(null,chs);
var inst_10790 = inst_10789;
var state_10818__$1 = (function (){var statearr_10823 = state_10818;
(statearr_10823[(10)] = inst_10790);

return statearr_10823;
})();
var statearr_10824_10846 = state_10818__$1;
(statearr_10824_10846[(2)] = null);

(statearr_10824_10846[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10819 === (4))){
var inst_10790 = (state_10818[(10)]);
var state_10818__$1 = state_10818;
return cljs.core.async.ioc_alts_BANG_.call(null,state_10818__$1,(7),inst_10790);
} else {
if((state_val_10819 === (6))){
var inst_10814 = (state_10818[(2)]);
var state_10818__$1 = state_10818;
var statearr_10825_10847 = state_10818__$1;
(statearr_10825_10847[(2)] = inst_10814);

(statearr_10825_10847[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10819 === (3))){
var inst_10816 = (state_10818[(2)]);
var state_10818__$1 = state_10818;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10818__$1,inst_10816);
} else {
if((state_val_10819 === (2))){
var inst_10790 = (state_10818[(10)]);
var inst_10792 = cljs.core.count.call(null,inst_10790);
var inst_10793 = (inst_10792 > (0));
var state_10818__$1 = state_10818;
if(cljs.core.truth_(inst_10793)){
var statearr_10827_10848 = state_10818__$1;
(statearr_10827_10848[(1)] = (4));

} else {
var statearr_10828_10849 = state_10818__$1;
(statearr_10828_10849[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10819 === (11))){
var inst_10790 = (state_10818[(10)]);
var inst_10807 = (state_10818[(2)]);
var tmp10826 = inst_10790;
var inst_10790__$1 = tmp10826;
var state_10818__$1 = (function (){var statearr_10829 = state_10818;
(statearr_10829[(11)] = inst_10807);

(statearr_10829[(10)] = inst_10790__$1);

return statearr_10829;
})();
var statearr_10830_10850 = state_10818__$1;
(statearr_10830_10850[(2)] = null);

(statearr_10830_10850[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10819 === (9))){
var inst_10798 = (state_10818[(8)]);
var state_10818__$1 = state_10818;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10818__$1,(11),out,inst_10798);
} else {
if((state_val_10819 === (5))){
var inst_10812 = cljs.core.async.close_BANG_.call(null,out);
var state_10818__$1 = state_10818;
var statearr_10831_10851 = state_10818__$1;
(statearr_10831_10851[(2)] = inst_10812);

(statearr_10831_10851[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10819 === (10))){
var inst_10810 = (state_10818[(2)]);
var state_10818__$1 = state_10818;
var statearr_10832_10852 = state_10818__$1;
(statearr_10832_10852[(2)] = inst_10810);

(statearr_10832_10852[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10819 === (8))){
var inst_10797 = (state_10818[(7)]);
var inst_10790 = (state_10818[(10)]);
var inst_10799 = (state_10818[(9)]);
var inst_10798 = (state_10818[(8)]);
var inst_10802 = (function (){var cs = inst_10790;
var vec__10795 = inst_10797;
var v = inst_10798;
var c = inst_10799;
return ((function (cs,vec__10795,v,c,inst_10797,inst_10790,inst_10799,inst_10798,state_val_10819,c__6667__auto___10843,out){
return (function (p1__10786_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__10786_SHARP_);
});
;})(cs,vec__10795,v,c,inst_10797,inst_10790,inst_10799,inst_10798,state_val_10819,c__6667__auto___10843,out))
})();
var inst_10803 = cljs.core.filterv.call(null,inst_10802,inst_10790);
var inst_10790__$1 = inst_10803;
var state_10818__$1 = (function (){var statearr_10833 = state_10818;
(statearr_10833[(10)] = inst_10790__$1);

return statearr_10833;
})();
var statearr_10834_10853 = state_10818__$1;
(statearr_10834_10853[(2)] = null);

(statearr_10834_10853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__6667__auto___10843,out))
;
return ((function (switch__6605__auto__,c__6667__auto___10843,out){
return (function() {
var cljs$core$async$state_machine__6606__auto__ = null;
var cljs$core$async$state_machine__6606__auto____0 = (function (){
var statearr_10838 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10838[(0)] = cljs$core$async$state_machine__6606__auto__);

(statearr_10838[(1)] = (1));

return statearr_10838;
});
var cljs$core$async$state_machine__6606__auto____1 = (function (state_10818){
while(true){
var ret_value__6607__auto__ = (function (){try{while(true){
var result__6608__auto__ = switch__6605__auto__.call(null,state_10818);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6608__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6608__auto__;
}
break;
}
}catch (e10839){if((e10839 instanceof Object)){
var ex__6609__auto__ = e10839;
var statearr_10840_10854 = state_10818;
(statearr_10840_10854[(5)] = ex__6609__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10818);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10839;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10855 = state_10818;
state_10818 = G__10855;
continue;
} else {
return ret_value__6607__auto__;
}
break;
}
});
cljs$core$async$state_machine__6606__auto__ = function(state_10818){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6606__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6606__auto____1.call(this,state_10818);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6606__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6606__auto____0;
cljs$core$async$state_machine__6606__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6606__auto____1;
return cljs$core$async$state_machine__6606__auto__;
})()
;})(switch__6605__auto__,c__6667__auto___10843,out))
})();
var state__6669__auto__ = (function (){var statearr_10841 = f__6668__auto__.call(null);
(statearr_10841[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6667__auto___10843);

return statearr_10841;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6669__auto__);
});})(c__6667__auto___10843,out))
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
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 * The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(){
var G__10857 = arguments.length;
switch (G__10857) {
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
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6667__auto___10905 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6667__auto___10905,out){
return (function (){
var f__6668__auto__ = (function (){var switch__6605__auto__ = ((function (c__6667__auto___10905,out){
return (function (state_10881){
var state_val_10882 = (state_10881[(1)]);
if((state_val_10882 === (7))){
var inst_10863 = (state_10881[(7)]);
var inst_10863__$1 = (state_10881[(2)]);
var inst_10864 = (inst_10863__$1 == null);
var inst_10865 = cljs.core.not.call(null,inst_10864);
var state_10881__$1 = (function (){var statearr_10883 = state_10881;
(statearr_10883[(7)] = inst_10863__$1);

return statearr_10883;
})();
if(inst_10865){
var statearr_10884_10906 = state_10881__$1;
(statearr_10884_10906[(1)] = (8));

} else {
var statearr_10885_10907 = state_10881__$1;
(statearr_10885_10907[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10882 === (1))){
var inst_10858 = (0);
var state_10881__$1 = (function (){var statearr_10886 = state_10881;
(statearr_10886[(8)] = inst_10858);

return statearr_10886;
})();
var statearr_10887_10908 = state_10881__$1;
(statearr_10887_10908[(2)] = null);

(statearr_10887_10908[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10882 === (4))){
var state_10881__$1 = state_10881;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10881__$1,(7),ch);
} else {
if((state_val_10882 === (6))){
var inst_10876 = (state_10881[(2)]);
var state_10881__$1 = state_10881;
var statearr_10888_10909 = state_10881__$1;
(statearr_10888_10909[(2)] = inst_10876);

(statearr_10888_10909[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10882 === (3))){
var inst_10878 = (state_10881[(2)]);
var inst_10879 = cljs.core.async.close_BANG_.call(null,out);
var state_10881__$1 = (function (){var statearr_10889 = state_10881;
(statearr_10889[(9)] = inst_10878);

return statearr_10889;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10881__$1,inst_10879);
} else {
if((state_val_10882 === (2))){
var inst_10858 = (state_10881[(8)]);
var inst_10860 = (inst_10858 < n);
var state_10881__$1 = state_10881;
if(cljs.core.truth_(inst_10860)){
var statearr_10890_10910 = state_10881__$1;
(statearr_10890_10910[(1)] = (4));

} else {
var statearr_10891_10911 = state_10881__$1;
(statearr_10891_10911[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10882 === (11))){
var inst_10858 = (state_10881[(8)]);
var inst_10868 = (state_10881[(2)]);
var inst_10869 = (inst_10858 + (1));
var inst_10858__$1 = inst_10869;
var state_10881__$1 = (function (){var statearr_10892 = state_10881;
(statearr_10892[(8)] = inst_10858__$1);

(statearr_10892[(10)] = inst_10868);

return statearr_10892;
})();
var statearr_10893_10912 = state_10881__$1;
(statearr_10893_10912[(2)] = null);

(statearr_10893_10912[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10882 === (9))){
var state_10881__$1 = state_10881;
var statearr_10894_10913 = state_10881__$1;
(statearr_10894_10913[(2)] = null);

(statearr_10894_10913[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10882 === (5))){
var state_10881__$1 = state_10881;
var statearr_10895_10914 = state_10881__$1;
(statearr_10895_10914[(2)] = null);

(statearr_10895_10914[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10882 === (10))){
var inst_10873 = (state_10881[(2)]);
var state_10881__$1 = state_10881;
var statearr_10896_10915 = state_10881__$1;
(statearr_10896_10915[(2)] = inst_10873);

(statearr_10896_10915[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10882 === (8))){
var inst_10863 = (state_10881[(7)]);
var state_10881__$1 = state_10881;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10881__$1,(11),out,inst_10863);
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
});})(c__6667__auto___10905,out))
;
return ((function (switch__6605__auto__,c__6667__auto___10905,out){
return (function() {
var cljs$core$async$state_machine__6606__auto__ = null;
var cljs$core$async$state_machine__6606__auto____0 = (function (){
var statearr_10900 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_10900[(0)] = cljs$core$async$state_machine__6606__auto__);

(statearr_10900[(1)] = (1));

return statearr_10900;
});
var cljs$core$async$state_machine__6606__auto____1 = (function (state_10881){
while(true){
var ret_value__6607__auto__ = (function (){try{while(true){
var result__6608__auto__ = switch__6605__auto__.call(null,state_10881);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6608__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6608__auto__;
}
break;
}
}catch (e10901){if((e10901 instanceof Object)){
var ex__6609__auto__ = e10901;
var statearr_10902_10916 = state_10881;
(statearr_10902_10916[(5)] = ex__6609__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10881);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10901;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10917 = state_10881;
state_10881 = G__10917;
continue;
} else {
return ret_value__6607__auto__;
}
break;
}
});
cljs$core$async$state_machine__6606__auto__ = function(state_10881){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6606__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6606__auto____1.call(this,state_10881);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6606__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6606__auto____0;
cljs$core$async$state_machine__6606__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6606__auto____1;
return cljs$core$async$state_machine__6606__auto__;
})()
;})(switch__6605__auto__,c__6667__auto___10905,out))
})();
var state__6669__auto__ = (function (){var statearr_10903 = f__6668__auto__.call(null);
(statearr_10903[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6667__auto___10905);

return statearr_10903;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6669__auto__);
});})(c__6667__auto___10905,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t10925 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t10925 = (function (map_LT_,f,ch,meta10926){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta10926 = meta10926;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t10925.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10927,meta10926__$1){
var self__ = this;
var _10927__$1 = this;
return (new cljs.core.async.t10925(self__.map_LT_,self__.f,self__.ch,meta10926__$1));
});

cljs.core.async.t10925.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10927){
var self__ = this;
var _10927__$1 = this;
return self__.meta10926;
});

cljs.core.async.t10925.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t10925.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t10925.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t10925.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t10925.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t10928 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t10928 = (function (map_LT_,f,ch,meta10926,_,fn1,meta10929){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta10926 = meta10926;
this._ = _;
this.fn1 = fn1;
this.meta10929 = meta10929;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t10928.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_10930,meta10929__$1){
var self__ = this;
var _10930__$1 = this;
return (new cljs.core.async.t10928(self__.map_LT_,self__.f,self__.ch,self__.meta10926,self__._,self__.fn1,meta10929__$1));
});})(___$1))
;

cljs.core.async.t10928.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_10930){
var self__ = this;
var _10930__$1 = this;
return self__.meta10929;
});})(___$1))
;

cljs.core.async.t10928.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t10928.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t10928.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__10918_SHARP_){
return f1.call(null,(((p1__10918_SHARP_ == null))?null:self__.f.call(null,p1__10918_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t10928.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta10926","meta10926",-1528425967,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta10929","meta10929",726606463,null)], null);
});})(___$1))
;

cljs.core.async.t10928.cljs$lang$type = true;

cljs.core.async.t10928.cljs$lang$ctorStr = "cljs.core.async/t10928";

cljs.core.async.t10928.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4886__auto__,writer__4887__auto__,opt__4888__auto__){
return cljs.core._write.call(null,writer__4887__auto__,"cljs.core.async/t10928");
});})(___$1))
;

cljs.core.async.__GT_t10928 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t10928(map_LT___$1,f__$1,ch__$1,meta10926__$1,___$2,fn1__$1,meta10929){
return (new cljs.core.async.t10928(map_LT___$1,f__$1,ch__$1,meta10926__$1,___$2,fn1__$1,meta10929));
});})(___$1))
;

}

return (new cljs.core.async.t10928(self__.map_LT_,self__.f,self__.ch,self__.meta10926,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4295__auto__ = ret;
if(cljs.core.truth_(and__4295__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__4295__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t10925.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t10925.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t10925.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta10926","meta10926",-1528425967,null)], null);
});

cljs.core.async.t10925.cljs$lang$type = true;

cljs.core.async.t10925.cljs$lang$ctorStr = "cljs.core.async/t10925";

cljs.core.async.t10925.cljs$lang$ctorPrWriter = (function (this__4886__auto__,writer__4887__auto__,opt__4888__auto__){
return cljs.core._write.call(null,writer__4887__auto__,"cljs.core.async/t10925");
});

cljs.core.async.__GT_t10925 = (function cljs$core$async$map_LT__$___GT_t10925(map_LT___$1,f__$1,ch__$1,meta10926){
return (new cljs.core.async.t10925(map_LT___$1,f__$1,ch__$1,meta10926));
});

}

return (new cljs.core.async.t10925(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t10934 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t10934 = (function (map_GT_,f,ch,meta10935){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta10935 = meta10935;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t10934.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10936,meta10935__$1){
var self__ = this;
var _10936__$1 = this;
return (new cljs.core.async.t10934(self__.map_GT_,self__.f,self__.ch,meta10935__$1));
});

cljs.core.async.t10934.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10936){
var self__ = this;
var _10936__$1 = this;
return self__.meta10935;
});

cljs.core.async.t10934.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t10934.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t10934.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t10934.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t10934.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t10934.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t10934.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta10935","meta10935",-1273148675,null)], null);
});

cljs.core.async.t10934.cljs$lang$type = true;

cljs.core.async.t10934.cljs$lang$ctorStr = "cljs.core.async/t10934";

cljs.core.async.t10934.cljs$lang$ctorPrWriter = (function (this__4886__auto__,writer__4887__auto__,opt__4888__auto__){
return cljs.core._write.call(null,writer__4887__auto__,"cljs.core.async/t10934");
});

cljs.core.async.__GT_t10934 = (function cljs$core$async$map_GT__$___GT_t10934(map_GT___$1,f__$1,ch__$1,meta10935){
return (new cljs.core.async.t10934(map_GT___$1,f__$1,ch__$1,meta10935));
});

}

return (new cljs.core.async.t10934(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t10940 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t10940 = (function (filter_GT_,p,ch,meta10941){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta10941 = meta10941;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t10940.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10942,meta10941__$1){
var self__ = this;
var _10942__$1 = this;
return (new cljs.core.async.t10940(self__.filter_GT_,self__.p,self__.ch,meta10941__$1));
});

cljs.core.async.t10940.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10942){
var self__ = this;
var _10942__$1 = this;
return self__.meta10941;
});

cljs.core.async.t10940.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t10940.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t10940.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t10940.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t10940.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t10940.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t10940.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t10940.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta10941","meta10941",-1947218120,null)], null);
});

cljs.core.async.t10940.cljs$lang$type = true;

cljs.core.async.t10940.cljs$lang$ctorStr = "cljs.core.async/t10940";

cljs.core.async.t10940.cljs$lang$ctorPrWriter = (function (this__4886__auto__,writer__4887__auto__,opt__4888__auto__){
return cljs.core._write.call(null,writer__4887__auto__,"cljs.core.async/t10940");
});

cljs.core.async.__GT_t10940 = (function cljs$core$async$filter_GT__$___GT_t10940(filter_GT___$1,p__$1,ch__$1,meta10941){
return (new cljs.core.async.t10940(filter_GT___$1,p__$1,ch__$1,meta10941));
});

}

return (new cljs.core.async.t10940(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(){
var G__10944 = arguments.length;
switch (G__10944) {
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
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6667__auto___10987 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6667__auto___10987,out){
return (function (){
var f__6668__auto__ = (function (){var switch__6605__auto__ = ((function (c__6667__auto___10987,out){
return (function (state_10965){
var state_val_10966 = (state_10965[(1)]);
if((state_val_10966 === (7))){
var inst_10961 = (state_10965[(2)]);
var state_10965__$1 = state_10965;
var statearr_10967_10988 = state_10965__$1;
(statearr_10967_10988[(2)] = inst_10961);

(statearr_10967_10988[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10966 === (1))){
var state_10965__$1 = state_10965;
var statearr_10968_10989 = state_10965__$1;
(statearr_10968_10989[(2)] = null);

(statearr_10968_10989[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10966 === (4))){
var inst_10947 = (state_10965[(7)]);
var inst_10947__$1 = (state_10965[(2)]);
var inst_10948 = (inst_10947__$1 == null);
var state_10965__$1 = (function (){var statearr_10969 = state_10965;
(statearr_10969[(7)] = inst_10947__$1);

return statearr_10969;
})();
if(cljs.core.truth_(inst_10948)){
var statearr_10970_10990 = state_10965__$1;
(statearr_10970_10990[(1)] = (5));

} else {
var statearr_10971_10991 = state_10965__$1;
(statearr_10971_10991[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10966 === (6))){
var inst_10947 = (state_10965[(7)]);
var inst_10952 = p.call(null,inst_10947);
var state_10965__$1 = state_10965;
if(cljs.core.truth_(inst_10952)){
var statearr_10972_10992 = state_10965__$1;
(statearr_10972_10992[(1)] = (8));

} else {
var statearr_10973_10993 = state_10965__$1;
(statearr_10973_10993[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10966 === (3))){
var inst_10963 = (state_10965[(2)]);
var state_10965__$1 = state_10965;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10965__$1,inst_10963);
} else {
if((state_val_10966 === (2))){
var state_10965__$1 = state_10965;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10965__$1,(4),ch);
} else {
if((state_val_10966 === (11))){
var inst_10955 = (state_10965[(2)]);
var state_10965__$1 = state_10965;
var statearr_10974_10994 = state_10965__$1;
(statearr_10974_10994[(2)] = inst_10955);

(statearr_10974_10994[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10966 === (9))){
var state_10965__$1 = state_10965;
var statearr_10975_10995 = state_10965__$1;
(statearr_10975_10995[(2)] = null);

(statearr_10975_10995[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10966 === (5))){
var inst_10950 = cljs.core.async.close_BANG_.call(null,out);
var state_10965__$1 = state_10965;
var statearr_10976_10996 = state_10965__$1;
(statearr_10976_10996[(2)] = inst_10950);

(statearr_10976_10996[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10966 === (10))){
var inst_10958 = (state_10965[(2)]);
var state_10965__$1 = (function (){var statearr_10977 = state_10965;
(statearr_10977[(8)] = inst_10958);

return statearr_10977;
})();
var statearr_10978_10997 = state_10965__$1;
(statearr_10978_10997[(2)] = null);

(statearr_10978_10997[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10966 === (8))){
var inst_10947 = (state_10965[(7)]);
var state_10965__$1 = state_10965;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10965__$1,(11),out,inst_10947);
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
});})(c__6667__auto___10987,out))
;
return ((function (switch__6605__auto__,c__6667__auto___10987,out){
return (function() {
var cljs$core$async$state_machine__6606__auto__ = null;
var cljs$core$async$state_machine__6606__auto____0 = (function (){
var statearr_10982 = [null,null,null,null,null,null,null,null,null];
(statearr_10982[(0)] = cljs$core$async$state_machine__6606__auto__);

(statearr_10982[(1)] = (1));

return statearr_10982;
});
var cljs$core$async$state_machine__6606__auto____1 = (function (state_10965){
while(true){
var ret_value__6607__auto__ = (function (){try{while(true){
var result__6608__auto__ = switch__6605__auto__.call(null,state_10965);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6608__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6608__auto__;
}
break;
}
}catch (e10983){if((e10983 instanceof Object)){
var ex__6609__auto__ = e10983;
var statearr_10984_10998 = state_10965;
(statearr_10984_10998[(5)] = ex__6609__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10965);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10983;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10999 = state_10965;
state_10965 = G__10999;
continue;
} else {
return ret_value__6607__auto__;
}
break;
}
});
cljs$core$async$state_machine__6606__auto__ = function(state_10965){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6606__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6606__auto____1.call(this,state_10965);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6606__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6606__auto____0;
cljs$core$async$state_machine__6606__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6606__auto____1;
return cljs$core$async$state_machine__6606__auto__;
})()
;})(switch__6605__auto__,c__6667__auto___10987,out))
})();
var state__6669__auto__ = (function (){var statearr_10985 = f__6668__auto__.call(null);
(statearr_10985[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6667__auto___10987);

return statearr_10985;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6669__auto__);
});})(c__6667__auto___10987,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var G__11001 = arguments.length;
switch (G__11001) {
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
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__6667__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6667__auto__){
return (function (){
var f__6668__auto__ = (function (){var switch__6605__auto__ = ((function (c__6667__auto__){
return (function (state_11168){
var state_val_11169 = (state_11168[(1)]);
if((state_val_11169 === (7))){
var inst_11164 = (state_11168[(2)]);
var state_11168__$1 = state_11168;
var statearr_11170_11211 = state_11168__$1;
(statearr_11170_11211[(2)] = inst_11164);

(statearr_11170_11211[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11169 === (20))){
var inst_11134 = (state_11168[(7)]);
var inst_11145 = (state_11168[(2)]);
var inst_11146 = cljs.core.next.call(null,inst_11134);
var inst_11120 = inst_11146;
var inst_11121 = null;
var inst_11122 = (0);
var inst_11123 = (0);
var state_11168__$1 = (function (){var statearr_11171 = state_11168;
(statearr_11171[(8)] = inst_11122);

(statearr_11171[(9)] = inst_11120);

(statearr_11171[(10)] = inst_11121);

(statearr_11171[(11)] = inst_11123);

(statearr_11171[(12)] = inst_11145);

return statearr_11171;
})();
var statearr_11172_11212 = state_11168__$1;
(statearr_11172_11212[(2)] = null);

(statearr_11172_11212[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11169 === (1))){
var state_11168__$1 = state_11168;
var statearr_11173_11213 = state_11168__$1;
(statearr_11173_11213[(2)] = null);

(statearr_11173_11213[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11169 === (4))){
var inst_11109 = (state_11168[(13)]);
var inst_11109__$1 = (state_11168[(2)]);
var inst_11110 = (inst_11109__$1 == null);
var state_11168__$1 = (function (){var statearr_11174 = state_11168;
(statearr_11174[(13)] = inst_11109__$1);

return statearr_11174;
})();
if(cljs.core.truth_(inst_11110)){
var statearr_11175_11214 = state_11168__$1;
(statearr_11175_11214[(1)] = (5));

} else {
var statearr_11176_11215 = state_11168__$1;
(statearr_11176_11215[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11169 === (15))){
var state_11168__$1 = state_11168;
var statearr_11180_11216 = state_11168__$1;
(statearr_11180_11216[(2)] = null);

(statearr_11180_11216[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11169 === (21))){
var state_11168__$1 = state_11168;
var statearr_11181_11217 = state_11168__$1;
(statearr_11181_11217[(2)] = null);

(statearr_11181_11217[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11169 === (13))){
var inst_11122 = (state_11168[(8)]);
var inst_11120 = (state_11168[(9)]);
var inst_11121 = (state_11168[(10)]);
var inst_11123 = (state_11168[(11)]);
var inst_11130 = (state_11168[(2)]);
var inst_11131 = (inst_11123 + (1));
var tmp11177 = inst_11122;
var tmp11178 = inst_11120;
var tmp11179 = inst_11121;
var inst_11120__$1 = tmp11178;
var inst_11121__$1 = tmp11179;
var inst_11122__$1 = tmp11177;
var inst_11123__$1 = inst_11131;
var state_11168__$1 = (function (){var statearr_11182 = state_11168;
(statearr_11182[(14)] = inst_11130);

(statearr_11182[(8)] = inst_11122__$1);

(statearr_11182[(9)] = inst_11120__$1);

(statearr_11182[(10)] = inst_11121__$1);

(statearr_11182[(11)] = inst_11123__$1);

return statearr_11182;
})();
var statearr_11183_11218 = state_11168__$1;
(statearr_11183_11218[(2)] = null);

(statearr_11183_11218[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11169 === (22))){
var state_11168__$1 = state_11168;
var statearr_11184_11219 = state_11168__$1;
(statearr_11184_11219[(2)] = null);

(statearr_11184_11219[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11169 === (6))){
var inst_11109 = (state_11168[(13)]);
var inst_11118 = f.call(null,inst_11109);
var inst_11119 = cljs.core.seq.call(null,inst_11118);
var inst_11120 = inst_11119;
var inst_11121 = null;
var inst_11122 = (0);
var inst_11123 = (0);
var state_11168__$1 = (function (){var statearr_11185 = state_11168;
(statearr_11185[(8)] = inst_11122);

(statearr_11185[(9)] = inst_11120);

(statearr_11185[(10)] = inst_11121);

(statearr_11185[(11)] = inst_11123);

return statearr_11185;
})();
var statearr_11186_11220 = state_11168__$1;
(statearr_11186_11220[(2)] = null);

(statearr_11186_11220[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11169 === (17))){
var inst_11134 = (state_11168[(7)]);
var inst_11138 = cljs.core.chunk_first.call(null,inst_11134);
var inst_11139 = cljs.core.chunk_rest.call(null,inst_11134);
var inst_11140 = cljs.core.count.call(null,inst_11138);
var inst_11120 = inst_11139;
var inst_11121 = inst_11138;
var inst_11122 = inst_11140;
var inst_11123 = (0);
var state_11168__$1 = (function (){var statearr_11187 = state_11168;
(statearr_11187[(8)] = inst_11122);

(statearr_11187[(9)] = inst_11120);

(statearr_11187[(10)] = inst_11121);

(statearr_11187[(11)] = inst_11123);

return statearr_11187;
})();
var statearr_11188_11221 = state_11168__$1;
(statearr_11188_11221[(2)] = null);

(statearr_11188_11221[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11169 === (3))){
var inst_11166 = (state_11168[(2)]);
var state_11168__$1 = state_11168;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11168__$1,inst_11166);
} else {
if((state_val_11169 === (12))){
var inst_11154 = (state_11168[(2)]);
var state_11168__$1 = state_11168;
var statearr_11189_11222 = state_11168__$1;
(statearr_11189_11222[(2)] = inst_11154);

(statearr_11189_11222[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11169 === (2))){
var state_11168__$1 = state_11168;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11168__$1,(4),in$);
} else {
if((state_val_11169 === (23))){
var inst_11162 = (state_11168[(2)]);
var state_11168__$1 = state_11168;
var statearr_11190_11223 = state_11168__$1;
(statearr_11190_11223[(2)] = inst_11162);

(statearr_11190_11223[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11169 === (19))){
var inst_11149 = (state_11168[(2)]);
var state_11168__$1 = state_11168;
var statearr_11191_11224 = state_11168__$1;
(statearr_11191_11224[(2)] = inst_11149);

(statearr_11191_11224[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11169 === (11))){
var inst_11134 = (state_11168[(7)]);
var inst_11120 = (state_11168[(9)]);
var inst_11134__$1 = cljs.core.seq.call(null,inst_11120);
var state_11168__$1 = (function (){var statearr_11192 = state_11168;
(statearr_11192[(7)] = inst_11134__$1);

return statearr_11192;
})();
if(inst_11134__$1){
var statearr_11193_11225 = state_11168__$1;
(statearr_11193_11225[(1)] = (14));

} else {
var statearr_11194_11226 = state_11168__$1;
(statearr_11194_11226[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11169 === (9))){
var inst_11156 = (state_11168[(2)]);
var inst_11157 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_11168__$1 = (function (){var statearr_11195 = state_11168;
(statearr_11195[(15)] = inst_11156);

return statearr_11195;
})();
if(cljs.core.truth_(inst_11157)){
var statearr_11196_11227 = state_11168__$1;
(statearr_11196_11227[(1)] = (21));

} else {
var statearr_11197_11228 = state_11168__$1;
(statearr_11197_11228[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11169 === (5))){
var inst_11112 = cljs.core.async.close_BANG_.call(null,out);
var state_11168__$1 = state_11168;
var statearr_11198_11229 = state_11168__$1;
(statearr_11198_11229[(2)] = inst_11112);

(statearr_11198_11229[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11169 === (14))){
var inst_11134 = (state_11168[(7)]);
var inst_11136 = cljs.core.chunked_seq_QMARK_.call(null,inst_11134);
var state_11168__$1 = state_11168;
if(inst_11136){
var statearr_11199_11230 = state_11168__$1;
(statearr_11199_11230[(1)] = (17));

} else {
var statearr_11200_11231 = state_11168__$1;
(statearr_11200_11231[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11169 === (16))){
var inst_11152 = (state_11168[(2)]);
var state_11168__$1 = state_11168;
var statearr_11201_11232 = state_11168__$1;
(statearr_11201_11232[(2)] = inst_11152);

(statearr_11201_11232[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11169 === (10))){
var inst_11121 = (state_11168[(10)]);
var inst_11123 = (state_11168[(11)]);
var inst_11128 = cljs.core._nth.call(null,inst_11121,inst_11123);
var state_11168__$1 = state_11168;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11168__$1,(13),out,inst_11128);
} else {
if((state_val_11169 === (18))){
var inst_11134 = (state_11168[(7)]);
var inst_11143 = cljs.core.first.call(null,inst_11134);
var state_11168__$1 = state_11168;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11168__$1,(20),out,inst_11143);
} else {
if((state_val_11169 === (8))){
var inst_11122 = (state_11168[(8)]);
var inst_11123 = (state_11168[(11)]);
var inst_11125 = (inst_11123 < inst_11122);
var inst_11126 = inst_11125;
var state_11168__$1 = state_11168;
if(cljs.core.truth_(inst_11126)){
var statearr_11202_11233 = state_11168__$1;
(statearr_11202_11233[(1)] = (10));

} else {
var statearr_11203_11234 = state_11168__$1;
(statearr_11203_11234[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__6667__auto__))
;
return ((function (switch__6605__auto__,c__6667__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__6606__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__6606__auto____0 = (function (){
var statearr_11207 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11207[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__6606__auto__);

(statearr_11207[(1)] = (1));

return statearr_11207;
});
var cljs$core$async$mapcat_STAR__$_state_machine__6606__auto____1 = (function (state_11168){
while(true){
var ret_value__6607__auto__ = (function (){try{while(true){
var result__6608__auto__ = switch__6605__auto__.call(null,state_11168);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6608__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6608__auto__;
}
break;
}
}catch (e11208){if((e11208 instanceof Object)){
var ex__6609__auto__ = e11208;
var statearr_11209_11235 = state_11168;
(statearr_11209_11235[(5)] = ex__6609__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11168);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11208;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11236 = state_11168;
state_11168 = G__11236;
continue;
} else {
return ret_value__6607__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__6606__auto__ = function(state_11168){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__6606__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__6606__auto____1.call(this,state_11168);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__6606__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__6606__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__6606__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__6606__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__6606__auto__;
})()
;})(switch__6605__auto__,c__6667__auto__))
})();
var state__6669__auto__ = (function (){var statearr_11210 = f__6668__auto__.call(null);
(statearr_11210[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6667__auto__);

return statearr_11210;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6669__auto__);
});})(c__6667__auto__))
);

return c__6667__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var G__11238 = arguments.length;
switch (G__11238) {
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
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(){
var G__11241 = arguments.length;
switch (G__11241) {
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
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(){
var G__11244 = arguments.length;
switch (G__11244) {
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
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6667__auto___11294 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6667__auto___11294,out){
return (function (){
var f__6668__auto__ = (function (){var switch__6605__auto__ = ((function (c__6667__auto___11294,out){
return (function (state_11268){
var state_val_11269 = (state_11268[(1)]);
if((state_val_11269 === (7))){
var inst_11263 = (state_11268[(2)]);
var state_11268__$1 = state_11268;
var statearr_11270_11295 = state_11268__$1;
(statearr_11270_11295[(2)] = inst_11263);

(statearr_11270_11295[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11269 === (1))){
var inst_11245 = null;
var state_11268__$1 = (function (){var statearr_11271 = state_11268;
(statearr_11271[(7)] = inst_11245);

return statearr_11271;
})();
var statearr_11272_11296 = state_11268__$1;
(statearr_11272_11296[(2)] = null);

(statearr_11272_11296[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11269 === (4))){
var inst_11248 = (state_11268[(8)]);
var inst_11248__$1 = (state_11268[(2)]);
var inst_11249 = (inst_11248__$1 == null);
var inst_11250 = cljs.core.not.call(null,inst_11249);
var state_11268__$1 = (function (){var statearr_11273 = state_11268;
(statearr_11273[(8)] = inst_11248__$1);

return statearr_11273;
})();
if(inst_11250){
var statearr_11274_11297 = state_11268__$1;
(statearr_11274_11297[(1)] = (5));

} else {
var statearr_11275_11298 = state_11268__$1;
(statearr_11275_11298[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11269 === (6))){
var state_11268__$1 = state_11268;
var statearr_11276_11299 = state_11268__$1;
(statearr_11276_11299[(2)] = null);

(statearr_11276_11299[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11269 === (3))){
var inst_11265 = (state_11268[(2)]);
var inst_11266 = cljs.core.async.close_BANG_.call(null,out);
var state_11268__$1 = (function (){var statearr_11277 = state_11268;
(statearr_11277[(9)] = inst_11265);

return statearr_11277;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11268__$1,inst_11266);
} else {
if((state_val_11269 === (2))){
var state_11268__$1 = state_11268;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11268__$1,(4),ch);
} else {
if((state_val_11269 === (11))){
var inst_11248 = (state_11268[(8)]);
var inst_11257 = (state_11268[(2)]);
var inst_11245 = inst_11248;
var state_11268__$1 = (function (){var statearr_11278 = state_11268;
(statearr_11278[(7)] = inst_11245);

(statearr_11278[(10)] = inst_11257);

return statearr_11278;
})();
var statearr_11279_11300 = state_11268__$1;
(statearr_11279_11300[(2)] = null);

(statearr_11279_11300[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11269 === (9))){
var inst_11248 = (state_11268[(8)]);
var state_11268__$1 = state_11268;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11268__$1,(11),out,inst_11248);
} else {
if((state_val_11269 === (5))){
var inst_11245 = (state_11268[(7)]);
var inst_11248 = (state_11268[(8)]);
var inst_11252 = cljs.core._EQ_.call(null,inst_11248,inst_11245);
var state_11268__$1 = state_11268;
if(inst_11252){
var statearr_11281_11301 = state_11268__$1;
(statearr_11281_11301[(1)] = (8));

} else {
var statearr_11282_11302 = state_11268__$1;
(statearr_11282_11302[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11269 === (10))){
var inst_11260 = (state_11268[(2)]);
var state_11268__$1 = state_11268;
var statearr_11283_11303 = state_11268__$1;
(statearr_11283_11303[(2)] = inst_11260);

(statearr_11283_11303[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11269 === (8))){
var inst_11245 = (state_11268[(7)]);
var tmp11280 = inst_11245;
var inst_11245__$1 = tmp11280;
var state_11268__$1 = (function (){var statearr_11284 = state_11268;
(statearr_11284[(7)] = inst_11245__$1);

return statearr_11284;
})();
var statearr_11285_11304 = state_11268__$1;
(statearr_11285_11304[(2)] = null);

(statearr_11285_11304[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__6667__auto___11294,out))
;
return ((function (switch__6605__auto__,c__6667__auto___11294,out){
return (function() {
var cljs$core$async$state_machine__6606__auto__ = null;
var cljs$core$async$state_machine__6606__auto____0 = (function (){
var statearr_11289 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11289[(0)] = cljs$core$async$state_machine__6606__auto__);

(statearr_11289[(1)] = (1));

return statearr_11289;
});
var cljs$core$async$state_machine__6606__auto____1 = (function (state_11268){
while(true){
var ret_value__6607__auto__ = (function (){try{while(true){
var result__6608__auto__ = switch__6605__auto__.call(null,state_11268);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6608__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6608__auto__;
}
break;
}
}catch (e11290){if((e11290 instanceof Object)){
var ex__6609__auto__ = e11290;
var statearr_11291_11305 = state_11268;
(statearr_11291_11305[(5)] = ex__6609__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11268);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11290;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11306 = state_11268;
state_11268 = G__11306;
continue;
} else {
return ret_value__6607__auto__;
}
break;
}
});
cljs$core$async$state_machine__6606__auto__ = function(state_11268){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6606__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6606__auto____1.call(this,state_11268);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6606__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6606__auto____0;
cljs$core$async$state_machine__6606__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6606__auto____1;
return cljs$core$async$state_machine__6606__auto__;
})()
;})(switch__6605__auto__,c__6667__auto___11294,out))
})();
var state__6669__auto__ = (function (){var statearr_11292 = f__6668__auto__.call(null);
(statearr_11292[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6667__auto___11294);

return statearr_11292;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6669__auto__);
});})(c__6667__auto___11294,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var G__11308 = arguments.length;
switch (G__11308) {
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
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6667__auto___11377 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6667__auto___11377,out){
return (function (){
var f__6668__auto__ = (function (){var switch__6605__auto__ = ((function (c__6667__auto___11377,out){
return (function (state_11346){
var state_val_11347 = (state_11346[(1)]);
if((state_val_11347 === (7))){
var inst_11342 = (state_11346[(2)]);
var state_11346__$1 = state_11346;
var statearr_11348_11378 = state_11346__$1;
(statearr_11348_11378[(2)] = inst_11342);

(statearr_11348_11378[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11347 === (1))){
var inst_11309 = (new Array(n));
var inst_11310 = inst_11309;
var inst_11311 = (0);
var state_11346__$1 = (function (){var statearr_11349 = state_11346;
(statearr_11349[(7)] = inst_11310);

(statearr_11349[(8)] = inst_11311);

return statearr_11349;
})();
var statearr_11350_11379 = state_11346__$1;
(statearr_11350_11379[(2)] = null);

(statearr_11350_11379[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11347 === (4))){
var inst_11314 = (state_11346[(9)]);
var inst_11314__$1 = (state_11346[(2)]);
var inst_11315 = (inst_11314__$1 == null);
var inst_11316 = cljs.core.not.call(null,inst_11315);
var state_11346__$1 = (function (){var statearr_11351 = state_11346;
(statearr_11351[(9)] = inst_11314__$1);

return statearr_11351;
})();
if(inst_11316){
var statearr_11352_11380 = state_11346__$1;
(statearr_11352_11380[(1)] = (5));

} else {
var statearr_11353_11381 = state_11346__$1;
(statearr_11353_11381[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11347 === (15))){
var inst_11336 = (state_11346[(2)]);
var state_11346__$1 = state_11346;
var statearr_11354_11382 = state_11346__$1;
(statearr_11354_11382[(2)] = inst_11336);

(statearr_11354_11382[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11347 === (13))){
var state_11346__$1 = state_11346;
var statearr_11355_11383 = state_11346__$1;
(statearr_11355_11383[(2)] = null);

(statearr_11355_11383[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11347 === (6))){
var inst_11311 = (state_11346[(8)]);
var inst_11332 = (inst_11311 > (0));
var state_11346__$1 = state_11346;
if(cljs.core.truth_(inst_11332)){
var statearr_11356_11384 = state_11346__$1;
(statearr_11356_11384[(1)] = (12));

} else {
var statearr_11357_11385 = state_11346__$1;
(statearr_11357_11385[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11347 === (3))){
var inst_11344 = (state_11346[(2)]);
var state_11346__$1 = state_11346;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11346__$1,inst_11344);
} else {
if((state_val_11347 === (12))){
var inst_11310 = (state_11346[(7)]);
var inst_11334 = cljs.core.vec.call(null,inst_11310);
var state_11346__$1 = state_11346;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11346__$1,(15),out,inst_11334);
} else {
if((state_val_11347 === (2))){
var state_11346__$1 = state_11346;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11346__$1,(4),ch);
} else {
if((state_val_11347 === (11))){
var inst_11326 = (state_11346[(2)]);
var inst_11327 = (new Array(n));
var inst_11310 = inst_11327;
var inst_11311 = (0);
var state_11346__$1 = (function (){var statearr_11358 = state_11346;
(statearr_11358[(10)] = inst_11326);

(statearr_11358[(7)] = inst_11310);

(statearr_11358[(8)] = inst_11311);

return statearr_11358;
})();
var statearr_11359_11386 = state_11346__$1;
(statearr_11359_11386[(2)] = null);

(statearr_11359_11386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11347 === (9))){
var inst_11310 = (state_11346[(7)]);
var inst_11324 = cljs.core.vec.call(null,inst_11310);
var state_11346__$1 = state_11346;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11346__$1,(11),out,inst_11324);
} else {
if((state_val_11347 === (5))){
var inst_11319 = (state_11346[(11)]);
var inst_11314 = (state_11346[(9)]);
var inst_11310 = (state_11346[(7)]);
var inst_11311 = (state_11346[(8)]);
var inst_11318 = (inst_11310[inst_11311] = inst_11314);
var inst_11319__$1 = (inst_11311 + (1));
var inst_11320 = (inst_11319__$1 < n);
var state_11346__$1 = (function (){var statearr_11360 = state_11346;
(statearr_11360[(11)] = inst_11319__$1);

(statearr_11360[(12)] = inst_11318);

return statearr_11360;
})();
if(cljs.core.truth_(inst_11320)){
var statearr_11361_11387 = state_11346__$1;
(statearr_11361_11387[(1)] = (8));

} else {
var statearr_11362_11388 = state_11346__$1;
(statearr_11362_11388[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11347 === (14))){
var inst_11339 = (state_11346[(2)]);
var inst_11340 = cljs.core.async.close_BANG_.call(null,out);
var state_11346__$1 = (function (){var statearr_11364 = state_11346;
(statearr_11364[(13)] = inst_11339);

return statearr_11364;
})();
var statearr_11365_11389 = state_11346__$1;
(statearr_11365_11389[(2)] = inst_11340);

(statearr_11365_11389[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11347 === (10))){
var inst_11330 = (state_11346[(2)]);
var state_11346__$1 = state_11346;
var statearr_11366_11390 = state_11346__$1;
(statearr_11366_11390[(2)] = inst_11330);

(statearr_11366_11390[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11347 === (8))){
var inst_11319 = (state_11346[(11)]);
var inst_11310 = (state_11346[(7)]);
var tmp11363 = inst_11310;
var inst_11310__$1 = tmp11363;
var inst_11311 = inst_11319;
var state_11346__$1 = (function (){var statearr_11367 = state_11346;
(statearr_11367[(7)] = inst_11310__$1);

(statearr_11367[(8)] = inst_11311);

return statearr_11367;
})();
var statearr_11368_11391 = state_11346__$1;
(statearr_11368_11391[(2)] = null);

(statearr_11368_11391[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__6667__auto___11377,out))
;
return ((function (switch__6605__auto__,c__6667__auto___11377,out){
return (function() {
var cljs$core$async$state_machine__6606__auto__ = null;
var cljs$core$async$state_machine__6606__auto____0 = (function (){
var statearr_11372 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11372[(0)] = cljs$core$async$state_machine__6606__auto__);

(statearr_11372[(1)] = (1));

return statearr_11372;
});
var cljs$core$async$state_machine__6606__auto____1 = (function (state_11346){
while(true){
var ret_value__6607__auto__ = (function (){try{while(true){
var result__6608__auto__ = switch__6605__auto__.call(null,state_11346);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6608__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6608__auto__;
}
break;
}
}catch (e11373){if((e11373 instanceof Object)){
var ex__6609__auto__ = e11373;
var statearr_11374_11392 = state_11346;
(statearr_11374_11392[(5)] = ex__6609__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11346);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11373;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11393 = state_11346;
state_11346 = G__11393;
continue;
} else {
return ret_value__6607__auto__;
}
break;
}
});
cljs$core$async$state_machine__6606__auto__ = function(state_11346){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6606__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6606__auto____1.call(this,state_11346);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6606__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6606__auto____0;
cljs$core$async$state_machine__6606__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6606__auto____1;
return cljs$core$async$state_machine__6606__auto__;
})()
;})(switch__6605__auto__,c__6667__auto___11377,out))
})();
var state__6669__auto__ = (function (){var statearr_11375 = f__6668__auto__.call(null);
(statearr_11375[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6667__auto___11377);

return statearr_11375;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6669__auto__);
});})(c__6667__auto___11377,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var G__11395 = arguments.length;
switch (G__11395) {
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
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6667__auto___11468 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6667__auto___11468,out){
return (function (){
var f__6668__auto__ = (function (){var switch__6605__auto__ = ((function (c__6667__auto___11468,out){
return (function (state_11437){
var state_val_11438 = (state_11437[(1)]);
if((state_val_11438 === (7))){
var inst_11433 = (state_11437[(2)]);
var state_11437__$1 = state_11437;
var statearr_11439_11469 = state_11437__$1;
(statearr_11439_11469[(2)] = inst_11433);

(statearr_11439_11469[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11438 === (1))){
var inst_11396 = [];
var inst_11397 = inst_11396;
var inst_11398 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_11437__$1 = (function (){var statearr_11440 = state_11437;
(statearr_11440[(7)] = inst_11398);

(statearr_11440[(8)] = inst_11397);

return statearr_11440;
})();
var statearr_11441_11470 = state_11437__$1;
(statearr_11441_11470[(2)] = null);

(statearr_11441_11470[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11438 === (4))){
var inst_11401 = (state_11437[(9)]);
var inst_11401__$1 = (state_11437[(2)]);
var inst_11402 = (inst_11401__$1 == null);
var inst_11403 = cljs.core.not.call(null,inst_11402);
var state_11437__$1 = (function (){var statearr_11442 = state_11437;
(statearr_11442[(9)] = inst_11401__$1);

return statearr_11442;
})();
if(inst_11403){
var statearr_11443_11471 = state_11437__$1;
(statearr_11443_11471[(1)] = (5));

} else {
var statearr_11444_11472 = state_11437__$1;
(statearr_11444_11472[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11438 === (15))){
var inst_11427 = (state_11437[(2)]);
var state_11437__$1 = state_11437;
var statearr_11445_11473 = state_11437__$1;
(statearr_11445_11473[(2)] = inst_11427);

(statearr_11445_11473[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11438 === (13))){
var state_11437__$1 = state_11437;
var statearr_11446_11474 = state_11437__$1;
(statearr_11446_11474[(2)] = null);

(statearr_11446_11474[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11438 === (6))){
var inst_11397 = (state_11437[(8)]);
var inst_11422 = inst_11397.length;
var inst_11423 = (inst_11422 > (0));
var state_11437__$1 = state_11437;
if(cljs.core.truth_(inst_11423)){
var statearr_11447_11475 = state_11437__$1;
(statearr_11447_11475[(1)] = (12));

} else {
var statearr_11448_11476 = state_11437__$1;
(statearr_11448_11476[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11438 === (3))){
var inst_11435 = (state_11437[(2)]);
var state_11437__$1 = state_11437;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11437__$1,inst_11435);
} else {
if((state_val_11438 === (12))){
var inst_11397 = (state_11437[(8)]);
var inst_11425 = cljs.core.vec.call(null,inst_11397);
var state_11437__$1 = state_11437;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11437__$1,(15),out,inst_11425);
} else {
if((state_val_11438 === (2))){
var state_11437__$1 = state_11437;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11437__$1,(4),ch);
} else {
if((state_val_11438 === (11))){
var inst_11401 = (state_11437[(9)]);
var inst_11405 = (state_11437[(10)]);
var inst_11415 = (state_11437[(2)]);
var inst_11416 = [];
var inst_11417 = inst_11416.push(inst_11401);
var inst_11397 = inst_11416;
var inst_11398 = inst_11405;
var state_11437__$1 = (function (){var statearr_11449 = state_11437;
(statearr_11449[(7)] = inst_11398);

(statearr_11449[(11)] = inst_11415);

(statearr_11449[(12)] = inst_11417);

(statearr_11449[(8)] = inst_11397);

return statearr_11449;
})();
var statearr_11450_11477 = state_11437__$1;
(statearr_11450_11477[(2)] = null);

(statearr_11450_11477[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11438 === (9))){
var inst_11397 = (state_11437[(8)]);
var inst_11413 = cljs.core.vec.call(null,inst_11397);
var state_11437__$1 = state_11437;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11437__$1,(11),out,inst_11413);
} else {
if((state_val_11438 === (5))){
var inst_11398 = (state_11437[(7)]);
var inst_11401 = (state_11437[(9)]);
var inst_11405 = (state_11437[(10)]);
var inst_11405__$1 = f.call(null,inst_11401);
var inst_11406 = cljs.core._EQ_.call(null,inst_11405__$1,inst_11398);
var inst_11407 = cljs.core.keyword_identical_QMARK_.call(null,inst_11398,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_11408 = (inst_11406) || (inst_11407);
var state_11437__$1 = (function (){var statearr_11451 = state_11437;
(statearr_11451[(10)] = inst_11405__$1);

return statearr_11451;
})();
if(cljs.core.truth_(inst_11408)){
var statearr_11452_11478 = state_11437__$1;
(statearr_11452_11478[(1)] = (8));

} else {
var statearr_11453_11479 = state_11437__$1;
(statearr_11453_11479[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11438 === (14))){
var inst_11430 = (state_11437[(2)]);
var inst_11431 = cljs.core.async.close_BANG_.call(null,out);
var state_11437__$1 = (function (){var statearr_11455 = state_11437;
(statearr_11455[(13)] = inst_11430);

return statearr_11455;
})();
var statearr_11456_11480 = state_11437__$1;
(statearr_11456_11480[(2)] = inst_11431);

(statearr_11456_11480[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11438 === (10))){
var inst_11420 = (state_11437[(2)]);
var state_11437__$1 = state_11437;
var statearr_11457_11481 = state_11437__$1;
(statearr_11457_11481[(2)] = inst_11420);

(statearr_11457_11481[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11438 === (8))){
var inst_11401 = (state_11437[(9)]);
var inst_11397 = (state_11437[(8)]);
var inst_11405 = (state_11437[(10)]);
var inst_11410 = inst_11397.push(inst_11401);
var tmp11454 = inst_11397;
var inst_11397__$1 = tmp11454;
var inst_11398 = inst_11405;
var state_11437__$1 = (function (){var statearr_11458 = state_11437;
(statearr_11458[(7)] = inst_11398);

(statearr_11458[(14)] = inst_11410);

(statearr_11458[(8)] = inst_11397__$1);

return statearr_11458;
})();
var statearr_11459_11482 = state_11437__$1;
(statearr_11459_11482[(2)] = null);

(statearr_11459_11482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__6667__auto___11468,out))
;
return ((function (switch__6605__auto__,c__6667__auto___11468,out){
return (function() {
var cljs$core$async$state_machine__6606__auto__ = null;
var cljs$core$async$state_machine__6606__auto____0 = (function (){
var statearr_11463 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11463[(0)] = cljs$core$async$state_machine__6606__auto__);

(statearr_11463[(1)] = (1));

return statearr_11463;
});
var cljs$core$async$state_machine__6606__auto____1 = (function (state_11437){
while(true){
var ret_value__6607__auto__ = (function (){try{while(true){
var result__6608__auto__ = switch__6605__auto__.call(null,state_11437);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6608__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6608__auto__;
}
break;
}
}catch (e11464){if((e11464 instanceof Object)){
var ex__6609__auto__ = e11464;
var statearr_11465_11483 = state_11437;
(statearr_11465_11483[(5)] = ex__6609__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11437);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11464;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11484 = state_11437;
state_11437 = G__11484;
continue;
} else {
return ret_value__6607__auto__;
}
break;
}
});
cljs$core$async$state_machine__6606__auto__ = function(state_11437){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6606__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6606__auto____1.call(this,state_11437);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6606__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6606__auto____0;
cljs$core$async$state_machine__6606__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6606__auto____1;
return cljs$core$async$state_machine__6606__auto__;
})()
;})(switch__6605__auto__,c__6667__auto___11468,out))
})();
var state__6669__auto__ = (function (){var statearr_11466 = f__6668__auto__.call(null);
(statearr_11466[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6667__auto___11468);

return statearr_11466;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6669__auto__);
});})(c__6667__auto___11468,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map