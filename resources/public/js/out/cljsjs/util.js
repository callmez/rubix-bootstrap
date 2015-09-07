// Compiled by ClojureScript 0.0-3269 {}
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
cljsjs.util.counter = reagent.core.atom.call(null,(0));
}
cljsjs.util.reset_counter_BANG_ = (function cljsjs$util$reset_counter_BANG_(){
return cljs.core.reset_BANG_.call(null,cljsjs.util.counter,(0));
});
cljsjs.util.deep_merge_STAR_ = (function cljsjs$util$deep_merge_STAR_(){
var argseq__5347__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return cljsjs.util.deep_merge_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__5347__auto__);
});

cljsjs.util.deep_merge_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
var f = (function (old,new$){
if((cljs.core.map_QMARK_.call(null,old)) && (cljs.core.map_QMARK_.call(null,new$))){
return cljs.core.merge_with.call(null,cljsjs.util.deep_merge_STAR_,old,new$);
} else {
return new$;
}
});
if(cljs.core.every_QMARK_.call(null,cljs.core.map_QMARK_,maps)){
return cljs.core.apply.call(null,cljs.core.merge_with,f,maps);
} else {
return cljs.core.last.call(null,maps);
}
});

cljsjs.util.deep_merge_STAR_.cljs$lang$maxFixedArity = (0);

cljsjs.util.deep_merge_STAR_.cljs$lang$applyTo = (function (seq14513){
return cljsjs.util.deep_merge_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14513));
});
cljsjs.util.deep_merge = (function cljsjs$util$deep_merge(){
var argseq__5347__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return cljsjs.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic(argseq__5347__auto__);
});

cljsjs.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
var maps__$1 = cljs.core.filter.call(null,cljs.core.identity,maps);
if(cljs.core.every_QMARK_.call(null,cljs.core.map_QMARK_,maps__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"maps","maps",-71029607,null))))].join('')));
}

return cljs.core.apply.call(null,cljs.core.merge_with,cljsjs.util.deep_merge_STAR_,maps__$1);
});

cljsjs.util.deep_merge.cljs$lang$maxFixedArity = (0);

cljsjs.util.deep_merge.cljs$lang$applyTo = (function (seq14514){
return cljsjs.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14514));
});
cljsjs.util.indexOf = (function cljsjs$util$indexOf(v,p){
return cljs.core.first.call(null,cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__14515_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.second.call(null,p1__14515_SHARP_),p);
}),cljs.core.map_indexed.call(null,cljs.core.vector,v))));
});
cljsjs.util.gen_id = (function cljsjs$util$gen_id(){
return cljs.core.swap_BANG_.call(null,cljsjs.util.counter,cljs.core.inc);
});
cljsjs.util.get_id = (function cljsjs$util$get_id(this$,props){
var or__4307__auto__ = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(or__4307__auto__)){
return or__4307__auto__;
} else {
var or__4307__auto____$1 = (this$["id"]);
if(cljs.core.truth_(or__4307__auto____$1)){
return or__4307__auto____$1;
} else {
return (this$["id"] = cljsjs.util.gen_id.call(null));
}
}
});
cljsjs.util.map_children = (function cljsjs$util$map_children(func,rchildren){
try{var _ = cljs.core.count.call(null,rchildren);
return cljs.core.map_indexed.call(null,func,rchildren);
}catch (e14517){if((e14517 instanceof Error)){
var err = e14517;
return func.call(null,(0),rchildren);
} else {
throw e14517;

}
}});
cljsjs.util.debug = (function cljsjs$util$debug(){
var argseq__5347__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return cljsjs.util.debug.cljs$core$IFn$_invoke$arity$variadic(argseq__5347__auto__);
});

cljsjs.util.debug.cljs$core$IFn$_invoke$arity$variadic = (function (args){
if(cljs.core.truth_(cljsjs.util.debug_QMARK_)){
return console.log.apply(console,cljs.core.clj__GT_js.call(null,args));
} else {
return null;
}
});

cljsjs.util.debug.cljs$lang$maxFixedArity = (0);

cljsjs.util.debug.cljs$lang$applyTo = (function (seq14518){
return cljsjs.util.debug.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14518));
});
cljsjs.util.convert_props = (function cljsjs$util$convert_props(a){
var b = (cljs.core.truth_(new cljs.core.Keyword(null,"className","className",-1983287057).cljs$core$IFn$_invoke$arity$1(a))?cljs.core.merge.call(null,a,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"className","className",-1983287057).cljs$core$IFn$_invoke$arity$1(a)], null)):a);
var c = (cljs.core.truth_(new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720).cljs$core$IFn$_invoke$arity$1(b))?cljs.core.merge.call(null,b,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720).cljs$core$IFn$_invoke$arity$1(a)], null)):b);
var d = cljs.core.dissoc.call(null,c,new cljs.core.Keyword(null,"className","className",-1983287057));
var e = cljs.core.dissoc.call(null,d,new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720));
return e;
});
cljsjs.util.trim = (function cljsjs$util$trim(st){
var st__$1 = clojure.string.replace.call(null,st,/\s+/," ");
return clojure.string.trim.call(null,st__$1);
});

//# sourceMappingURL=util.js.map