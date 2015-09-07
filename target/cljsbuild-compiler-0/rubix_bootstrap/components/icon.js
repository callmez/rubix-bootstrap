// Compiled by ClojureScript 0.0-3269 {:static-fns true, :optimize-constants true}
goog.provide('rubix_bootstrap.components.icon');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljsjs.util');
rubix_bootstrap.components.icon.gen_classes = (function rubix_bootstrap$components$icon$gen_classes(props){
var feedback_QMARK_ = cljs.core.constant$keyword$feedback.cljs$core$IFn$_invoke$arity$1(props);
var bundle_QMARK_ = cljs.core.constant$keyword$bundle.cljs$core$IFn$_invoke$arity$1(props);
var glyph_QMARK_ = cljs.core.constant$keyword$glyph.cljs$core$IFn$_invoke$arity$1(props);
return [cljs.core.str("rubix-icon "),cljs.core.str((cljs.core.truth_(feedback_QMARK_)?"form-control-feedback ":null)),cljs.core.str((cljs.core.truth_(bundle_QMARK_)?[cljs.core.str(bundle_QMARK_),cljs.core.str(" "),cljs.core.str("icon-"),cljs.core.str(bundle_QMARK_),cljs.core.str("-"),cljs.core.str(glyph_QMARK_)].join(''):glyph_QMARK_))].join('');
});
rubix_bootstrap.components.icon.icon = (function rubix_bootstrap$components$icon$icon(props){
var this$ = reagent.core.current_component();
var classes = rubix_bootstrap.components.icon.gen_classes(props);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$span,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([reagent.core.props(this$),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$class,cljsjs.util.trim([cljs.core.str(classes),cljs.core.str(" "),cljs.core.str(cljs.core.constant$keyword$className.cljs$core$IFn$_invoke$arity$1(props))].join(''))], null)], 0))], null);
});
