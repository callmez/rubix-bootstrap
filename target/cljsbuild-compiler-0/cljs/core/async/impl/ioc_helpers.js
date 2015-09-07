// Compiled by ClojureScript 0.0-3269 {:static-fns true, :optimize-constants true}
goog.provide('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
cljs.core.async.impl.ioc_helpers.FN_IDX = (0);
cljs.core.async.impl.ioc_helpers.STATE_IDX = (1);
cljs.core.async.impl.ioc_helpers.VALUE_IDX = (2);
cljs.core.async.impl.ioc_helpers.BINDINGS_IDX = (3);
cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES = (4);
cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION = (5);
cljs.core.async.impl.ioc_helpers.USER_START_IDX = (6);
cljs.core.async.impl.ioc_helpers.aset_object = (function cljs$core$async$impl$ioc_helpers$aset_object(arr,idx,o){
return (arr[idx][o]);
});
cljs.core.async.impl.ioc_helpers.aget_object = (function cljs$core$async$impl$ioc_helpers$aget_object(arr,idx){
return (arr[idx]);
});
/**
 * Returns true if the machine is in a finished state
 */
cljs.core.async.impl.ioc_helpers.finished_QMARK_ = (function cljs$core$async$impl$ioc_helpers$finished_QMARK_(state_array){
return cljs.core.keyword_identical_QMARK_((state_array[cljs.core.async.impl.ioc_helpers.STATE_IDX]),cljs.core.constant$keyword$finished);
});
cljs.core.async.impl.ioc_helpers.fn_handler = (function cljs$core$async$impl$ioc_helpers$fn_handler(f){
if(typeof cljs.core.async.impl.ioc_helpers.t17822 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.impl.ioc_helpers.t17822 = (function (fn_handler,f,meta17823){
this.fn_handler = fn_handler;
this.f = f;
this.meta17823 = meta17823;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.impl.ioc_helpers.t17822.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17824,meta17823__$1){
var self__ = this;
var _17824__$1 = this;
return (new cljs.core.async.impl.ioc_helpers.t17822(self__.fn_handler,self__.f,meta17823__$1));
});

cljs.core.async.impl.ioc_helpers.t17822.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17824){
var self__ = this;
var _17824__$1 = this;
return self__.meta17823;
});

cljs.core.async.impl.ioc_helpers.t17822.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.impl.ioc_helpers.t17822.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.impl.ioc_helpers.t17822.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.impl.ioc_helpers.t17822.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta17823","meta17823",-642054075,null)], null);
});

cljs.core.async.impl.ioc_helpers.t17822.cljs$lang$type = true;

cljs.core.async.impl.ioc_helpers.t17822.cljs$lang$ctorStr = "cljs.core.async.impl.ioc-helpers/t17822";

cljs.core.async.impl.ioc_helpers.t17822.cljs$lang$ctorPrWriter = (function (this__4886__auto__,writer__4887__auto__,opt__4888__auto__){
return cljs.core._write(writer__4887__auto__,"cljs.core.async.impl.ioc-helpers/t17822");
});

cljs.core.async.impl.ioc_helpers.__GT_t17822 = (function cljs$core$async$impl$ioc_helpers$fn_handler_$___GT_t17822(fn_handler__$1,f__$1,meta17823){
return (new cljs.core.async.impl.ioc_helpers.t17822(fn_handler__$1,f__$1,meta17823));
});

}

return (new cljs.core.async.impl.ioc_helpers.t17822(cljs$core$async$impl$ioc_helpers$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.impl.ioc_helpers.run_state_machine = (function cljs$core$async$impl$ioc_helpers$run_state_machine(state){
return cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.FN_IDX).call(null,state);
});
cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped = (function cljs$core$async$impl$ioc_helpers$run_state_machine_wrapped(state){
try{return cljs.core.async.impl.ioc_helpers.run_state_machine(state);
}catch (e17826){if((e17826 instanceof Object)){
var ex = e17826;
cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.USER_START_IDX).cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(null);

throw ex;
} else {
throw e17826;

}
}});
cljs.core.async.impl.ioc_helpers.take_BANG_ = (function cljs$core$async$impl$ioc_helpers$take_BANG_(state,blk,c){
var temp__4421__auto__ = c.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2(null,cljs.core.async.impl.ioc_helpers.fn_handler((function (x){
var statearr_17830_17833 = state;
(statearr_17830_17833[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = x);

(statearr_17830_17833[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
})));
if(cljs.core.truth_(temp__4421__auto__)){
var cb = temp__4421__auto__;
var statearr_17831_17834 = state;
(statearr_17831_17834[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__17832 = cb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17832) : cljs.core.deref.call(null,G__17832));
})());

(statearr_17831_17834[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);


return cljs.core.constant$keyword$recur;
} else {
return null;
}
});
cljs.core.async.impl.ioc_helpers.put_BANG_ = (function cljs$core$async$impl$ioc_helpers$put_BANG_(state,blk,c,val){
var temp__4421__auto__ = c.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(null,val,cljs.core.async.impl.ioc_helpers.fn_handler((function (ret_val){
var statearr_17838_17841 = state;
(statearr_17838_17841[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = ret_val);

(statearr_17838_17841[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
})));
if(cljs.core.truth_(temp__4421__auto__)){
var cb = temp__4421__auto__;
var statearr_17839_17842 = state;
(statearr_17839_17842[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__17840 = cb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17840) : cljs.core.deref.call(null,G__17840));
})());

(statearr_17839_17842[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);


return cljs.core.constant$keyword$recur;
} else {
return null;
}
});
cljs.core.async.impl.ioc_helpers.return_chan = (function cljs$core$async$impl$ioc_helpers$return_chan(state,value){
var c = (state[cljs.core.async.impl.ioc_helpers.USER_START_IDX]);
if((value == null)){
} else {
c.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(null,value,cljs.core.async.impl.ioc_helpers.fn_handler(((function (c){
return (function (){
return null;
});})(c))
));
}

c.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(null);

return c;
});

/**
* @constructor
* @param {*} catch_block
* @param {*} catch_exception
* @param {*} finally_block
* @param {*} continue_block
* @param {*} prev
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
cljs.core.async.impl.ioc_helpers.ExceptionFrame = (function (catch_block,catch_exception,finally_block,continue_block,prev,__meta,__extmap,__hash){
this.catch_block = catch_block;
this.catch_exception = catch_exception;
this.finally_block = finally_block;
this.continue_block = continue_block;
this.prev = prev;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4902__auto__,k__4903__auto__){
var self__ = this;
var this__4902__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4902__auto____$1,k__4903__auto__,null);
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4904__auto__,k17844,else__4905__auto__){
var self__ = this;
var this__4904__auto____$1 = this;
var G__17846 = (((k17844 instanceof cljs.core.Keyword))?k17844.fqn:null);
switch (G__17846) {
case "catch-block":
return self__.catch_block;

break;
case "catch-exception":
return self__.catch_exception;

break;
case "finally-block":
return self__.finally_block;

break;
case "continue-block":
return self__.continue_block;

break;
case "prev":
return self__.prev;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k17844,else__4905__auto__);

}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4916__auto__,writer__4917__auto__,opts__4918__auto__){
var self__ = this;
var this__4916__auto____$1 = this;
var pr_pair__4919__auto__ = ((function (this__4916__auto____$1){
return (function (keyval__4920__auto__){
return cljs.core.pr_sequential_writer(writer__4917__auto__,cljs.core.pr_writer,""," ","",opts__4918__auto__,keyval__4920__auto__);
});})(this__4916__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4917__auto__,pr_pair__4919__auto__,"#cljs.core.async.impl.ioc-helpers.ExceptionFrame{",", ","}",opts__4918__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$catch_DASH_block,self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$catch_DASH_exception,self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$finally_DASH_block,self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$continue_DASH_block,self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$prev,self__.prev],null))], null),self__.__extmap));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4900__auto__){
var self__ = this;
var this__4900__auto____$1 = this;
return self__.__meta;
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4896__auto__){
var self__ = this;
var this__4896__auto____$1 = this;
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4906__auto__){
var self__ = this;
var this__4906__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4897__auto__){
var self__ = this;
var this__4897__auto____$1 = this;
var h__4723__auto__ = self__.__hash;
if(!((h__4723__auto__ == null))){
return h__4723__auto__;
} else {
var h__4723__auto____$1 = cljs.core.hash_imap(this__4897__auto____$1);
self__.__hash = h__4723__auto____$1;

return h__4723__auto____$1;
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4898__auto__,other__4899__auto__){
var self__ = this;
var this__4898__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4295__auto__ = other__4899__auto__;
if(cljs.core.truth_(and__4295__auto__)){
var and__4295__auto____$1 = (this__4898__auto____$1.constructor === other__4899__auto__.constructor);
if(and__4295__auto____$1){
return cljs.core.equiv_map(this__4898__auto____$1,other__4899__auto__);
} else {
return and__4295__auto____$1;
}
} else {
return and__4295__auto__;
}
})())){
return true;
} else {
return false;
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4911__auto__,k__4912__auto__){
var self__ = this;
var this__4911__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$finally_DASH_block,null,cljs.core.constant$keyword$catch_DASH_block,null,cljs.core.constant$keyword$catch_DASH_exception,null,cljs.core.constant$keyword$prev,null,cljs.core.constant$keyword$continue_DASH_block,null], null), null),k__4912__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4911__auto____$1),self__.__meta),k__4912__auto__);
} else {
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4912__auto__)),null));
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4909__auto__,k__4910__auto__,G__17843){
var self__ = this;
var this__4909__auto____$1 = this;
var pred__17847 = cljs.core.keyword_identical_QMARK_;
var expr__17848 = k__4910__auto__;
if(cljs.core.truth_((function (){var G__17850 = cljs.core.constant$keyword$catch_DASH_block;
var G__17851 = expr__17848;
return (pred__17847.cljs$core$IFn$_invoke$arity$2 ? pred__17847.cljs$core$IFn$_invoke$arity$2(G__17850,G__17851) : pred__17847.call(null,G__17850,G__17851));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(G__17843,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__17852 = cljs.core.constant$keyword$catch_DASH_exception;
var G__17853 = expr__17848;
return (pred__17847.cljs$core$IFn$_invoke$arity$2 ? pred__17847.cljs$core$IFn$_invoke$arity$2(G__17852,G__17853) : pred__17847.call(null,G__17852,G__17853));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,G__17843,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__17854 = cljs.core.constant$keyword$finally_DASH_block;
var G__17855 = expr__17848;
return (pred__17847.cljs$core$IFn$_invoke$arity$2 ? pred__17847.cljs$core$IFn$_invoke$arity$2(G__17854,G__17855) : pred__17847.call(null,G__17854,G__17855));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,G__17843,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__17856 = cljs.core.constant$keyword$continue_DASH_block;
var G__17857 = expr__17848;
return (pred__17847.cljs$core$IFn$_invoke$arity$2 ? pred__17847.cljs$core$IFn$_invoke$arity$2(G__17856,G__17857) : pred__17847.call(null,G__17856,G__17857));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,G__17843,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__17858 = cljs.core.constant$keyword$prev;
var G__17859 = expr__17848;
return (pred__17847.cljs$core$IFn$_invoke$arity$2 ? pred__17847.cljs$core$IFn$_invoke$arity$2(G__17858,G__17859) : pred__17847.call(null,G__17858,G__17859));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,G__17843,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4910__auto__,G__17843),null));
}
}
}
}
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4914__auto__){
var self__ = this;
var this__4914__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$catch_DASH_block,self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$catch_DASH_exception,self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$finally_DASH_block,self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$continue_DASH_block,self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$prev,self__.prev],null))], null),self__.__extmap));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4901__auto__,G__17843){
var self__ = this;
var this__4901__auto____$1 = this;
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,G__17843,self__.__extmap,self__.__hash));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4907__auto__,entry__4908__auto__){
var self__ = this;
var this__4907__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4908__auto__)){
return cljs.core._assoc(this__4907__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4908__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4908__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4907__auto____$1,entry__4908__auto__);
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"catch-block","catch-block",-1479223021,null),new cljs.core.Symbol(null,"catch-exception","catch-exception",-356775268,null),new cljs.core.Symbol(null,"finally-block","finally-block",-1821453297,null),new cljs.core.Symbol(null,"continue-block","continue-block",-211516323,null),new cljs.core.Symbol(null,"prev","prev",43462301,null)], null);
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$type = true;

cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrSeq = (function (this__4936__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrWriter = (function (this__4936__auto__,writer__4937__auto__){
return cljs.core._write(writer__4937__auto__,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});

cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame = (function cljs$core$async$impl$ioc_helpers$__GT_ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev,null,null,null));
});

cljs.core.async.impl.ioc_helpers.map__GT_ExceptionFrame = (function cljs$core$async$impl$ioc_helpers$map__GT_ExceptionFrame(G__17845){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(cljs.core.constant$keyword$catch_DASH_block.cljs$core$IFn$_invoke$arity$1(G__17845),cljs.core.constant$keyword$catch_DASH_exception.cljs$core$IFn$_invoke$arity$1(G__17845),cljs.core.constant$keyword$finally_DASH_block.cljs$core$IFn$_invoke$arity$1(G__17845),cljs.core.constant$keyword$continue_DASH_block.cljs$core$IFn$_invoke$arity$1(G__17845),cljs.core.constant$keyword$prev.cljs$core$IFn$_invoke$arity$1(G__17845),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__17845,cljs.core.constant$keyword$catch_DASH_block,cljs.core.array_seq([cljs.core.constant$keyword$catch_DASH_exception,cljs.core.constant$keyword$finally_DASH_block,cljs.core.constant$keyword$continue_DASH_block,cljs.core.constant$keyword$prev], 0)),null));
});

cljs.core.async.impl.ioc_helpers.add_exception_frame = (function cljs$core$async$impl$ioc_helpers$add_exception_frame(state,catch_block,catch_exception,finally_block,continue_block){
var statearr_17862 = state;
(statearr_17862[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES)));

return statearr_17862;
});
cljs.core.async.impl.ioc_helpers.process_exception = (function cljs$core$async$impl$ioc_helpers$process_exception(state){
while(true){
var exception_frame = cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES);
var catch_block = cljs.core.constant$keyword$catch_DASH_block.cljs$core$IFn$_invoke$arity$1(exception_frame);
var catch_exception = cljs.core.constant$keyword$catch_DASH_exception.cljs$core$IFn$_invoke$arity$1(exception_frame);
var exception = cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION);
if(cljs.core.truth_((function (){var and__4295__auto__ = exception;
if(cljs.core.truth_(and__4295__auto__)){
return cljs.core.not(exception_frame);
} else {
return and__4295__auto__;
}
})())){
throw exception;
} else {
if(cljs.core.truth_((function (){var and__4295__auto__ = exception;
if(cljs.core.truth_(and__4295__auto__)){
var and__4295__auto____$1 = catch_block;
if(cljs.core.truth_(and__4295__auto____$1)){
return (exception instanceof catch_exception);
} else {
return and__4295__auto____$1;
}
} else {
return and__4295__auto__;
}
})())){
var statearr_17868 = state;
(statearr_17868[cljs.core.async.impl.ioc_helpers.STATE_IDX] = catch_block);

(statearr_17868[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = exception);

(statearr_17868[cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION] = null);

(statearr_17868[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(exception_frame,cljs.core.constant$keyword$catch_DASH_block,null,cljs.core.array_seq([cljs.core.constant$keyword$catch_DASH_exception,null], 0)));

return statearr_17868;
} else {
if(cljs.core.truth_((function (){var and__4295__auto__ = exception;
if(cljs.core.truth_(and__4295__auto__)){
return (cljs.core.not(catch_block)) && (cljs.core.not(cljs.core.constant$keyword$finally_DASH_block.cljs$core$IFn$_invoke$arity$1(exception_frame)));
} else {
return and__4295__auto__;
}
})())){
var statearr_17869_17873 = state;
(statearr_17869_17873[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.constant$keyword$prev.cljs$core$IFn$_invoke$arity$1(exception_frame));


var G__17874 = state;
state = G__17874;
continue;
} else {
if(cljs.core.truth_((function (){var and__4295__auto__ = exception;
if(cljs.core.truth_(and__4295__auto__)){
var and__4295__auto____$1 = cljs.core.not(catch_block);
if(and__4295__auto____$1){
return cljs.core.constant$keyword$finally_DASH_block.cljs$core$IFn$_invoke$arity$1(exception_frame);
} else {
return and__4295__auto____$1;
}
} else {
return and__4295__auto__;
}
})())){
var statearr_17870 = state;
(statearr_17870[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$finally_DASH_block.cljs$core$IFn$_invoke$arity$1(exception_frame));

(statearr_17870[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exception_frame,cljs.core.constant$keyword$finally_DASH_block,null));

return statearr_17870;
} else {
if(cljs.core.truth_((function (){var and__4295__auto__ = cljs.core.not(exception);
if(and__4295__auto__){
return cljs.core.constant$keyword$finally_DASH_block.cljs$core$IFn$_invoke$arity$1(exception_frame);
} else {
return and__4295__auto__;
}
})())){
var statearr_17871 = state;
(statearr_17871[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$finally_DASH_block.cljs$core$IFn$_invoke$arity$1(exception_frame));

(statearr_17871[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exception_frame,cljs.core.constant$keyword$finally_DASH_block,null));

return statearr_17871;
} else {
if((cljs.core.not(exception)) && (cljs.core.not(cljs.core.constant$keyword$finally_DASH_block.cljs$core$IFn$_invoke$arity$1(exception_frame)))){
var statearr_17872 = state;
(statearr_17872[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$continue_DASH_block.cljs$core$IFn$_invoke$arity$1(exception_frame));

(statearr_17872[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.constant$keyword$prev.cljs$core$IFn$_invoke$arity$1(exception_frame));

return statearr_17872;
} else {
throw (new Error("No matching clause"));

}
}
}
}
}
}
break;
}
});
