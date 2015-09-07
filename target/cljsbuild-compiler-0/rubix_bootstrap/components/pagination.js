// Compiled by ClojureScript 0.0-3269 {:static-fns true, :optimize-constants true}
goog.provide('rubix_bootstrap.components.pagination');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljsjs.util');
rubix_bootstrap.components.pagination.gen_classes_page = (function rubix_bootstrap$components$pagination$gen_classes_page(props){
var next_QMARK_ = cljs.core.constant$keyword$next.cljs$core$IFn$_invoke$arity$1(props);
var active_QMARK_ = cljs.core.constant$keyword$active.cljs$core$IFn$_invoke$arity$1(props);
var disabled_QMARK_ = cljs.core.constant$keyword$disabled.cljs$core$IFn$_invoke$arity$1(props);
var previous_QMARK_ = cljs.core.constant$keyword$previous.cljs$core$IFn$_invoke$arity$1(props);
return [cljs.core.str((cljs.core.truth_(next_QMARK_)?"next ":null)),cljs.core.str((cljs.core.truth_(active_QMARK_)?"active ":null)),cljs.core.str((cljs.core.truth_(disabled_QMARK_)?"disabled ":null)),cljs.core.str((cljs.core.truth_(previous_QMARK_)?"previous ":null))].join('');
});
rubix_bootstrap.components.pagination.render_page_el = (function rubix_bootstrap$components$pagination$render_page_el(props){
var begin_QMARK_ = cljs.core.constant$keyword$begin.cljs$core$IFn$_invoke$arity$1(props);
var end_QMARK_ = cljs.core.constant$keyword$end.cljs$core$IFn$_invoke$arity$1(props);
var next_QMARK_ = cljs.core.constant$keyword$next.cljs$core$IFn$_invoke$arity$1(props);
var previous_QMARK_ = cljs.core.constant$keyword$previous.cljs$core$IFn$_invoke$arity$1(props);
var active_QMARK_ = cljs.core.constant$keyword$active.cljs$core$IFn$_invoke$arity$1(props);
var rchildren = cljs.core.constant$keyword$children.cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(begin_QMARK_)){
return "\u00AB";
} else {
if(cljs.core.truth_(end_QMARK_)){
return "\u00BB";
} else {
if(cljs.core.truth_(next_QMARK_)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$span,rchildren," \u2192"], null);
} else {
if(cljs.core.truth_(previous_QMARK_)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$span,"\u2190 ",rchildren], null);
} else {
if(cljs.core.truth_(active_QMARK_)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$span,rchildren,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$span$sr_DASH_only,"(current)"], null)], null);
} else {
return rchildren;
}
}
}
}
}
});
rubix_bootstrap.components.pagination.page = (function rubix_bootstrap$components$pagination$page(props){
var this$ = reagent.core.current_component();
var classes = rubix_bootstrap.components.pagination.gen_classes_page(props);
var child = rubix_bootstrap.components.pagination.render_page_el(props);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$li,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([reagent.core.props(this$),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$href,null,cljs.core.constant$keyword$class,cljsjs.util.trim([cljs.core.str(classes),cljs.core.str(" "),cljs.core.str(cljs.core.constant$keyword$className.cljs$core$IFn$_invoke$arity$1(props))].join(''))], null)], 0)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$href,(function (){var or__4307__auto__ = cljs.core.constant$keyword$href.cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(or__4307__auto__)){
return or__4307__auto__;
} else {
return "#";
}
})()], null),child], null)], null);
});
rubix_bootstrap.components.pagination.gen_classes_pagination = (function rubix_bootstrap$components$pagination$gen_classes_pagination(props){
var sm_QMARK_ = cljs.core.constant$keyword$sm.cljs$core$IFn$_invoke$arity$1(props);
var lg_QMARK_ = cljs.core.constant$keyword$lg.cljs$core$IFn$_invoke$arity$1(props);
return [cljs.core.str("pagination "),cljs.core.str((cljs.core.truth_(sm_QMARK_)?"pagination-sm ":null)),cljs.core.str((cljs.core.truth_(lg_QMARK_)?"pagination-lg ":null))].join('');
});
rubix_bootstrap.components.pagination.pagination = (function rubix_bootstrap$components$pagination$pagination(props){
var this$ = reagent.core.current_component();
var classes = rubix_bootstrap.components.pagination.gen_classes_pagination(props);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$ul,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([reagent.core.props(this$),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$class,cljsjs.util.trim([cljs.core.str(classes),cljs.core.str(" "),cljs.core.str(cljs.core.constant$keyword$className.cljs$core$IFn$_invoke$arity$1(props))].join(''))], null)], 0)),cljs.core.constant$keyword$children.cljs$core$IFn$_invoke$arity$1(props)], null);
});
rubix_bootstrap.components.pagination.pager = (function rubix_bootstrap$components$pagination$pager(props){
var this$ = reagent.core.current_component();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$ul,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([reagent.core.props(this$),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$class,cljsjs.util.trim([cljs.core.str("pager "),cljs.core.str(cljs.core.constant$keyword$className.cljs$core$IFn$_invoke$arity$1(props))].join(''))], null)], 0)),cljs.core.constant$keyword$children.cljs$core$IFn$_invoke$arity$1(props)], null);
});
