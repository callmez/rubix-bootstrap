// Compiled by ClojureScript 0.0-3269 {:static-fns true, :optimize-constants true}
goog.provide('rubix_bootstrap.components.tab');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.classes');
goog.require('rubix_bootstrap.components.menu');
goog.require('reagent.core');
goog.require('rubix_bootstrap.components.caret');
goog.require('cljsjs.util');
goog.require('clojure.string');
if(typeof rubix_bootstrap.components.tab.tab_containers !== 'undefined'){
} else {
rubix_bootstrap.components.tab.tab_containers = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof rubix_bootstrap.components.tab.tab_panes !== 'undefined'){
} else {
rubix_bootstrap.components.tab.tab_panes = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof rubix_bootstrap.components.tab.tabs !== 'undefined'){
} else {
rubix_bootstrap.components.tab.tabs = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
rubix_bootstrap.components.tab.create_tab_container_cursor = (function rubix_bootstrap$components$tab$create_tab_container_cursor(id){
var c = reagent.core.cursor(rubix_bootstrap.components.tab.tab_containers,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null));
if(((function (){var G__14295 = c;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14295) : cljs.core.deref.call(null,G__14295));
})() == null)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(rubix_bootstrap.components.tab.tab_containers,cljs.core.assoc,id,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$tab_DASH_list,cljs.core.PersistentVector.EMPTY,cljs.core.constant$keyword$tab_DASH_pane,cljs.core.PersistentVector.EMPTY], null));
} else {
}

return c;
});
rubix_bootstrap.components.tab.gen_classes_t = (function rubix_bootstrap$components$tab$gen_classes_t(props){
var dropdown_QMARK_ = cljs.core.constant$keyword$dropdown.cljs$core$IFn$_invoke$arity$1(props);
var disabled_QMARK_ = cljs.core.constant$keyword$disabled.cljs$core$IFn$_invoke$arity$1(props);
return [cljs.core.str("b-tab "),cljs.core.str((cljs.core.truth_(dropdown_QMARK_)?"dropdown ":null)),cljs.core.str((cljs.core.truth_(disabled_QMARK_)?"disabled ":null))].join('');
});
rubix_bootstrap.components.tab.deactivate_all_tabs = (function rubix_bootstrap$components$tab$deactivate_all_tabs(tab_container_id){
var tab_container_cursor = reagent.core.cursor(rubix_bootstrap.components.tab.tab_containers,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tab_container_id], null));
var tab_list_cursor = reagent.core.cursor(tab_container_cursor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$tab_DASH_list], null));
var tab_pane_cursor = reagent.core.cursor(tab_container_cursor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$tab_DASH_pane], null));
cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (tab_container_cursor,tab_list_cursor,tab_pane_cursor){
return (function (id){
var tpc = reagent.core.cursor(rubix_bootstrap.components.tab.tab_panes,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null));
var G__14302 = tpc;
var G__14303 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$active,false], null);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__14302,G__14303) : cljs.core.reset_BANG_.call(null,G__14302,G__14303));
});})(tab_container_cursor,tab_list_cursor,tab_pane_cursor))
,(function (){var G__14304 = tab_pane_cursor;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14304) : cljs.core.deref.call(null,G__14304));
})()));

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (tab_container_cursor,tab_list_cursor,tab_pane_cursor){
return (function (id){
var tbc = reagent.core.cursor(rubix_bootstrap.components.tab.tabs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null));
var G__14305 = tbc;
var G__14306 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$active,false], null);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__14305,G__14306) : cljs.core.reset_BANG_.call(null,G__14305,G__14306));
});})(tab_container_cursor,tab_list_cursor,tab_pane_cursor))
,(function (){var G__14307 = tab_list_cursor;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14307) : cljs.core.deref.call(null,G__14307));
})()));
});
rubix_bootstrap.components.tab.activate_tab = (function rubix_bootstrap$components$tab$activate_tab(id,tab_container_id){
var tab_container_cursor = reagent.core.cursor(rubix_bootstrap.components.tab.tab_containers,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tab_container_id], null));
var tab_list_cursor = reagent.core.cursor(tab_container_cursor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$tab_DASH_list], null));
var tab_pane_cursor = reagent.core.cursor(tab_container_cursor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$tab_DASH_pane], null));
var idx = cljsjs.util.indexOf(cljs.core.vec((function (){var G__14313 = tab_list_cursor;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14313) : cljs.core.deref.call(null,G__14313));
})()),id);
var tab_pane_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__14314 = tab_pane_cursor;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14314) : cljs.core.deref.call(null,G__14314));
})(),idx);
var tpc = reagent.core.cursor(rubix_bootstrap.components.tab.tab_panes,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tab_pane_id], null));
var active_QMARK_ = cljs.core.constant$keyword$active.cljs$core$IFn$_invoke$arity$1((function (){var G__14315 = tpc;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14315) : cljs.core.deref.call(null,G__14315));
})());
if(cljs.core.not(active_QMARK_)){
var G__14316 = tpc;
var G__14317 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$active,true], null);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__14316,G__14317) : cljs.core.reset_BANG_.call(null,G__14316,G__14317));
} else {
return null;
}
});
rubix_bootstrap.components.tab.tab_click = (function rubix_bootstrap$components$tab$tab_click(e,id,tab_container_id){
if(cljs.core.truth_(e)){
e.preventDefault();
} else {
}

var tbc = reagent.core.cursor(rubix_bootstrap.components.tab.tabs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null));
rubix_bootstrap.components.tab.deactivate_all_tabs(tab_container_id);

rubix_bootstrap.components.tab.activate_tab(id,tab_container_id);

var G__14320 = tbc;
var G__14321 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$active,true], null);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__14320,G__14321) : cljs.core.reset_BANG_.call(null,G__14320,G__14321));
});
rubix_bootstrap.components.tab.tab_class = (function rubix_bootstrap$components$tab$tab_class(props){
var this$ = reagent.core.current_component();
var id = cljsjs.util.get_id(this$,props);
var active_QMARK_ = cljs.core.constant$keyword$active.cljs$core$IFn$_invoke$arity$1(props);
var dropdown_QMARK_ = cljs.core.constant$keyword$dropdown.cljs$core$IFn$_invoke$arity$1(props);
var classes = rubix_bootstrap.components.tab.gen_classes_t(props);
var tab_container_id = cljs.core.constant$keyword$tab_DASH_container_DASH_id.cljs$core$IFn$_invoke$arity$1(props);
var tab_container_cursor = reagent.core.cursor(rubix_bootstrap.components.tab.tab_containers,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tab_container_id], null));
var tab_list_cursor = reagent.core.cursor(tab_container_cursor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$tab_DASH_list], null));
var idx = cljsjs.util.indexOf(cljs.core.vec((function (){var G__14327 = tab_list_cursor;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14327) : cljs.core.deref.call(null,G__14327));
})()),id);
var _ = (((idx == null))?cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tab_list_cursor,cljs.core.conj,id):null);
var tbc = reagent.core.cursor(rubix_bootstrap.components.tab.tabs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null));
var ___$1 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(tbc,cljs.core.assoc,cljs.core.constant$keyword$active,((!((cljs.core.constant$keyword$active.cljs$core$IFn$_invoke$arity$1((function (){var G__14328 = tbc;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14328) : cljs.core.deref.call(null,G__14328));
})()) == null)))?cljs.core.constant$keyword$active.cljs$core$IFn$_invoke$arity$1((function (){var G__14329 = tbc;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14329) : cljs.core.deref.call(null,G__14329));
})()):active_QMARK_));
var on_tab_select = cljs.core.constant$keyword$on_DASH_tab_DASH_select.cljs$core$IFn$_invoke$arity$1(props);
var tab_click_event = ((function (this$,id,active_QMARK_,dropdown_QMARK_,classes,tab_container_id,tab_container_cursor,tab_list_cursor,idx,_,tbc,___$1,on_tab_select){
return (function (e){
rubix_bootstrap.components.tab.tab_click(e,id,tab_container_id);

var G__14330 = cljs.core.clj__GT_js(props);
return (on_tab_select.cljs$core$IFn$_invoke$arity$1 ? on_tab_select.cljs$core$IFn$_invoke$arity$1(G__14330) : on_tab_select.call(null,G__14330));
});})(this$,id,active_QMARK_,dropdown_QMARK_,classes,tab_container_id,tab_container_cursor,tab_list_cursor,idx,_,tbc,___$1,on_tab_select))
;
if(cljs.core.truth_(dropdown_QMARK_)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([reagent.core.props(this$),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$class,cljsjs.util.trim([cljs.core.str("div-b-tab "),cljs.core.str(cljs.core.constant$keyword$className.cljs$core$IFn$_invoke$arity$1(props))].join('')),cljs.core.constant$keyword$on_DASH_click,tab_click_event,cljs.core.constant$keyword$on_DASH_touch_DASH_end,tab_click_event], null)], 0)),cljs.core.constant$keyword$children.cljs$core$IFn$_invoke$arity$1(props)], null);
} else {
var active_QMARK___$1 = cljs.core.constant$keyword$active.cljs$core$IFn$_invoke$arity$1((function (){var G__14331 = tbc;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14331) : cljs.core.deref.call(null,G__14331));
})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$li,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([reagent.core.props(this$),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$class,cljsjs.util.trim([cljs.core.str(classes),cljs.core.str((cljs.core.truth_(active_QMARK___$1)?"active ":null)),cljs.core.str(" "),cljs.core.str(cljs.core.constant$keyword$className.cljs$core$IFn$_invoke$arity$1(props))].join('')),cljs.core.constant$keyword$active,null], null)], 0)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$a,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$href,"#",cljs.core.constant$keyword$role,"tab",cljs.core.constant$keyword$data_DASH_toggle,"tab",cljs.core.constant$keyword$on_DASH_click,tab_click_event,cljs.core.constant$keyword$on_DASH_touch_DASH_end,tab_click_event], null),cljs.core.constant$keyword$children.cljs$core$IFn$_invoke$arity$1(props)], null)], null);
}
});
rubix_bootstrap.components.tab.tab = cljs.core.with_meta(rubix_bootstrap.components.tab.tab_class,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$component_DASH_did_DASH_mount,(function (this$){
var props = reagent.core.props(this$);
var id = cljsjs.util.get_id(this$,props);
var tbc = reagent.core.cursor(rubix_bootstrap.components.tab.tabs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null));
var tab_container_id = cljs.core.constant$keyword$tab_DASH_container_DASH_id.cljs$core$IFn$_invoke$arity$1(props);
var active_QMARK_ = cljs.core.constant$keyword$active.cljs$core$IFn$_invoke$arity$1((function (){var G__14332 = tbc;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14332) : cljs.core.deref.call(null,G__14332));
})());
var _ = (cljs.core.truth_(active_QMARK_)?rubix_bootstrap.components.tab.activate_tab(id,tab_container_id):null);
return null;
})], null));
rubix_bootstrap.components.tab.tab_dropdown = (function rubix_bootstrap$components$tab$tab_dropdown(props){
var this$ = reagent.core.current_component();
var id = cljsjs.util.get_id(this$,props);
var title = cljs.core.constant$keyword$title.cljs$core$IFn$_invoke$arity$1(props);
var no_caret_QMARK_ = cljs.core.constant$keyword$noCaret.cljs$core$IFn$_invoke$arity$1(props);
var tab_container_id = cljs.core.constant$keyword$tab_DASH_container_DASH_id.cljs$core$IFn$_invoke$arity$1(props);
var on_tab_select = cljs.core.constant$keyword$on_DASH_tab_DASH_select.cljs$core$IFn$_invoke$arity$1(props);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$li,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([reagent.core.props(this$),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$class,cljsjs.util.trim([cljs.core.str("b-tab dropdown "),cljs.core.str(cljs.core.constant$keyword$className.cljs$core$IFn$_invoke$arity$1(props))].join('')),cljs.core.constant$keyword$title,null], null)], 0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rubix_bootstrap.components.menu.dropdown_button,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$tab,true,cljs.core.constant$keyword$dropdown,id,cljs.core.constant$keyword$on_DASH_click,((function (this$,id,title,no_caret_QMARK_,tab_container_id,on_tab_select){
return (function (e){
var dd_14341 = reagent.core.dom_node(this$);
var G__14337_14342 = dd_14341;
var G__14338_14343 = "active";
goog.dom.classes.add(G__14337_14342,G__14338_14343);

return "";
});})(this$,id,title,no_caret_QMARK_,tab_container_id,on_tab_select))
,cljs.core.constant$keyword$children,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$span,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$span,title], null),((cljs.core.not(no_caret_QMARK_))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rubix_bootstrap.components.caret.caret], null):null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rubix_bootstrap.components.menu.menu,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$menu_DASH_props.cljs$core$IFn$_invoke$arity$1(props)),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$dropdown,id,cljs.core.constant$keyword$onHidden,((function (this$,id,title,no_caret_QMARK_,tab_container_id,on_tab_select){
return (function (){
var dd_14344 = reagent.core.dom_node(this$);
var G__14339_14345 = dd_14344;
var G__14340_14346 = "active";
goog.dom.classes.remove(G__14339_14345,G__14340_14346);

return "";
});})(this$,id,title,no_caret_QMARK_,tab_container_id,on_tab_select))
,cljs.core.constant$keyword$children,cljsjs.util.map_children(((function (this$,id,title,no_caret_QMARK_,tab_container_id,on_tab_select){
return (function (i,c){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rubix_bootstrap.components.menu.menu_item,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$href,"#",cljs.core.constant$keyword$key,i,cljs.core.constant$keyword$children,React.cloneElement(c,{"tab-container-id": tab_container_id, "on-tab-select": on_tab_select, "dropdown": true})], null)], null));
});})(this$,id,title,no_caret_QMARK_,tab_container_id,on_tab_select))
,cljs.core.constant$keyword$children.cljs$core$IFn$_invoke$arity$1(props))], null)], 0))], null)], null);
});
rubix_bootstrap.components.tab.tab_pane_class = (function rubix_bootstrap$components$tab$tab_pane_class(props){
var this$ = reagent.core.current_component();
var id = cljsjs.util.get_id(this$,props);
var active_QMARK_ = cljs.core.constant$keyword$active.cljs$core$IFn$_invoke$arity$1(props);
var tab_container_id = cljs.core.constant$keyword$tab_DASH_container_DASH_id.cljs$core$IFn$_invoke$arity$1(props);
var tab_container_cursor = reagent.core.cursor(rubix_bootstrap.components.tab.tab_containers,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tab_container_id], null));
var tab_pane_cursor = reagent.core.cursor(tab_container_cursor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$tab_DASH_pane], null));
var idx = cljsjs.util.indexOf(cljs.core.vec((function (){var G__14351 = tab_pane_cursor;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14351) : cljs.core.deref.call(null,G__14351));
})()),id);
var _ = (((idx == null))?cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tab_pane_cursor,cljs.core.conj,id):null);
var tpc = reagent.core.cursor(rubix_bootstrap.components.tab.tab_panes,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null));
var ___$1 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(tpc,cljs.core.assoc,cljs.core.constant$keyword$active,((!((cljs.core.constant$keyword$active.cljs$core$IFn$_invoke$arity$1((function (){var G__14352 = tpc;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14352) : cljs.core.deref.call(null,G__14352));
})()) == null)))?cljs.core.constant$keyword$active.cljs$core$IFn$_invoke$arity$1((function (){var G__14353 = tpc;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14353) : cljs.core.deref.call(null,G__14353));
})()):active_QMARK_));
var active_QMARK___$1 = cljs.core.constant$keyword$active.cljs$core$IFn$_invoke$arity$1((function (){var G__14354 = tpc;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14354) : cljs.core.deref.call(null,G__14354));
})());
if(cljs.core.truth_(active_QMARK___$1)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([reagent.core.props(this$),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$class,cljsjs.util.trim([cljs.core.str(" tab-pane active "),cljs.core.str(cljs.core.constant$keyword$className.cljs$core$IFn$_invoke$arity$1(props))].join('')),cljs.core.constant$keyword$active,null], null)], 0)),cljs.core.constant$keyword$children.cljs$core$IFn$_invoke$arity$1(props)], null);
} else {
return null;
}
});
rubix_bootstrap.components.tab.tab_pane = cljs.core.with_meta(rubix_bootstrap.components.tab.tab_pane_class,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$component_DASH_will_DASH_unmount,(function (this$){
var id = (this$["id"]);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(rubix_bootstrap.components.tab.tab_panes,cljs.core.dissoc,id);
})], null));
rubix_bootstrap.components.tab.gen_classes_tl = (function rubix_bootstrap$components$tab$gen_classes_tl(props){
var pills_QMARK_ = cljs.core.constant$keyword$pills.cljs$core$IFn$_invoke$arity$1(props);
var stacked_QMARK_ = cljs.core.constant$keyword$stacked.cljs$core$IFn$_invoke$arity$1(props);
var stacked_QMARK___$1 = (cljs.core.truth_(stacked_QMARK_)?(cljs.core.truth_(pills_QMARK_)?true:false):false);
var justified_QMARK_ = cljs.core.constant$keyword$justified.cljs$core$IFn$_invoke$arity$1(props);
var bsStyle = ((!((cljs.core.constant$keyword$bsStyle.cljs$core$IFn$_invoke$arity$1(props) == null)))?cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.not_empty,clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$bsStyle.cljs$core$IFn$_invoke$arity$1(props),/\s|,/)):null);
var styles = ((!((bsStyle == null)))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,(function (){var iter__5061__auto__ = ((function (pills_QMARK_,stacked_QMARK_,stacked_QMARK___$1,justified_QMARK_,bsStyle){
return (function rubix_bootstrap$components$tab$gen_classes_tl_$_iter__14361(s__14362){
return (new cljs.core.LazySeq(null,((function (pills_QMARK_,stacked_QMARK_,stacked_QMARK___$1,justified_QMARK_,bsStyle){
return (function (){
var s__14362__$1 = s__14362;
while(true){
var temp__4423__auto__ = cljs.core.seq(s__14362__$1);
if(temp__4423__auto__){
var s__14362__$2 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14362__$2)){
var c__5059__auto__ = cljs.core.chunk_first(s__14362__$2);
var size__5060__auto__ = cljs.core.count(c__5059__auto__);
var b__14364 = cljs.core.chunk_buffer(size__5060__auto__);
if((function (){var i__14363 = (0);
while(true){
if((i__14363 < size__5060__auto__)){
var st = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5059__auto__,i__14363);
cljs.core.chunk_append(b__14364,[cljs.core.str(" nav-"),cljs.core.str(clojure.string.trim(st))].join(''));

var G__14367 = (i__14363 + (1));
i__14363 = G__14367;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14364),rubix_bootstrap$components$tab$gen_classes_tl_$_iter__14361(cljs.core.chunk_rest(s__14362__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14364),null);
}
} else {
var st = cljs.core.first(s__14362__$2);
return cljs.core.cons([cljs.core.str(" nav-"),cljs.core.str(clojure.string.trim(st))].join(''),rubix_bootstrap$components$tab$gen_classes_tl_$_iter__14361(cljs.core.rest(s__14362__$2)));
}
} else {
return null;
}
break;
}
});})(pills_QMARK_,stacked_QMARK_,stacked_QMARK___$1,justified_QMARK_,bsStyle))
,null,null));
});})(pills_QMARK_,stacked_QMARK_,stacked_QMARK___$1,justified_QMARK_,bsStyle))
;
return iter__5061__auto__(bsStyle);
})()):" nav-default");
return [cljs.core.str("nav "),cljs.core.str(((cljs.core.not(pills_QMARK_))?"nav-tabs ":null)),cljs.core.str((cljs.core.truth_(pills_QMARK_)?"nav-pills ":null)),cljs.core.str(((stacked_QMARK___$1)?"nav-stacked ":null)),cljs.core.str((cljs.core.truth_(justified_QMARK_)?"nav-justified ":null)),cljs.core.str(styles)].join('');
});
rubix_bootstrap.components.tab.tab_list_class = (function rubix_bootstrap$components$tab$tab_list_class(props){
var this$ = reagent.core.current_component();
var pills_QMARK_ = cljs.core.constant$keyword$pills.cljs$core$IFn$_invoke$arity$1(props);
var tablist = (cljs.core.truth_(pills_QMARK_)?"":"tablist");
var classes = rubix_bootstrap.components.tab.gen_classes_tl(props);
var tab_container_id = (function (){var or__4307__auto__ = cljs.core.constant$keyword$tabContainerID.cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(or__4307__auto__)){
return or__4307__auto__;
} else {
return cljs.core.constant$keyword$tab_DASH_container_DASH_id.cljs$core$IFn$_invoke$arity$1(props);
}
})();
var _ = (this$["tabContainerID"] = tab_container_id);
var tab_container_cursor = reagent.core.cursor(rubix_bootstrap.components.tab.tab_containers,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tab_container_id], null));
var ___$1 = (((cljs.core.constant$keyword$tabContinuation.cljs$core$IFn$_invoke$arity$1(props) == null))?rubix_bootstrap.components.tab.create_tab_container_cursor(tab_container_id):null);
var on_tab_select = (function (){var or__4307__auto__ = cljs.core.constant$keyword$onTabSelect.cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(or__4307__auto__)){
return or__4307__auto__;
} else {
var or__4307__auto____$1 = cljs.core.constant$keyword$on_DASH_tab_DASH_select.cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(or__4307__auto____$1)){
return or__4307__auto____$1;
} else {
return ((function (or__4307__auto____$1,or__4307__auto__,this$,pills_QMARK_,tablist,classes,tab_container_id,_,tab_container_cursor,___$1){
return (function (){
return null;
});
;})(or__4307__auto____$1,or__4307__auto__,this$,pills_QMARK_,tablist,classes,tab_container_id,_,tab_container_cursor,___$1))
}
}
})();
if((tab_container_id == null)){
throw (new Error("tabContainerID required!"));
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$ul,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([reagent.core.props(this$),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$class,cljsjs.util.trim([cljs.core.str(classes),cljs.core.str(" "),cljs.core.str(cljs.core.constant$keyword$className.cljs$core$IFn$_invoke$arity$1(props))].join('')),cljs.core.constant$keyword$role,tablist], null)], 0)),cljsjs.util.map_children(((function (this$,pills_QMARK_,tablist,classes,tab_container_id,_,tab_container_cursor,___$1,on_tab_select){
return (function (i,c){
return React.cloneElement(c,{"tab-container-id": tab_container_id, "on-tab-select": on_tab_select, "key": i});
});})(this$,pills_QMARK_,tablist,classes,tab_container_id,_,tab_container_cursor,___$1,on_tab_select))
,cljs.core.constant$keyword$children.cljs$core$IFn$_invoke$arity$1(props))], null);
}
});
rubix_bootstrap.components.tab.tab_list = cljs.core.with_meta(rubix_bootstrap.components.tab.tab_list_class,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$component_DASH_will_DASH_unmount,(function (this$){
var id = (this$["tabContainerID"]);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(rubix_bootstrap.components.tab.tab_containers,cljs.core.dissoc,id);
})], null));
rubix_bootstrap.components.tab.tab_content = (function rubix_bootstrap$components$tab$tab_content(props){
var this$ = reagent.core.current_component();
var tab_container_id = (function (){var or__4307__auto__ = cljs.core.constant$keyword$tabContainerID.cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(or__4307__auto__)){
return or__4307__auto__;
} else {
return cljs.core.constant$keyword$tab_DASH_container_DASH_id.cljs$core$IFn$_invoke$arity$1(props);
}
})();
var on_tab_select = cljs.core.constant$keyword$on_DASH_tab_DASH_select.cljs$core$IFn$_invoke$arity$1(props);
var _ = rubix_bootstrap.components.tab.create_tab_container_cursor(tab_container_id);
if((tab_container_id == null)){
throw (new Error("tabContainerID required!"));
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([reagent.core.props(this$),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$class,cljsjs.util.trim([cljs.core.str("tab-content "),cljs.core.str(cljs.core.constant$keyword$className.cljs$core$IFn$_invoke$arity$1(props))].join(''))], null)], 0)),cljsjs.util.map_children(((function (this$,tab_container_id,on_tab_select,_){
return (function (i,c){
return React.cloneElement(c,{"tab-container-id": tab_container_id, "on-tab-select": on_tab_select, "key": i});
});})(this$,tab_container_id,on_tab_select,_))
,cljs.core.constant$keyword$children.cljs$core$IFn$_invoke$arity$1(props))], null);
}
});
rubix_bootstrap.components.tab.tab_container_class = (function rubix_bootstrap$components$tab$tab_container_class(props){
var this$ = reagent.core.current_component();
var id = cljsjs.util.get_id(this$,props);
var on_tab_select = (function (){var or__4307__auto__ = cljs.core.constant$keyword$onTabSelect.cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(or__4307__auto__)){
return or__4307__auto__;
} else {
return ((function (or__4307__auto__,this$,id){
return (function (){
return null;
});
;})(or__4307__auto__,this$,id))
}
})();
var _ = rubix_bootstrap.components.tab.create_tab_container_cursor(id);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([reagent.core.props(this$),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$class,cljsjs.util.trim([cljs.core.str("tab-container "),cljs.core.str(cljs.core.constant$keyword$className.cljs$core$IFn$_invoke$arity$1(props))].join(''))], null)], 0)),cljsjs.util.map_children(((function (this$,id,on_tab_select,_){
return (function (i,c){
return React.cloneElement(c,{"tab-container-id": id, "on-tab-select": on_tab_select, "key": i});
});})(this$,id,on_tab_select,_))
,cljs.core.constant$keyword$children.cljs$core$IFn$_invoke$arity$1(props))], null);
});
rubix_bootstrap.components.tab.tab_container = cljs.core.with_meta(rubix_bootstrap.components.tab.tab_container_class,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$component_DASH_will_DASH_unmount,(function (this$){
var id = (this$["id"]);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(rubix_bootstrap.components.tab.tab_containers,cljs.core.dissoc,id);
})], null));
