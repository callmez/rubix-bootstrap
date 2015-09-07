// Compiled by ClojureScript 0.0-3269 {:static-fns true, :optimize-constants true}
goog.provide('cljsjs.util');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('clojure.string');
if(typeof cljsjs.util.debug_QMARK_ !== 'undefined'){
} else {
cljsjs.util.debug_QMARK_ = false;
}
if(typeof cljsjs.util.counter !== 'undefined'){
} else {
cljsjs.util.counter = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
cljsjs.util.reset_counter_BANG_ = (function cljsjs$util$reset_counter_BANG_(){
var G__13973 = cljsjs.util.counter;
var G__13974 = (0);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13973,G__13974) : cljs.core.reset_BANG_.call(null,G__13973,G__13974));
});
cljsjs.util.deep_merge_STAR_ = (function cljsjs$util$deep_merge_STAR_(){
var argseq__5347__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return cljsjs.util.deep_merge_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__5347__auto__);
});

cljsjs.util.deep_merge_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
var f = (function (old,new$){
if((cljs.core.map_QMARK_(old)) && (cljs.core.map_QMARK_(new$))){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljsjs.util.deep_merge_STAR_,cljs.core.array_seq([old,new$], 0));
} else {
return new$;
}
});
if(cljs.core.every_QMARK_(cljs.core.map_QMARK_,maps)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge_with,f,maps);
} else {
return cljs.core.last(maps);
}
});

cljsjs.util.deep_merge_STAR_.cljs$lang$maxFixedArity = (0);

cljsjs.util.deep_merge_STAR_.cljs$lang$applyTo = (function (seq13975){
return cljsjs.util.deep_merge_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13975));
});
cljsjs.util.deep_merge = (function cljsjs$util$deep_merge(){
var argseq__5347__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return cljsjs.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic(argseq__5347__auto__);
});

cljsjs.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
var maps__$1 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,maps);
if(cljs.core.every_QMARK_(cljs.core.map_QMARK_,maps__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"maps","maps",-71029607,null))], 0)))].join('')));
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge_with,cljsjs.util.deep_merge_STAR_,maps__$1);
});

cljsjs.util.deep_merge.cljs$lang$maxFixedArity = (0);

cljsjs.util.deep_merge.cljs$lang$applyTo = (function (seq13976){
return cljsjs.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13976));
});
cljsjs.util.indexOf = (function cljsjs$util$indexOf(v,p){
return cljs.core.first(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__13977_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.second(p1__13977_SHARP_),p);
}),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,v))));
});
cljsjs.util.gen_id = (function cljsjs$util$gen_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljsjs.util.counter,cljs.core.inc);
});
cljsjs.util.get_id = (function cljsjs$util$get_id(this$,props){
var or__4307__auto__ = cljs.core.constant$keyword$id.cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(or__4307__auto__)){
return or__4307__auto__;
} else {
var or__4307__auto____$1 = (this$["id"]);
if(cljs.core.truth_(or__4307__auto____$1)){
return or__4307__auto____$1;
} else {
return (this$["id"] = cljsjs.util.gen_id());
}
}
});
cljsjs.util.map_children = (function cljsjs$util$map_children(func,rchildren){
try{var _ = cljs.core.count(rchildren);
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(func,rchildren);
}catch (e13981){if((e13981 instanceof Error)){
var err = e13981;
var G__13982 = (0);
var G__13983 = rchildren;
return (func.cljs$core$IFn$_invoke$arity$2 ? func.cljs$core$IFn$_invoke$arity$2(G__13982,G__13983) : func.call(null,G__13982,G__13983));
} else {
throw e13981;

}
}});
cljsjs.util.debug = (function cljsjs$util$debug(){
var argseq__5347__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return cljsjs.util.debug.cljs$core$IFn$_invoke$arity$variadic(argseq__5347__auto__);
});

cljsjs.util.debug.cljs$core$IFn$_invoke$arity$variadic = (function (args){
if(cljs.core.truth_(cljsjs.util.debug_QMARK_)){
return console.log.apply(console,cljs.core.clj__GT_js(args));
} else {
return null;
}
});

cljsjs.util.debug.cljs$lang$maxFixedArity = (0);

cljsjs.util.debug.cljs$lang$applyTo = (function (seq13984){
return cljsjs.util.debug.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13984));
});
cljsjs.util.convert_props = (function cljsjs$util$convert_props(a){
var b = (cljs.core.truth_(cljs.core.constant$keyword$className.cljs$core$IFn$_invoke$arity$1(a))?cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$class,cljs.core.constant$keyword$className.cljs$core$IFn$_invoke$arity$1(a)], null)], 0)):a);
var c = (cljs.core.truth_(cljs.core.constant$keyword$htmlFor.cljs$core$IFn$_invoke$arity$1(b))?cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([b,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$for,cljs.core.constant$keyword$htmlFor.cljs$core$IFn$_invoke$arity$1(a)], null)], 0)):b);
var d = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(c,cljs.core.constant$keyword$className);
var e = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(d,cljs.core.constant$keyword$htmlFor);
return e;
});
cljsjs.util.trim = (function cljsjs$util$trim(st){
var st__$1 = clojure.string.replace(st,/\s+/," ");
return clojure.string.trim(st__$1);
});
