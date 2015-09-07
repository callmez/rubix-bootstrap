// Compiled by ClojureScript 0.0-3269 {:static-fns true, :optimize-constants true}
goog.provide('rubix_bootstrap.components.tag');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljsjs.util');
rubix_bootstrap.components.tag.tag = (function rubix_bootstrap$components$tag$tag(props){
var this$ = reagent.core.current_component();
var href = (function (){var or__4307__auto__ = cljs.core.constant$keyword$href.cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(or__4307__auto__)){
return or__4307__auto__;
} else {
return "#";
}
})();
var color = (function (){var or__4307__auto__ = cljs.core.constant$keyword$color.cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(or__4307__auto__)){
return or__4307__auto__;
} else {
return "darkgreen45";
}
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$a,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([reagent.core.props(this$),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$href,href,cljs.core.constant$keyword$color,color,cljs.core.constant$keyword$class,cljsjs.util.trim([cljs.core.str("left-tag "),cljs.core.str("border-hover-"),cljs.core.str(color),cljs.core.str(" "),cljs.core.str("bg-hover-"),cljs.core.str(color),cljs.core.str(" "),cljs.core.str("fg-hover-white bg-lightgray50 "),cljs.core.str("border-lightgray50 fg-text "),cljs.core.str(cljs.core.constant$keyword$className.cljs$core$IFn$_invoke$arity$1(props))].join(''))], null)], 0)),cljs.core.constant$keyword$children.cljs$core$IFn$_invoke$arity$1(props)], null);
});
