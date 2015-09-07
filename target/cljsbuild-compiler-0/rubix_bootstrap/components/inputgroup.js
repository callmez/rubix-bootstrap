// Compiled by ClojureScript 0.0-3269 {:static-fns true, :optimize-constants true}
goog.provide('rubix_bootstrap.components.inputgroup');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljsjs.util');
rubix_bootstrap.components.inputgroup.gen_classes_ig = (function rubix_bootstrap$components$inputgroup$gen_classes_ig(props){
var sm_QMARK_ = cljs.core.constant$keyword$sm.cljs$core$IFn$_invoke$arity$1(props);
var lg_QMARK_ = cljs.core.constant$keyword$lg.cljs$core$IFn$_invoke$arity$1(props);
return [cljs.core.str("input-group "),cljs.core.str((cljs.core.truth_(sm_QMARK_)?"input-group-sm ":null)),cljs.core.str((cljs.core.truth_(lg_QMARK_)?"input-group-lg ":null))].join('');
});
rubix_bootstrap.components.inputgroup.gen_classes = (function rubix_bootstrap$components$inputgroup$gen_classes(props){
var dropdown_QMARK_ = cljs.core.constant$keyword$dropdown.cljs$core$IFn$_invoke$arity$1(props);
var dropup_QMARK_ = cljs.core.constant$keyword$dropup.cljs$core$IFn$_invoke$arity$1(props);
return [cljs.core.str("input-group-btn "),cljs.core.str((cljs.core.truth_(dropdown_QMARK_)?"dropdown ":null)),cljs.core.str((cljs.core.truth_(dropup_QMARK_)?"dropup ":null))].join('');
});
rubix_bootstrap.components.inputgroup.inputgroup = (function rubix_bootstrap$components$inputgroup$inputgroup(props){
var this$ = reagent.core.current_component();
var classes = rubix_bootstrap.components.inputgroup.gen_classes_ig(props);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([reagent.core.props(this$),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$class,cljsjs.util.trim([cljs.core.str(classes),cljs.core.str(" "),cljs.core.str(cljs.core.constant$keyword$className.cljs$core$IFn$_invoke$arity$1(props))].join(''))], null)], 0)),cljs.core.constant$keyword$children.cljs$core$IFn$_invoke$arity$1(props)], null);
});
rubix_bootstrap.components.inputgroup.inputgroupaddon = (function rubix_bootstrap$components$inputgroup$inputgroupaddon(props){
var this$ = reagent.core.current_component();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([reagent.core.props(this$),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$class,cljsjs.util.trim([cljs.core.str("input-group-addon "),cljs.core.str(cljs.core.constant$keyword$className.cljs$core$IFn$_invoke$arity$1(props))].join(''))], null)], 0)),cljs.core.constant$keyword$children.cljs$core$IFn$_invoke$arity$1(props)], null);
});
rubix_bootstrap.components.inputgroup.inputgroupbutton = (function rubix_bootstrap$components$inputgroup$inputgroupbutton(props){
var this$ = reagent.core.current_component();
var classes = rubix_bootstrap.components.inputgroup.gen_classes(props);
var id = cljsjs.util.get_id(this$,props);
var on_set_select_item = cljs.core.constant$keyword$onSetSelectItem.cljs$core$IFn$_invoke$arity$1(props);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([reagent.core.props(this$),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$class,cljsjs.util.trim([cljs.core.str(classes),cljs.core.str(" "),cljs.core.str(cljs.core.constant$keyword$className.cljs$core$IFn$_invoke$arity$1(props))].join(''))], null)], 0)),cljsjs.util.map_children(((function (this$,classes,id,on_set_select_item){
return (function (i,c){
return React.cloneElement(c,{"dropdown": id, "toggleOnHover": cljs.core.constant$keyword$toggleOnHover.cljs$core$IFn$_invoke$arity$1(props), "onDropdownSetSelectItem": on_set_select_item, "key": i});
});})(this$,classes,id,on_set_select_item))
,cljs.core.constant$keyword$children.cljs$core$IFn$_invoke$arity$1(props))], null);
});
