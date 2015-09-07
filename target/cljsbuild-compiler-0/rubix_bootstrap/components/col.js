// Compiled by ClojureScript 0.0-3269 {:static-fns true, :optimize-constants true}
goog.provide('rubix_bootstrap.components.col');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljsjs.util');
goog.require('clojure.string');
rubix_bootstrap.components.col.col_class = (function rubix_bootstrap$components$col$col_class(k,v){
return [cljs.core.str("col-"),cljs.core.str(k),cljs.core.str("-"),cljs.core.str(v),cljs.core.str(" ")].join('');
});
rubix_bootstrap.components.col.loop_col_class = (function rubix_bootstrap$components$col$loop_col_class(a,v){
var func = (function (k){
return rubix_bootstrap.components.col.col_class(k,v);
});
var ret = cljs.core.map.cljs$core$IFn$_invoke$arity$2(func,(function (){var G__14051 = a;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14051) : cljs.core.deref.call(null,G__14051));
})());
return [cljs.core.str(clojure.string.join.cljs$core$IFn$_invoke$arity$1(ret)),cljs.core.str(" ")].join('');
});
rubix_bootstrap.components.col.visibility = (function rubix_bootstrap$components$col$visibility(k,v){
var func = (function (v__$1){
return [cljs.core.str(k),cljs.core.str("-"),cljs.core.str(clojure.string.trim(v__$1))].join('');
});
var rep_comma = clojure.string.replace(v,/,/," ");
var rep_whitespace = clojure.string.replace(rep_comma,/\s+/," ");
var trim_whitespace = clojure.string.trim(rep_whitespace);
var split_v = clojure.string.split.cljs$core$IFn$_invoke$arity$2(trim_whitespace,/\s/);
var ret = cljs.core.map.cljs$core$IFn$_invoke$arity$2(func,split_v);
return [cljs.core.str(clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",ret)),cljs.core.str(" ")].join('');
});
rubix_bootstrap.components.col.hyphenate = (function rubix_bootstrap$components$col$hyphenate(s){
var regexp = (new RegExp("([a-z])([A-Z])","g"));
var s__$1 = s.replace(regexp,"$1-$2");
return s__$1.toLowerCase();
});
rubix_bootstrap.components.col.hyphenate_col_class = (function rubix_bootstrap$components$col$hyphenate_col_class(k){
return [cljs.core.str("col-"),cljs.core.str(rubix_bootstrap.components.col.hyphenate(k)),cljs.core.str(" ")].join('');
});
rubix_bootstrap.components.col.hyphenate_col_class_with_value = (function rubix_bootstrap$components$col$hyphenate_col_class_with_value(k,v){
return [cljs.core.str(clojure.string.trim(rubix_bootstrap.components.col.hyphenate_col_class(k))),cljs.core.str("-"),cljs.core.str(v),cljs.core.str(" ")].join('');
});
rubix_bootstrap.components.col.remaining_props = (function rubix_bootstrap$components$col$remaining_props(props){
var ret = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__14054){
var vec__14055 = p__14054;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14055,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14055,(1),null);
var k__$1 = cljs.core.name(k);
var is_gutter_QMARK_ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(k__$1.search("Gutter"),(-1));
var is_collapse_QMARK_ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(k__$1.search("Collapse"),(-1));
var is_offset_QMARK_ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(k__$1.search("Offset"),(-1));
var is_push_QMARK_ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(k__$1.search("Push"),(-1));
var is_pull_QMARK_ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(k__$1.search("Pull"),(-1));
if((is_gutter_QMARK_) || (is_collapse_QMARK_)){
return rubix_bootstrap.components.col.hyphenate_col_class(k__$1);
} else {
if((is_offset_QMARK_) || (is_push_QMARK_) || (is_pull_QMARK_)){
return rubix_bootstrap.components.col.hyphenate_col_class_with_value(k__$1,v);
} else {
return null;
}
}
}),props);
return [cljs.core.str(clojure.string.join.cljs$core$IFn$_invoke$arity$1(ret)),cljs.core.str(" ")].join('');
});
rubix_bootstrap.components.col.gen_classes = (function rubix_bootstrap$components$col$gen_classes(props){
var xs_QMARK_ = cljs.core.constant$keyword$xs.cljs$core$IFn$_invoke$arity$1(props);
var sm_QMARK_ = cljs.core.constant$keyword$sm.cljs$core$IFn$_invoke$arity$1(props);
var md_QMARK_ = cljs.core.constant$keyword$md.cljs$core$IFn$_invoke$arity$1(props);
var lg_QMARK_ = cljs.core.constant$keyword$lg.cljs$core$IFn$_invoke$arity$1(props);
var sizes = (function (){var G__14057 = cljs.core.PersistentHashSet.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14057) : cljs.core.atom.call(null,G__14057));
})();
var clearfix_QMARK_ = cljs.core.constant$keyword$clearfix.cljs$core$IFn$_invoke$arity$1(props);
var collapse_top_QMARK_ = cljs.core.constant$keyword$collapseTop.cljs$core$IFn$_invoke$arity$1(props);
var collapse_left_QMARK_ = cljs.core.constant$keyword$collapseLeft.cljs$core$IFn$_invoke$arity$1(props);
var collapse_right_QMARK_ = cljs.core.constant$keyword$collapseRight.cljs$core$IFn$_invoke$arity$1(props);
var collapse_bottom_QMARK_ = cljs.core.constant$keyword$collapseBottom.cljs$core$IFn$_invoke$arity$1(props);
var gutter_top_QMARK_ = cljs.core.constant$keyword$gutterTop.cljs$core$IFn$_invoke$arity$1(props);
var gutter_left_QMARK_ = cljs.core.constant$keyword$gutterLeft.cljs$core$IFn$_invoke$arity$1(props);
var gutter_right_QMARK_ = cljs.core.constant$keyword$gutterRight.cljs$core$IFn$_invoke$arity$1(props);
var gutter_bottom_QMARK_ = cljs.core.constant$keyword$gutterBottom.cljs$core$IFn$_invoke$arity$1(props);
var hidden_QMARK_ = cljs.core.constant$keyword$hidden.cljs$core$IFn$_invoke$arity$1(props);
var visible_QMARK_ = cljs.core.constant$keyword$visible.cljs$core$IFn$_invoke$arity$1(props);
return [cljs.core.str((cljs.core.truth_(xs_QMARK_)?(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(sizes,cljs.core.conj,"xs");

return rubix_bootstrap.components.col.col_class("xs",xs_QMARK_);
})()
:null)),cljs.core.str((cljs.core.truth_(sm_QMARK_)?(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(sizes,cljs.core.conj,"sm");

return rubix_bootstrap.components.col.col_class("sm",sm_QMARK_);
})()
:null)),cljs.core.str((cljs.core.truth_(md_QMARK_)?(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(sizes,cljs.core.conj,"md");

return rubix_bootstrap.components.col.col_class("md",md_QMARK_);
})()
:null)),cljs.core.str((cljs.core.truth_(lg_QMARK_)?(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(sizes,cljs.core.conj,"lg");

return rubix_bootstrap.components.col.col_class("lg",lg_QMARK_);
})()
:null)),cljs.core.str((cljs.core.truth_(clearfix_QMARK_)?"clearfix ":null)),cljs.core.str((cljs.core.truth_(collapse_top_QMARK_)?rubix_bootstrap.components.col.loop_col_class(sizes,"collapse-top"):null)),cljs.core.str((cljs.core.truth_(collapse_left_QMARK_)?rubix_bootstrap.components.col.loop_col_class(sizes,"collapse-left"):null)),cljs.core.str((cljs.core.truth_(collapse_right_QMARK_)?rubix_bootstrap.components.col.loop_col_class(sizes,"collapse-right"):null)),cljs.core.str((cljs.core.truth_(collapse_bottom_QMARK_)?rubix_bootstrap.components.col.loop_col_class(sizes,"collapse-bottom"):null)),cljs.core.str((cljs.core.truth_(gutter_top_QMARK_)?rubix_bootstrap.components.col.loop_col_class(sizes,"gutter-top"):null)),cljs.core.str((cljs.core.truth_(gutter_left_QMARK_)?rubix_bootstrap.components.col.loop_col_class(sizes,"gutter-left"):null)),cljs.core.str((cljs.core.truth_(gutter_right_QMARK_)?rubix_bootstrap.components.col.loop_col_class(sizes,"gutter-right"):null)),cljs.core.str((cljs.core.truth_(gutter_bottom_QMARK_)?rubix_bootstrap.components.col.loop_col_class(sizes,"gutter-bottom"):null)),cljs.core.str((cljs.core.truth_(hidden_QMARK_)?rubix_bootstrap.components.col.visibility("hidden",hidden_QMARK_):null)),cljs.core.str((cljs.core.truth_(visible_QMARK_)?rubix_bootstrap.components.col.visibility("visible",visible_QMARK_):null)),cljs.core.str(rubix_bootstrap.components.col.remaining_props(props))].join('');
});
rubix_bootstrap.components.col.col = (function rubix_bootstrap$components$col$col(props){
cljsjs.util.debug.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["col"], 0));

var this$ = reagent.core.current_component();
var classes = rubix_bootstrap.components.col.gen_classes(props);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div,cljsjs.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([reagent.core.props(this$),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$hidden,null,cljs.core.constant$keyword$class,cljsjs.util.trim([cljs.core.str(classes),cljs.core.str(" "),cljs.core.str(cljs.core.constant$keyword$className.cljs$core$IFn$_invoke$arity$1(props))].join(''))], null)], 0)),cljs.core.constant$keyword$children.cljs$core$IFn$_invoke$arity$1(props)], null);
});
