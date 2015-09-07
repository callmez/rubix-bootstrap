// Compiled by ClojureScript 0.0-3269 {:static-fns true, :optimize-constants true}
goog.provide('rubix_bootstrap.components.container');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljsjs.util');
rubix_bootstrap.components.container.gen_classes = (function rubix_bootstrap$components$container$gen_classes(props){
var fixed_QMARK_ = cljs.core.constant$keyword$fixed.cljs$core$IFn$_invoke$arity$1(props);
var fluid_QMARK_ = cljs.core.constant$keyword$fluid.cljs$core$IFn$_invoke$arity$1(props);
return [cljs.core.str((cljs.core.truth_(fixed_QMARK_)?"container ":null)),cljs.core.str((cljs.core.truth_(fluid_QMARK_)?"container-fluid ":null))].join('');
});
rubix_bootstrap.components.container.container = (function rubix_bootstrap$components$container$container(props){
var this$ = reagent.core.current_component();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([reagent.core.props(this$),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$class,cljsjs.util.trim([cljs.core.str(rubix_bootstrap.components.container.gen_classes(props)),cljs.core.str(" "),cljs.core.str(cljs.core.constant$keyword$className.cljs$core$IFn$_invoke$arity$1(props))].join(''))], null)], 0)),cljs.core.constant$keyword$children.cljs$core$IFn$_invoke$arity$1(props)], null);
});
