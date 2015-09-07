// Compiled by ClojureScript 0.0-3269 {:static-fns true, :optimize-constants true}
goog.provide('reagent.impl.util');
goog.require('cljs.core');
goog.require('reagent.debug');
goog.require('reagent.interop');
goog.require('clojure.string');
reagent.impl.util.is_client = (typeof window !== 'undefined') && (!(((window["document"]) == null)));
reagent.impl.util.extract_props = (function reagent$impl$util$extract_props(v){
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),null);
if(cljs.core.map_QMARK_(p)){
return p;
} else {
return null;
}
});
reagent.impl.util.extract_children = (function reagent$impl$util$extract_children(v){
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),null);
var first_child = ((((p == null)) || (cljs.core.map_QMARK_(p)))?(2):(1));
if((cljs.core.count(v) > first_child)){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(v,first_child);
} else {
return null;
}
});
reagent.impl.util.get_argv = (function reagent$impl$util$get_argv(c){
return (c["props"]["argv"]);
});
reagent.impl.util.get_props = (function reagent$impl$util$get_props(c){
return reagent.impl.util.extract_props((c["props"]["argv"]));
});
reagent.impl.util.get_children = (function reagent$impl$util$get_children(c){
return reagent.impl.util.extract_children((c["props"]["argv"]));
});
reagent.impl.util.reagent_component_QMARK_ = (function reagent$impl$util$reagent_component_QMARK_(c){
return !(((c["props"]["argv"]) == null));
});
reagent.impl.util.cached_react_class = (function reagent$impl$util$cached_react_class(c){
return (c["cljsReactClass"]);
});
reagent.impl.util.cache_react_class = (function reagent$impl$util$cache_react_class(c,constructor){
return (c["cljsReactClass"] = constructor);
});
reagent.impl.util.memoize_1 = (function reagent$impl$util$memoize_1(f){
var mem = (function (){var G__14974 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14974) : cljs.core.atom.call(null,G__14974));
})();
return ((function (mem){
return (function (arg){
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__14975 = mem;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14975) : cljs.core.deref.call(null,G__14975));
})(),arg);
if(!((v == null))){
return v;
} else {
var ret = (function (){var G__14976 = arg;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__14976) : f.call(null,G__14976));
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mem,cljs.core.assoc,arg,ret);

return ret;
}
});
;})(mem))
});
reagent.impl.util.dont_camel_case = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["aria",null,"data",null], null), null);
reagent.impl.util.capitalize = (function reagent$impl$util$capitalize(s){
if((cljs.core.count(s) < (2))){
return clojure.string.upper_case(s);
} else {
return [cljs.core.str(clojure.string.upper_case(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),(1)))),cljs.core.str(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(1)))].join('');
}
});
reagent.impl.util.dash_to_camel = (function reagent$impl$util$dash_to_camel(dashed){
if(typeof dashed === 'string'){
return dashed;
} else {
var name_str = cljs.core.name(dashed);
var vec__14979 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(name_str,/-/);
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14979,(0),null);
var parts = cljs.core.nthnext(vec__14979,(1));
if(cljs.core.truth_((function (){var G__14980 = start;
return (reagent.impl.util.dont_camel_case.cljs$core$IFn$_invoke$arity$1 ? reagent.impl.util.dont_camel_case.cljs$core$IFn$_invoke$arity$1(G__14980) : reagent.impl.util.dont_camel_case.call(null,G__14980));
})())){
return name_str;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,start,cljs.core.map.cljs$core$IFn$_invoke$arity$2(reagent.impl.util.capitalize,parts));
}
}
});

/**
* @constructor
*/
reagent.impl.util.partial_ifn = (function (f,args,p){
this.f = f;
this.args = args;
this.p = p;
this.cljs$lang$protocol_mask$partition0$ = 6291457;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
reagent.impl.util.partial_ifn.prototype.call = (function() { 
var G__14982__delegate = function (self__,a){
var self____$1 = this;
var _ = self____$1;
var or__4307__auto___14983 = self__.p;
if(cljs.core.truth_(or__4307__auto___14983)){
} else {
self__.p = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.partial,self__.f,self__.args);
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(self__.p,a);
};
var G__14982 = function (self__,var_args){
var self__ = this;
var a = null;
if (arguments.length > 1) {
var G__14984__i = 0, G__14984__a = new Array(arguments.length -  1);
while (G__14984__i < G__14984__a.length) {G__14984__a[G__14984__i] = arguments[G__14984__i + 1]; ++G__14984__i;}
  a = new cljs.core.IndexedSeq(G__14984__a,0);
} 
return G__14982__delegate.call(this,self__,a);};
G__14982.cljs$lang$maxFixedArity = 1;
G__14982.cljs$lang$applyTo = (function (arglist__14985){
var self__ = cljs.core.first(arglist__14985);
var a = cljs.core.rest(arglist__14985);
return G__14982__delegate(self__,a);
});
G__14982.cljs$core$IFn$_invoke$arity$variadic = G__14982__delegate;
return G__14982;
})()
;

reagent.impl.util.partial_ifn.prototype.apply = (function (self__,args14981){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args14981)));
});

reagent.impl.util.partial_ifn.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__14986__delegate = function (a){
var _ = this;
var or__4307__auto___14987 = self__.p;
if(cljs.core.truth_(or__4307__auto___14987)){
} else {
self__.p = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.partial,self__.f,self__.args);
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(self__.p,a);
};
var G__14986 = function (var_args){
var self__ = this;
var a = null;
if (arguments.length > 0) {
var G__14988__i = 0, G__14988__a = new Array(arguments.length -  0);
while (G__14988__i < G__14988__a.length) {G__14988__a[G__14988__i] = arguments[G__14988__i + 0]; ++G__14988__i;}
  a = new cljs.core.IndexedSeq(G__14988__a,0);
} 
return G__14986__delegate.call(this,a);};
G__14986.cljs$lang$maxFixedArity = 0;
G__14986.cljs$lang$applyTo = (function (arglist__14989){
var a = cljs.core.seq(arglist__14989);
return G__14986__delegate(a);
});
G__14986.cljs$core$IFn$_invoke$arity$variadic = G__14986__delegate;
return G__14986;
})()
;

reagent.impl.util.partial_ifn.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.f,other.f)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.args,other.args));
});

reagent.impl.util.partial_ifn.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.f,self__.args], null));
});

reagent.impl.util.partial_ifn.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"args","args",-1338879193,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null);
});

reagent.impl.util.partial_ifn.cljs$lang$type = true;

reagent.impl.util.partial_ifn.cljs$lang$ctorStr = "reagent.impl.util/partial-ifn";

reagent.impl.util.partial_ifn.cljs$lang$ctorPrWriter = (function (this__4886__auto__,writer__4887__auto__,opt__4888__auto__){
return cljs.core._write(writer__4887__auto__,"reagent.impl.util/partial-ifn");
});

reagent.impl.util.__GT_partial_ifn = (function reagent$impl$util$__GT_partial_ifn(f,args,p){
return (new reagent.impl.util.partial_ifn(f,args,p));
});

reagent.impl.util.merge_class = (function reagent$impl$util$merge_class(p1,p2){
var class$ = (function (){var temp__4423__auto__ = cljs.core.constant$keyword$class.cljs$core$IFn$_invoke$arity$1(p1);
if(cljs.core.truth_(temp__4423__auto__)){
var c1 = temp__4423__auto__;
var temp__4423__auto____$1 = cljs.core.constant$keyword$class.cljs$core$IFn$_invoke$arity$1(p2);
if(cljs.core.truth_(temp__4423__auto____$1)){
var c2 = temp__4423__auto____$1;
return [cljs.core.str(c1),cljs.core.str(" "),cljs.core.str(c2)].join('');
} else {
return null;
}
} else {
return null;
}
})();
if((class$ == null)){
return p2;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p2,cljs.core.constant$keyword$class,class$);
}
});
reagent.impl.util.merge_style = (function reagent$impl$util$merge_style(p1,p2){
var style = (function (){var temp__4423__auto__ = cljs.core.constant$keyword$style.cljs$core$IFn$_invoke$arity$1(p1);
if(cljs.core.truth_(temp__4423__auto__)){
var s1 = temp__4423__auto__;
var temp__4423__auto____$1 = cljs.core.constant$keyword$style.cljs$core$IFn$_invoke$arity$1(p2);
if(cljs.core.truth_(temp__4423__auto____$1)){
var s2 = temp__4423__auto____$1;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([s1,s2], 0));
} else {
return null;
}
} else {
return null;
}
})();
if((style == null)){
return p2;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p2,cljs.core.constant$keyword$style,style);
}
});
reagent.impl.util.merge_props = (function reagent$impl$util$merge_props(p1,p2){
if((p1 == null)){
return p2;
} else {
if(cljs.core.map_QMARK_(p1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"p1","p1",703771573,null))], 0)))].join('')));
}

return reagent.impl.util.merge_style(p1,reagent.impl.util.merge_class(p1,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([p1,p2], 0))));
}
});
reagent.impl.util._STAR_always_update_STAR_ = false;
if(typeof reagent.impl.util.roots !== 'undefined'){
} else {
reagent.impl.util.roots = (function (){var G__14990 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14990) : cljs.core.atom.call(null,G__14990));
})();
}
reagent.impl.util.clear_container = (function reagent$impl$util$clear_container(node){
try{return (React["unmountComponentAtNode"])(node);
}catch (e14992){if((e14992 instanceof Object)){
var e = e14992;
if(typeof console !== 'undefined'){
console.warn([cljs.core.str("Warning: "),cljs.core.str("Error unmounting:")].join(''));
} else {
}

if(typeof console !== 'undefined'){
return console.log(e);
} else {
return null;
}
} else {
throw e14992;

}
}});
reagent.impl.util.render_component = (function reagent$impl$util$render_component(comp,container,callback){
try{var _STAR_always_update_STAR_14997 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (React["render"])((function (){return (comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null));
})(),container,((function (_STAR_always_update_STAR_14997){
return (function (){
var _STAR_always_update_STAR_14998 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.impl.util.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

if(cljs.core.some_QMARK_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_14998;
}});})(_STAR_always_update_STAR_14997))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_14997;
}}catch (e14996){if((e14996 instanceof Object)){
var e = e14996;
reagent.impl.util.clear_container(container);

throw e;
} else {
throw e14996;

}
}});
reagent.impl.util.re_render_component = (function reagent$impl$util$re_render_component(comp,container){
return reagent.impl.util.render_component(comp,container,null);
});
reagent.impl.util.unmount_component_at_node = (function reagent$impl$util$unmount_component_at_node(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.impl.util.roots,cljs.core.dissoc,container);

return (React["unmountComponentAtNode"])(container);
});
reagent.impl.util.force_update_all = (function reagent$impl$util$force_update_all(){
var seq__15004_15009 = cljs.core.seq(cljs.core.vals((function (){var G__15008 = reagent.impl.util.roots;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15008) : cljs.core.deref.call(null,G__15008));
})()));
var chunk__15005_15010 = null;
var count__15006_15011 = (0);
var i__15007_15012 = (0);
while(true){
if((i__15007_15012 < count__15006_15011)){
var v_15013 = chunk__15005_15010.cljs$core$IIndexed$_nth$arity$2(null,i__15007_15012);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(reagent.impl.util.re_render_component,v_15013);

var G__15014 = seq__15004_15009;
var G__15015 = chunk__15005_15010;
var G__15016 = count__15006_15011;
var G__15017 = (i__15007_15012 + (1));
seq__15004_15009 = G__15014;
chunk__15005_15010 = G__15015;
count__15006_15011 = G__15016;
i__15007_15012 = G__15017;
continue;
} else {
var temp__4423__auto___15018 = cljs.core.seq(seq__15004_15009);
if(temp__4423__auto___15018){
var seq__15004_15019__$1 = temp__4423__auto___15018;
if(cljs.core.chunked_seq_QMARK_(seq__15004_15019__$1)){
var c__5092__auto___15020 = cljs.core.chunk_first(seq__15004_15019__$1);
var G__15021 = cljs.core.chunk_rest(seq__15004_15019__$1);
var G__15022 = c__5092__auto___15020;
var G__15023 = cljs.core.count(c__5092__auto___15020);
var G__15024 = (0);
seq__15004_15009 = G__15021;
chunk__15005_15010 = G__15022;
count__15006_15011 = G__15023;
i__15007_15012 = G__15024;
continue;
} else {
var v_15025 = cljs.core.first(seq__15004_15019__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(reagent.impl.util.re_render_component,v_15025);

var G__15026 = cljs.core.next(seq__15004_15019__$1);
var G__15027 = null;
var G__15028 = (0);
var G__15029 = (0);
seq__15004_15009 = G__15026;
chunk__15005_15010 = G__15027;
count__15006_15011 = G__15028;
i__15007_15012 = G__15029;
continue;
}
} else {
}
}
break;
}

return "Updated";
});
