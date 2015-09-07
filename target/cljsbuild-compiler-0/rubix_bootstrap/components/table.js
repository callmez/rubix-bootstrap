// Compiled by ClojureScript 0.0-3269 {:static-fns true, :optimize-constants true}
goog.provide('rubix_bootstrap.components.table');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljsjs.util');
rubix_bootstrap.components.table.gen_classes = (function rubix_bootstrap$components$table$gen_classes(props){
var hover_QMARK_ = cljs.core.constant$keyword$hover.cljs$core$IFn$_invoke$arity$1(props);
var striped_QMARK_ = cljs.core.constant$keyword$striped.cljs$core$IFn$_invoke$arity$1(props);
var bordered_QMARK_ = cljs.core.constant$keyword$bordered.cljs$core$IFn$_invoke$arity$1(props);
var collapsed_QMARK_ = cljs.core.constant$keyword$collapsed.cljs$core$IFn$_invoke$arity$1(props);
var condensed_QMARK_ = cljs.core.constant$keyword$condensed.cljs$core$IFn$_invoke$arity$1(props);
var align_top_QMARK_ = cljs.core.constant$keyword$alignTop.cljs$core$IFn$_invoke$arity$1(props);
var align_middle_QMARK_ = cljs.core.constant$keyword$alignMiddle.cljs$core$IFn$_invoke$arity$1(props);
var align_bottom_QMARK_ = cljs.core.constant$keyword$alignBottom.cljs$core$IFn$_invoke$arity$1(props);
return [cljs.core.str("table "),cljs.core.str((cljs.core.truth_(hover_QMARK_)?"table-hover ":null)),cljs.core.str((cljs.core.truth_(striped_QMARK_)?"table-striped ":null)),cljs.core.str((cljs.core.truth_(bordered_QMARK_)?"table-bordered ":null)),cljs.core.str((cljs.core.truth_(collapsed_QMARK_)?"table-collapsed ":null)),cljs.core.str((cljs.core.truth_(condensed_QMARK_)?"table-condensed ":null)),cljs.core.str((cljs.core.truth_(align_top_QMARK_)?"table-top-align ":null)),cljs.core.str((cljs.core.truth_(align_middle_QMARK_)?"table-middle-align ":null)),cljs.core.str((cljs.core.truth_(align_bottom_QMARK_)?"table-bottom-align ":null))].join('');
});
rubix_bootstrap.components.table.table_construct = (function rubix_bootstrap$components$table$table_construct(props,classes){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$table,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([props,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$class,cljsjs.util.trim([cljs.core.str(classes),cljs.core.str(" "),cljs.core.str(cljs.core.constant$keyword$className.cljs$core$IFn$_invoke$arity$1(props))].join(''))], null)], 0)),cljs.core.constant$keyword$children.cljs$core$IFn$_invoke$arity$1(props)], null);
});
rubix_bootstrap.components.table.table = (function rubix_bootstrap$components$table$table(props){
var this$ = reagent.core.current_component();
var classes = rubix_bootstrap.components.table.gen_classes(props);
var responsive_QMARK_ = cljs.core.constant$keyword$responsive.cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(responsive_QMARK_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$table_DASH_responsive,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rubix_bootstrap.components.table.table_construct,props,classes], null)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rubix_bootstrap.components.table.table_construct,props,classes], null);
}
});
