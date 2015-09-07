// Compiled by ClojureScript 0.0-3269 {:static-fns true, :optimize-constants true}
goog.provide('rubix_bootstrap.components.form');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljsjs.util');
rubix_bootstrap.components.form.gen_classes = (function rubix_bootstrap$components$form$gen_classes(props){
var inline_QMARK_ = cljs.core.constant$keyword$inline.cljs$core$IFn$_invoke$arity$1(props);
var horizontal_QMARK_ = cljs.core.constant$keyword$horizontal.cljs$core$IFn$_invoke$arity$1(props);
return [cljs.core.str((cljs.core.truth_(inline_QMARK_)?"form-inline ":null)),cljs.core.str((cljs.core.truth_(horizontal_QMARK_)?"form-horizontal ":null))].join('');
});
rubix_bootstrap.components.form.fakeInputs = (function rubix_bootstrap$components$form$fakeInputs(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$display,"none"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$form_DASH_group,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$input,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$type,"text"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$form_DASH_group,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$input,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$type,"email"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$form_DASH_group,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$input,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$type,"password"], null)], null)], null)], null);
});
rubix_bootstrap.components.form.form = (function rubix_bootstrap$components$form$form(props){
var this$ = reagent.core.current_component();
var classes = rubix_bootstrap.components.form.gen_classes(props);
var autocomplete_QMARK_ = cljs.core.constant$keyword$allowAutoComplete.cljs$core$IFn$_invoke$arity$1(props);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$form,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([reagent.core.props(this$),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$role,"form",cljs.core.constant$keyword$class,cljsjs.util.trim([cljs.core.str(classes),cljs.core.str(" "),cljs.core.str(cljs.core.constant$keyword$className.cljs$core$IFn$_invoke$arity$1(props))].join('')),cljs.core.constant$keyword$autoComplete,((cljs.core.not(autocomplete_QMARK_))?"off":"on")], null)], 0)),((cljs.core.not(autocomplete_QMARK_))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rubix_bootstrap.components.form.fakeInputs], null):null),cljs.core.constant$keyword$children.cljs$core$IFn$_invoke$arity$1(props)], null);
});
