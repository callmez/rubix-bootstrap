// Compiled by ClojureScript 0.0-3269 {:static-fns true, :optimize-constants true}
goog.provide('rubix_bootstrap.components.buttongroup');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljsjs.util');
rubix_bootstrap.components.buttongroup.gen_classes = (function rubix_bootstrap$components$buttongroup$gen_classes(props){
var is_vertical_QMARK_ = cljs.core.constant$keyword$vertical.cljs$core$IFn$_invoke$arity$1(props);
var btn_group_QMARK_ = cljs.core.not(is_vertical_QMARK_);
var lg_QMARK_ = cljs.core.constant$keyword$lg.cljs$core$IFn$_invoke$arity$1(props);
var sm_QMARK_ = cljs.core.constant$keyword$sm.cljs$core$IFn$_invoke$arity$1(props);
var xs_QMARK_ = cljs.core.constant$keyword$xs.cljs$core$IFn$_invoke$arity$1(props);
var justified_QMARK_ = cljs.core.constant$keyword$justified.cljs$core$IFn$_invoke$arity$1(props);
var dropdown_QMARK_ = cljs.core.constant$keyword$dropdown.cljs$core$IFn$_invoke$arity$1(props);
var dropup_QMARK_ = cljs.core.constant$keyword$dropup.cljs$core$IFn$_invoke$arity$1(props);
return [cljs.core.str(((btn_group_QMARK_)?" btn-group ":null)),cljs.core.str((cljs.core.truth_(is_vertical_QMARK_)?" btn-group-vertical ":null)),cljs.core.str((cljs.core.truth_(lg_QMARK_)?" btn-group-lg ":null)),cljs.core.str((cljs.core.truth_(sm_QMARK_)?" btn-group-sm ":null)),cljs.core.str((cljs.core.truth_(xs_QMARK_)?" btn-group-xs ":null)),cljs.core.str((cljs.core.truth_(justified_QMARK_)?" btn-group-justified ":null)),cljs.core.str((cljs.core.truth_(dropup_QMARK_)?" dropup ":null)),cljs.core.str((cljs.core.truth_(dropdown_QMARK_)?" dropdown ":null))].join('');
});
rubix_bootstrap.components.buttongroup.button_group = (function rubix_bootstrap$components$buttongroup$button_group(props){
var this$ = reagent.core.current_component();
var classes = rubix_bootstrap.components.buttongroup.gen_classes(props);
var id = cljsjs.util.get_id(this$,props);
var on_set_select_item = cljs.core.constant$keyword$onSetSelectItem.cljs$core$IFn$_invoke$arity$1(props);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([reagent.core.props(this$),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$class,cljsjs.util.trim([cljs.core.str(classes),cljs.core.str(" "),cljs.core.str(cljs.core.constant$keyword$className.cljs$core$IFn$_invoke$arity$1(props))].join(''))], null)], 0)),cljsjs.util.map_children(((function (this$,classes,id,on_set_select_item){
return (function (i,c){
return React.cloneElement(c,{"dropdown": id, "toggleOnHover": cljs.core.constant$keyword$toggleOnHover.cljs$core$IFn$_invoke$arity$1(props), "onDropdownSetSelectItem": on_set_select_item, "key": i});
});})(this$,classes,id,on_set_select_item))
,cljs.core.constant$keyword$children.cljs$core$IFn$_invoke$arity$1(props))], null);
});
