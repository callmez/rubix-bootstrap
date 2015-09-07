// Compiled by ClojureScript 0.0-3269 {:static-fns true, :optimize-constants true}
goog.provide('rubix_bootstrap.components.labelsandbadges');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljsjs.util');
goog.require('clojure.string');
rubix_bootstrap.components.labelsandbadges.gen_classes = (function rubix_bootstrap$components$labelsandbadges$gen_classes(type,props){
var bs_style = (function (){var or__4307__auto__ = cljs.core.constant$keyword$bsStyle.cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(or__4307__auto__)){
return or__4307__auto__;
} else {
return "default";
}
})();
var styles = bs_style.split(",");
var func = ((function (bs_style,styles){
return (function (st){
return [cljs.core.str(type),cljs.core.str("-"),cljs.core.str(clojure.string.trim(st))].join('');
});})(bs_style,styles))
;
var ret = cljs.core.map.cljs$core$IFn$_invoke$arity$2(func,styles);
return [cljs.core.str(type),cljs.core.str(" "),cljs.core.str(clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",ret)),cljs.core.str(" ")].join('');
});
rubix_bootstrap.components.labelsandbadges.b_mixin = (function rubix_bootstrap$components$labelsandbadges$b_mixin(type,props){
var this$ = reagent.core.current_component();
var classes = rubix_bootstrap.components.labelsandbadges.gen_classes(type,props);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$span,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([reagent.core.props(this$),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$class,cljsjs.util.trim([cljs.core.str(classes),cljs.core.str(" "),cljs.core.str(cljs.core.constant$keyword$className.cljs$core$IFn$_invoke$arity$1(props))].join(''))], null)], 0)),cljs.core.constant$keyword$children.cljs$core$IFn$_invoke$arity$1(props)], null);
});
rubix_bootstrap.components.labelsandbadges.badge = (function rubix_bootstrap$components$labelsandbadges$badge(props){
return rubix_bootstrap.components.labelsandbadges.b_mixin("badge",props);
});
rubix_bootstrap.components.labelsandbadges.label = (function rubix_bootstrap$components$labelsandbadges$label(props){
return rubix_bootstrap.components.labelsandbadges.b_mixin("label",props);
});
