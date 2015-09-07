// Compiled by ClojureScript 0.0-3269 {:static-fns true, :optimize-constants true}
goog.provide('rubix_bootstrap.components.formgroup');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljsjs.util');
rubix_bootstrap.components.formgroup.gen_classes = (function rubix_bootstrap$components$formgroup$gen_classes(props){
var sm_QMARK_ = cljs.core.constant$keyword$sm.cljs$core$IFn$_invoke$arity$1(props);
var lg_QMARK_ = cljs.core.constant$keyword$lg.cljs$core$IFn$_invoke$arity$1(props);
var error_QMARK_ = cljs.core.constant$keyword$error.cljs$core$IFn$_invoke$arity$1(props);
var success_QMARK_ = cljs.core.constant$keyword$success.cljs$core$IFn$_invoke$arity$1(props);
var warning_QMARK_ = cljs.core.constant$keyword$warning.cljs$core$IFn$_invoke$arity$1(props);
var feedback_QMARK_ = cljs.core.constant$keyword$feedback.cljs$core$IFn$_invoke$arity$1(props);
return [cljs.core.str("form-group "),cljs.core.str((cljs.core.truth_(sm_QMARK_)?"form-group-sm ":null)),cljs.core.str((cljs.core.truth_(lg_QMARK_)?"form-group-lg ":null)),cljs.core.str((cljs.core.truth_(error_QMARK_)?"has-error ":null)),cljs.core.str((cljs.core.truth_(success_QMARK_)?"has-success ":null)),cljs.core.str((cljs.core.truth_(warning_QMARK_)?"has-warning ":null)),cljs.core.str((cljs.core.truth_(feedback_QMARK_)?"feedback ":null))].join('');
});
rubix_bootstrap.components.formgroup.formgroup = (function rubix_bootstrap$components$formgroup$formgroup(props){
var this$ = reagent.core.current_component();
var classes = rubix_bootstrap.components.formgroup.gen_classes(props);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([reagent.core.props(this$),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$class,cljsjs.util.trim([cljs.core.str(classes),cljs.core.str(" "),cljs.core.str(cljs.core.constant$keyword$className.cljs$core$IFn$_invoke$arity$1(props))].join(''))], null)], 0)),cljs.core.constant$keyword$children.cljs$core$IFn$_invoke$arity$1(props)], null);
});
