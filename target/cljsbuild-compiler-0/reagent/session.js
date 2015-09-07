// Compiled by ClojureScript 0.0-3269 {:static-fns true, :optimize-constants true}
goog.provide('reagent.session');
goog.require('cljs.core');
goog.require('reagent.core');
reagent.session.state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
/**
 * Get the key's value from the session, returns nil if it doesn't exist.
 */
reagent.session.get = (function reagent$session$get(){
var argseq__5347__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5347__auto__);
});

reagent.session.get.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__15034){
var vec__15035 = p__15034;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15035,(0),null);
return cljs.core.get.cljs$core$IFn$_invoke$arity$3((function (){var G__15036 = reagent.session.state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15036) : cljs.core.deref.call(null,G__15036));
})(),k,default$);
});

reagent.session.get.cljs$lang$maxFixedArity = (1);

reagent.session.get.cljs$lang$applyTo = (function (seq15032){
var G__15033 = cljs.core.first(seq15032);
var seq15032__$1 = cljs.core.next(seq15032);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic(G__15033,seq15032__$1);
});
reagent.session.put_BANG_ = (function reagent$session$put_BANG_(k,v){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.session.state,cljs.core.assoc,k,v);
});
/**
 * Gets the value at the path specified by the vector ks from the session,
 * returns nil if it doesn't exist.
 */
reagent.session.get_in = (function reagent$session$get_in(){
var argseq__5347__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5347__auto__);
});

reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__15039){
var vec__15040 = p__15039;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15040,(0),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3((function (){var G__15041 = reagent.session.state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15041) : cljs.core.deref.call(null,G__15041));
})(),ks,default$);
});

reagent.session.get_in.cljs$lang$maxFixedArity = (1);

reagent.session.get_in.cljs$lang$applyTo = (function (seq15037){
var G__15038 = cljs.core.first(seq15037);
var seq15037__$1 = cljs.core.next(seq15037);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic(G__15038,seq15037__$1);
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
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.swap_BANG_,reagent.session.state,f,args);
});

reagent.session.swap_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.swap_BANG_.cljs$lang$applyTo = (function (seq15042){
var G__15043 = cljs.core.first(seq15042);
var seq15042__$1 = cljs.core.next(seq15042);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15043,seq15042__$1);
});
/**
 * Remove all data from the session and start over cleanly.
 */
reagent.session.clear_BANG_ = (function reagent$session$clear_BANG_(){
var G__15046 = reagent.session.state;
var G__15047 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15046,G__15047) : cljs.core.reset_BANG_.call(null,G__15046,G__15047));
});
reagent.session.reset_BANG_ = (function reagent$session$reset_BANG_(m){
var G__15050 = reagent.session.state;
var G__15051 = m;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15050,G__15051) : cljs.core.reset_BANG_.call(null,G__15050,G__15051));
});
/**
 * Remove a key from the session
 */
reagent.session.remove_BANG_ = (function reagent$session$remove_BANG_(k){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.session.state,cljs.core.dissoc,k);
});
/**
 * Associates a value in the session, where ks is a
 * sequence of keys and v is the new value and returns
 * a new nested structure. If any levels do not exist,
 * hash-maps will be created.
 */
reagent.session.assoc_in_BANG_ = (function reagent$session$assoc_in_BANG_(ks,v){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.session.state,(function (p1__15052_SHARP_){
return cljs.core.assoc_in(p1__15052_SHARP_,ks,v);
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

reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__15055){
var vec__15056 = p__15055;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15056,(0),null);
var cur = reagent.session.get.cljs$core$IFn$_invoke$arity$variadic(k,cljs.core.array_seq([default$], 0));
reagent.session.remove_BANG_(k);

return cur;
});

reagent.session.get_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_BANG_.cljs$lang$applyTo = (function (seq15053){
var G__15054 = cljs.core.first(seq15053);
var seq15053__$1 = cljs.core.next(seq15053);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15054,seq15053__$1);
});
/**
 * Destructive get from the session. This returns the current value of the path
 * specified by the vector ks and then removes it from the session.
 */
reagent.session.get_in_BANG_ = (function reagent$session$get_in_BANG_(){
var argseq__5347__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5347__auto__);
});

reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__15059){
var vec__15060 = p__15059;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15060,(0),null);
var cur = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3((function (){var G__15061 = reagent.session.state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15061) : cljs.core.deref.call(null,G__15061));
})(),ks,default$);
reagent.session.assoc_in_BANG_(ks,null);

return cur;
});

reagent.session.get_in_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_in_BANG_.cljs$lang$applyTo = (function (seq15057){
var G__15058 = cljs.core.first(seq15057);
var seq15057__$1 = cljs.core.next(seq15057);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15058,seq15057__$1);
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
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.session.state,(function (p1__15062_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in,p1__15062_SHARP_,ks,f),args);
}));
});

reagent.session.update_in_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_in_BANG_.cljs$lang$applyTo = (function (seq15063){
var G__15064 = cljs.core.first(seq15063);
var seq15063__$1 = cljs.core.next(seq15063);
var G__15065 = cljs.core.first(seq15063__$1);
var seq15063__$2 = cljs.core.next(seq15063__$1);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15064,G__15065,seq15063__$2);
});
