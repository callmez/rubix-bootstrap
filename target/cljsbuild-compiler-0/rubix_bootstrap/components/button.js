// Compiled by ClojureScript 0.0-3269 {:static-fns true, :optimize-constants true}
goog.provide('rubix_bootstrap.components.button');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljsjs.util');
goog.require('rubix_bootstrap.components.common.buttonclasses');
rubix_bootstrap.components.button.close_component = (function rubix_bootstrap$components$button$close_component(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$span,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$aria_DASH_hidden,true], null),(function (){var G__14064 = (215);
return String.fromCharCode(G__14064);
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$class,"sr-only"], null),"Close"], null)], null);
});
rubix_bootstrap.components.button.button = (function rubix_bootstrap$components$button$button(props){
var this$ = reagent.core.current_component();
var react_component = cljs.core.constant$keyword$componentClass.cljs$core$IFn$_invoke$arity$1(props);
var componentClass = (function (){var or__4307__auto__ = ((!((react_component == null)))?reagent.core.adapt_react_class(react_component):null);
if(cljs.core.truth_(or__4307__auto__)){
return or__4307__auto__;
} else {
return cljs.core.constant$keyword$button;
}
})();
var type = (function (){var or__4307__auto__ = cljs.core.constant$keyword$type.cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(or__4307__auto__)){
return or__4307__auto__;
} else {
return "button";
}
})();
var close_QMARK_ = cljs.core.constant$keyword$close.cljs$core$IFn$_invoke$arity$1(props);
var classes = (cljs.core.truth_(close_QMARK_)?"close":rubix_bootstrap.components.common.buttonclasses.gen_classes(props));
var rchildren = (cljs.core.truth_(close_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rubix_bootstrap.components.button.close_component], null):cljs.core.constant$keyword$children.cljs$core$IFn$_invoke$arity$1(props));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [componentClass,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([reagent.core.props(this$),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$role,"button",cljs.core.constant$keyword$type,type,cljs.core.constant$keyword$class,cljsjs.util.trim([cljs.core.str(classes),cljs.core.str(" "),cljs.core.str(cljs.core.constant$keyword$className.cljs$core$IFn$_invoke$arity$1(props))].join(''))], null)], 0)),rchildren], null);
});
