// Compiled by ClojureScript 0.0-3269 {}
goog.provide('reagent.session');
goog.require('cljs.core');
goog.require('reagent.core');
reagent.session.state = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Get the key's value from the session, returns nil if it doesn't exist.
 */
reagent.session.get = (function reagent$session$get(){
var argseq__5347__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5347__auto__);
});

reagent.session.get.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__6099){
var vec__6100 = p__6099;
var default$ = cljs.core.nth.call(null,vec__6100,(0),null);
return cljs.core.get.call(null,cljs.core.deref.call(null,reagent.session.state),k,default$);
});

reagent.session.get.cljs$lang$maxFixedArity = (1);

reagent.session.get.cljs$lang$applyTo = (function (seq6097){
var G__6098 = cljs.core.first.call(null,seq6097);
var seq6097__$1 = cljs.core.next.call(null,seq6097);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic(G__6098,seq6097__$1);
});
reagent.session.put_BANG_ = (function reagent$session$put_BANG_(k,v){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.assoc,k,v);
});
/**
 * Gets the value at the path specified by the vector ks from the session,
 * returns nil if it doesn't exist.
 */
reagent.session.get_in = (function reagent$session$get_in(){
var argseq__5347__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5347__auto__);
});

reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__6103){
var vec__6104 = p__6103;
var default$ = cljs.core.nth.call(null,vec__6104,(0),null);
return cljs.core.get_in.call(null,cljs.core.deref.call(null,reagent.session.state),ks,default$);
});

reagent.session.get_in.cljs$lang$maxFixedArity = (1);

reagent.session.get_in.cljs$lang$applyTo = (function (seq6101){
var G__6102 = cljs.core.first.call(null,seq6101);
var seq6101__$1 = cljs.core.next.call(null,seq6101);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic(G__6102,seq6101__$1);
});
/**
 * Replace the current session's value with the result of executing f with
 * the current value and args.
 */
reagent.session.swap_BANG_ = (function reagent$session$swap_BANG_(){
var argseq__5347__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5347__auto__);
});

reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.call(null,cljs.core.swap_BANG_,reagent.session.state,f,args);
});

reagent.session.swap_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.swap_BANG_.cljs$lang$applyTo = (function (seq6105){
var G__6106 = cljs.core.first.call(null,seq6105);
var seq6105__$1 = cljs.core.next.call(null,seq6105);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__6106,seq6105__$1);
});
/**
 * Remove all data from the session and start over cleanly.
 */
reagent.session.clear_BANG_ = (function reagent$session$clear_BANG_(){
return cljs.core.reset_BANG_.call(null,reagent.session.state,cljs.core.PersistentArrayMap.EMPTY);
});
reagent.session.reset_BANG_ = (function reagent$session$reset_BANG_(m){
return cljs.core.reset_BANG_.call(null,reagent.session.state,m);
});
/**
 * Remove a key from the session
 */
reagent.session.remove_BANG_ = (function reagent$session$remove_BANG_(k){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.dissoc,k);
});
/**
 * Associates a value in the session, where ks is a
 * sequence of keys and v is the new value and returns
 * a new nested structure. If any levels do not exist,
 * hash-maps will be created.
 */
reagent.session.assoc_in_BANG_ = (function reagent$session$assoc_in_BANG_(ks,v){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__6107_SHARP_){
return cljs.core.assoc_in.call(null,p1__6107_SHARP_,ks,v);
}));
});
/**
 * Destructive get from the session. This returns the current value of the key
 * and then removes it from the session.
 */
reagent.session.get_BANG_ = (function reagent$session$get_BANG_(){
var argseq__5347__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5347__auto__);
});

reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__6110){
var vec__6111 = p__6110;
var default$ = cljs.core.nth.call(null,vec__6111,(0),null);
var cur = reagent.session.get.call(null,k,default$);
reagent.session.remove_BANG_.call(null,k);

return cur;
});

reagent.session.get_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_BANG_.cljs$lang$applyTo = (function (seq6108){
var G__6109 = cljs.core.first.call(null,seq6108);
var seq6108__$1 = cljs.core.next.call(null,seq6108);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__6109,seq6108__$1);
});
/**
 * Destructive get from the session. This returns the current value of the path
 * specified by the vector ks and then removes it from the session.
 */
reagent.session.get_in_BANG_ = (function reagent$session$get_in_BANG_(){
var argseq__5347__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5347__auto__);
});

reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__6114){
var vec__6115 = p__6114;
var default$ = cljs.core.nth.call(null,vec__6115,(0),null);
var cur = cljs.core.get_in.call(null,cljs.core.deref.call(null,reagent.session.state),ks,default$);
reagent.session.assoc_in_BANG_.call(null,ks,null);

return cur;
});

reagent.session.get_in_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_in_BANG_.cljs$lang$applyTo = (function (seq6112){
var G__6113 = cljs.core.first.call(null,seq6112);
var seq6112__$1 = cljs.core.next.call(null,seq6112);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__6113,seq6112__$1);
});
/**
 * 'Updates' a value in the session, where ks is a
 * sequence of keys and f is a function that will
 * take the old value along with any supplied args and return
 * the new value. If any levels do not exist, hash-maps
 * will be created.
 */
reagent.session.update_in_BANG_ = (function reagent$session$update_in_BANG_(){
var argseq__5347__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5347__auto__);
});

reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,f,args){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__6116_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update_in,p1__6116_SHARP_,ks,f),args);
}));
});

reagent.session.update_in_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_in_BANG_.cljs$lang$applyTo = (function (seq6117){
var G__6118 = cljs.core.first.call(null,seq6117);
var seq6117__$1 = cljs.core.next.call(null,seq6117);
var G__6119 = cljs.core.first.call(null,seq6117__$1);
var seq6117__$2 = cljs.core.next.call(null,seq6117__$1);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__6118,G__6119,seq6117__$2);
});

//# sourceMappingURL=session.js.map