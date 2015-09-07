// Compiled by ClojureScript 0.0-3269 {:static-fns true, :optimize-constants true}
goog.provide('rubix_bootstrap.components.label');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljsjs.util');
goog.require('rubix_bootstrap.components.col');
rubix_bootstrap.components.label.gen_classes = (function rubix_bootstrap$components$label$gen_classes(props){
var inline_QMARK_ = cljs.core.constant$keyword$inline.cljs$core$IFn$_invoke$arity$1(props);
var control_QMARK_ = cljs.core.constant$keyword$control.cljs$core$IFn$_invoke$arity$1(props);
return [cljs.core.str((cljs.core.truth_(inline_QMARK_)?"inline ":null)),cljs.core.str((cljs.core.truth_(control_QMARK_)?"control-label ":null))].join('');
});
rubix_bootstrap.components.label.label = (function rubix_bootstrap$components$label$label(props){
var this$ = reagent.core.current_component();
var classes = rubix_bootstrap.components.label.gen_classes(props);
var classes__$1 = [cljs.core.str(classes),cljs.core.str(rubix_bootstrap.components.col.gen_classes(props))].join('');
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$label,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([reagent.core.props(this$),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$class,cljsjs.util.trim([cljs.core.str(classes__$1),cljs.core.str(" "),cljs.core.str(cljs.core.constant$keyword$className.cljs$core$IFn$_invoke$arity$1(props))].join(''))], null)], 0)),cljs.core.constant$keyword$children.cljs$core$IFn$_invoke$arity$1(props)], null);
});
