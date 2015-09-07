// Compiled by ClojureScript 0.0-3269 {:static-fns true, :optimize-constants true}
goog.provide('rubix_bootstrap.components.alert');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljsjs.util');
goog.require('rubix_bootstrap.components.button');
rubix_bootstrap.components.alert.gen_classes = (function rubix_bootstrap$components$alert$gen_classes(props){
var info_QMARK_ = cljs.core.constant$keyword$info.cljs$core$IFn$_invoke$arity$1(props);
var danger_QMARK_ = cljs.core.constant$keyword$danger.cljs$core$IFn$_invoke$arity$1(props);
var success_QMARK_ = cljs.core.constant$keyword$success.cljs$core$IFn$_invoke$arity$1(props);
var warning_QMARK_ = cljs.core.constant$keyword$warning.cljs$core$IFn$_invoke$arity$1(props);
return [cljs.core.str("alert "),cljs.core.str((cljs.core.truth_(info_QMARK_)?"alert-info ":null)),cljs.core.str((cljs.core.truth_(danger_QMARK_)?"alert-danger ":null)),cljs.core.str((cljs.core.truth_(success_QMARK_)?"alert-success ":null)),cljs.core.str((cljs.core.truth_(warning_QMARK_)?"alert-warning ":null))].join('');
});
rubix_bootstrap.components.alert.handle_alert_close = (function rubix_bootstrap$components$alert$handle_alert_close(hidden){
var G__14135 = hidden;
var G__14136 = "hidden";
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__14135,G__14136) : cljs.core.reset_BANG_.call(null,G__14135,G__14136));
});
rubix_bootstrap.components.alert.alert_dismissible = (function rubix_bootstrap$components$alert$alert_dismissible(props,hidden,on_dismiss){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rubix_bootstrap.components.button.button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$close,true,cljs.core.constant$keyword$on_DASH_click,(function (){
rubix_bootstrap.components.alert.handle_alert_close(hidden);

if(cljs.core.truth_(on_dismiss)){
return (on_dismiss.cljs$core$IFn$_invoke$arity$0 ? on_dismiss.cljs$core$IFn$_invoke$arity$0() : on_dismiss.call(null));
} else {
return null;
}
})], null)], null),cljs.core.constant$keyword$children.cljs$core$IFn$_invoke$arity$1(props)], null);
});
rubix_bootstrap.components.alert.alert = (function rubix_bootstrap$components$alert$alert(props){
var this$ = reagent.core.current_component();
var classes = rubix_bootstrap.components.alert.gen_classes(props);
var dismissible_QMARK_ = cljs.core.constant$keyword$dismissible.cljs$core$IFn$_invoke$arity$1(props);
var _ = ((((this$["hidden"]) == null))?(this$["hidden"] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("")):null);
var hidden = (this$["hidden"]);
var on_dismiss = cljs.core.constant$keyword$onDismiss.cljs$core$IFn$_invoke$arity$1(props);
var collapse_bottom = (cljs.core.truth_(cljs.core.constant$keyword$collapseBottom.cljs$core$IFn$_invoke$arity$1(props))?(0):null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div,cljsjs.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([reagent.core.props(this$),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$role,"alert",cljs.core.constant$keyword$class,cljsjs.util.trim([cljs.core.str(classes),cljs.core.str((function (){var G__14138 = hidden;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14138) : cljs.core.deref.call(null,G__14138));
})()),cljs.core.str(" "),cljs.core.str(cljs.core.constant$keyword$className.cljs$core$IFn$_invoke$arity$1(props))].join('')),cljs.core.constant$keyword$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$margin_DASH_bottom,collapse_bottom], null)], null)], 0)),(cljs.core.truth_(dismissible_QMARK_)?rubix_bootstrap.components.alert.alert_dismissible(props,hidden,on_dismiss):cljs.core.constant$keyword$children.cljs$core$IFn$_invoke$arity$1(props))], null);
});
rubix_bootstrap.components.alert.alert_link = (function rubix_bootstrap$components$alert$alert_link(props){
var this$ = reagent.core.current_component();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$a,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([reagent.core.props(this$),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$href,(function (){var or__4307__auto__ = cljs.core.constant$keyword$href.cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(or__4307__auto__)){
return or__4307__auto__;
} else {
return "#";
}
})(),cljs.core.constant$keyword$class,cljsjs.util.trim([cljs.core.str("alert-link "),cljs.core.str(cljs.core.constant$keyword$className.cljs$core$IFn$_invoke$arity$1(props))].join(''))], null)], 0)),cljs.core.constant$keyword$children.cljs$core$IFn$_invoke$arity$1(props)], null);
});
