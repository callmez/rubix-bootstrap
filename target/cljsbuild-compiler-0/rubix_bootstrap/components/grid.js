// Compiled by ClojureScript 0.0-3269 {:static-fns true, :optimize-constants true}
goog.provide('rubix_bootstrap.components.grid');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('clojure.string');
goog.require('cljsjs.util');
if(typeof rubix_bootstrap.components.grid.zIndex !== 'undefined'){
} else {
rubix_bootstrap.components.grid.zIndex = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((9999999));
}
rubix_bootstrap.components.grid.reset_globals_BANG_ = (function rubix_bootstrap$components$grid$reset_globals_BANG_(){
var G__14455 = rubix_bootstrap.components.grid.zIndex;
var G__14456 = (9999999);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__14455,G__14456) : cljs.core.reset_BANG_.call(null,G__14455,G__14456));
});
rubix_bootstrap.components.grid.getZIndex = (function rubix_bootstrap$components$grid$getZIndex(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(rubix_bootstrap.components.grid.zIndex,cljs.core.dec);
});
rubix_bootstrap.components.grid.construct_class = (function rubix_bootstrap$components$grid$construct_class(k,props){
if(cljs.core.truth_((function (){var G__14458 = props;
return (k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(G__14458) : k.call(null,G__14458));
})())){
return [cljs.core.str("grid-gutter-"),cljs.core.str(clojure.string.replace(cljs.core.name(k),/gutter/,"").toLowerCase()),cljs.core.str(" ")].join('');
} else {
return "";
}
});
rubix_bootstrap.components.grid.gen_classes = (function rubix_bootstrap$components$grid$gen_classes(props){
var fixed_QMARK_ = cljs.core.constant$keyword$fixed.cljs$core$IFn$_invoke$arity$1(props);
var fluid_QMARK_ = cljs.core.not(fixed_QMARK_);
var gutter_QMARK_ = cljs.core.constant$keyword$gutter.cljs$core$IFn$_invoke$arity$1(props);
var collapse_QMARK_ = cljs.core.constant$keyword$collapse.cljs$core$IFn$_invoke$arity$1(props);
var gutter_top_QMARK_ = rubix_bootstrap.components.grid.construct_class(cljs.core.constant$keyword$gutterTop,props);
var gutter_left_QMARK_ = rubix_bootstrap.components.grid.construct_class(cljs.core.constant$keyword$gutterLeft,props);
var gutter_right_QMARK_ = rubix_bootstrap.components.grid.construct_class(cljs.core.constant$keyword$gutterRight,props);
var gutter_bottom_QMARK_ = rubix_bootstrap.components.grid.construct_class(cljs.core.constant$keyword$gutterBottom,props);
return [cljs.core.str("rubix-grid "),cljs.core.str((cljs.core.truth_(fixed_QMARK_)?"container ":null)),cljs.core.str(((fluid_QMARK_)?"container-fluid ":null)),cljs.core.str((cljs.core.truth_(gutter_QMARK_)?"grid-gutter ":null)),cljs.core.str((cljs.core.truth_(collapse_QMARK_)?"grid-collapse ":null)),cljs.core.str(gutter_top_QMARK_),cljs.core.str(gutter_left_QMARK_),cljs.core.str(gutter_right_QMARK_),cljs.core.str(gutter_bottom_QMARK_)].join('');
});
rubix_bootstrap.components.grid.grid = (function rubix_bootstrap$components$grid$grid(props){
cljsjs.util.debug.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["grid"], 0));

var this$ = reagent.core.current_component();
var classes = rubix_bootstrap.components.grid.gen_classes(props);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div,cljsjs.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([reagent.core.props(this$),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$class,cljsjs.util.trim([cljs.core.str(classes),cljs.core.str(" "),cljs.core.str(cljs.core.constant$keyword$className.cljs$core$IFn$_invoke$arity$1(props))].join('')),cljs.core.constant$keyword$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$style.cljs$core$IFn$_invoke$arity$1(props)),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$zIndex,rubix_bootstrap.components.grid.getZIndex()], null)], 0))], null)], 0)),cljs.core.constant$keyword$children.cljs$core$IFn$_invoke$arity$1(props)], null);
});
