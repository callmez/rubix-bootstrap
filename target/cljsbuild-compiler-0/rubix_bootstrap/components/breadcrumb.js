// Compiled by ClojureScript 0.0-3269 {:static-fns true, :optimize-constants true}
goog.provide('rubix_bootstrap.components.breadcrumb');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljsjs.util');
rubix_bootstrap.components.breadcrumb.b_link_li = (function rubix_bootstrap$components$breadcrumb$b_link_li(props,classes,child){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$li,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([props,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$href,null,cljs.core.constant$keyword$class,cljsjs.util.trim(classes)], null)], 0)),child], null);
});
rubix_bootstrap.components.breadcrumb.b_link = (function rubix_bootstrap$components$breadcrumb$b_link(props){
var this$ = reagent.core.current_component();
var active = (cljs.core.truth_(cljs.core.constant$keyword$active.cljs$core$IFn$_invoke$arity$1(props))?"active":"");
var active_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active,"active");
var classes = [cljs.core.str(active),cljs.core.str(" "),cljs.core.str(cljs.core.constant$keyword$className.cljs$core$IFn$_invoke$arity$1(props))].join('');
if(active_QMARK_){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [rubix_bootstrap.components.breadcrumb.b_link_li,reagent.core.props(this$),classes,cljs.core.constant$keyword$children.cljs$core$IFn$_invoke$arity$1(props)], null);
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [rubix_bootstrap.components.breadcrumb.b_link_li,reagent.core.props(this$),classes,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$href,(function (){var or__4307__auto__ = cljs.core.constant$keyword$href.cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(or__4307__auto__)){
return or__4307__auto__;
} else {
return "#";
}
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$span,cljs.core.constant$keyword$children.cljs$core$IFn$_invoke$arity$1(props)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$span," "], null)], null)], null);
}
});
rubix_bootstrap.components.breadcrumb.breadcrumb = (function rubix_bootstrap$components$breadcrumb$breadcrumb(props){
var this$ = reagent.core.current_component();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$ol,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([reagent.core.props(this$),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$class,cljsjs.util.trim([cljs.core.str("breadcrumb "),cljs.core.str(cljs.core.constant$keyword$className.cljs$core$IFn$_invoke$arity$1(props))].join(''))], null)], 0)),cljs.core.constant$keyword$children.cljs$core$IFn$_invoke$arity$1(props)], null);
});
