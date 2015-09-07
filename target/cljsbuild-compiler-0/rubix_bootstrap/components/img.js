// Compiled by ClojureScript 0.0-3269 {:static-fns true, :optimize-constants true}
goog.provide('rubix_bootstrap.components.img');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljsjs.util');
rubix_bootstrap.components.img.gen_classes = (function rubix_bootstrap$components$img$gen_classes(props){
var circle_QMARK_ = cljs.core.constant$keyword$circle.cljs$core$IFn$_invoke$arity$1(props);
var rounded_QMARK_ = cljs.core.constant$keyword$rounded.cljs$core$IFn$_invoke$arity$1(props);
var thumbnail_QMARK_ = cljs.core.constant$keyword$thumbnail.cljs$core$IFn$_invoke$arity$1(props);
var responsive_QMARK_ = cljs.core.constant$keyword$responsive.cljs$core$IFn$_invoke$arity$1(props);
return [cljs.core.str((cljs.core.truth_(circle_QMARK_)?"img-circle ":null)),cljs.core.str((cljs.core.truth_(rounded_QMARK_)?"img-rounded ":null)),cljs.core.str((cljs.core.truth_(thumbnail_QMARK_)?"img-thumbnail ":null)),cljs.core.str((cljs.core.truth_(responsive_QMARK_)?"img-responsive ":null))].join('');
});
rubix_bootstrap.components.img.img = (function rubix_bootstrap$components$img$img(props){
var this$ = reagent.core.current_component();
var classes = rubix_bootstrap.components.img.gen_classes(props);
var empty_src_QMARK_ = cljs.core.empty_QMARK_(cljs.core.constant$keyword$src.cljs$core$IFn$_invoke$arity$1(props));
var src = ((empty_src_QMARK_)?"/imgs/blank.gif":cljs.core.constant$keyword$src.cljs$core$IFn$_invoke$arity$1(props));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$img,cljsjs.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([reagent.core.props(this$),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$src,src,cljs.core.constant$keyword$class,cljsjs.util.trim([cljs.core.str(classes),cljs.core.str(" "),cljs.core.str(cljs.core.constant$keyword$className.cljs$core$IFn$_invoke$arity$1(props))].join('')),cljs.core.constant$keyword$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$style.cljs$core$IFn$_invoke$arity$1(props)),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$background_DASH_color,((empty_src_QMARK_)?"#EEEEEE":null)], null)], 0))], null)], 0))], null);
});
