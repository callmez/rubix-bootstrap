// Compiled by ClojureScript 0.0-3269 {:static-fns true, :optimize-constants true}
goog.provide('rubix_bootstrap.components.checkboxradio');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljsjs.util');
goog.require('rubix_bootstrap.components.label');
goog.require('rubix_bootstrap.components.input');
rubix_bootstrap.components.checkboxradio.gen_classes = (function rubix_bootstrap$components$checkboxradio$gen_classes(t,props){
var disabled_QMARK_ = cljs.core.constant$keyword$disabled.cljs$core$IFn$_invoke$arity$1(props);
return [cljs.core.str(t),cljs.core.str(" "),cljs.core.str((cljs.core.truth_(disabled_QMARK_)?"disabled":null))].join('');
});
rubix_bootstrap.components.checkboxradio.checkboxradio = (function rubix_bootstrap$components$checkboxradio$checkboxradio(t,props){
var this$ = reagent.core.current_component();
var classes = rubix_bootstrap.components.checkboxradio.gen_classes(t,props);
var native_QMARK_ = cljs.core.constant$keyword$native.cljs$core$IFn$_invoke$arity$1(props);
var inline_QMARK_ = cljs.core.constant$keyword$inline.cljs$core$IFn$_invoke$arity$1(props);
var input_props = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([props,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$type,t,cljs.core.constant$keyword$children,null], null)], 0));
var i = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rubix_bootstrap.components.input.input,input_props], null);
var combined = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div,i,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$span,cljs.core.constant$keyword$children.cljs$core$IFn$_invoke$arity$1(props)], null)], null);
var label_props = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$className,cljsjs.util.trim([cljs.core.str(t),cljs.core.str("-inline "),cljs.core.str(cljs.core.constant$keyword$className.cljs$core$IFn$_invoke$arity$1(props))].join('')),cljs.core.constant$keyword$inline,null,cljs.core.constant$keyword$children,combined], null);
var l = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rubix_bootstrap.components.label.label,label_props], null);
var r = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$class,cljsjs.util.trim(classes)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rubix_bootstrap.components.label.label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$children,combined], null)], null)], null);
if(cljs.core.truth_(native_QMARK_)){
return i;
} else {
if(cljs.core.truth_(inline_QMARK_)){
return l;
} else {
return r;
}
}
});
rubix_bootstrap.components.checkboxradio.checkbox = (function rubix_bootstrap$components$checkboxradio$checkbox(props){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rubix_bootstrap.components.checkboxradio.checkboxradio,"checkbox",props], null);
});
rubix_bootstrap.components.checkboxradio.radio = (function rubix_bootstrap$components$checkboxradio$radio(props){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rubix_bootstrap.components.checkboxradio.checkboxradio,"radio",props], null);
});
