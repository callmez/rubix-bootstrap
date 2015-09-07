// Compiled by ClojureScript 0.0-3269 {:static-fns true, :optimize-constants true}
goog.provide('rubix_bootstrap.components.nav');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljsjs.util');
goog.require('rubix_bootstrap.components.form');
goog.require('rubix_bootstrap.components.button');
if(typeof rubix_bootstrap.components.nav.navs !== 'undefined'){
} else {
rubix_bootstrap.components.nav.navs = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof rubix_bootstrap.components.nav.navcontents !== 'undefined'){
} else {
rubix_bootstrap.components.nav.navcontents = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof rubix_bootstrap.components.nav.zIndex !== 'undefined'){
} else {
rubix_bootstrap.components.nav.zIndex = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((9999999));
}
rubix_bootstrap.components.nav.reset_globals_BANG_ = (function rubix_bootstrap$components$nav$reset_globals_BANG_(){
var G__14090 = rubix_bootstrap.components.nav.zIndex;
var G__14091 = (9999999);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__14090,G__14091) : cljs.core.reset_BANG_.call(null,G__14090,G__14091));
});
rubix_bootstrap.components.nav.getZIndex = (function rubix_bootstrap$components$nav$getZIndex(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(rubix_bootstrap.components.nav.zIndex,cljs.core.dec);
});
rubix_bootstrap.components.nav.nav_mixin_classes = (function rubix_bootstrap$components$nav$nav_mixin_classes(props){
var left_QMARK_ = cljs.core.constant$keyword$left.cljs$core$IFn$_invoke$arity$1(props);
var right_QMARK_ = cljs.core.constant$keyword$right.cljs$core$IFn$_invoke$arity$1(props);
return [cljs.core.str((cljs.core.truth_(left_QMARK_)?"navbar-left ":null)),cljs.core.str((cljs.core.truth_(right_QMARK_)?"navbar-right ":null))].join('');
});
rubix_bootstrap.components.nav.nav_mixin = (function rubix_bootstrap$components$nav$nav_mixin(){
var argseq__5347__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return rubix_bootstrap.components.nav.nav_mixin.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5347__auto__);
});

rubix_bootstrap.components.nav.nav_mixin.cljs$core$IFn$_invoke$arity$variadic = (function (component,props,extra_classes,p__14096){
var vec__14097 = p__14096;
var rchildren = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14097,(0),null);
var this$ = reagent.core.current_component();
var classes = rubix_bootstrap.components.nav.nav_mixin_classes(props);
var use_class_name = cljs.core.constant$keyword$use_DASH_class_DASH_name.cljs$core$IFn$_invoke$arity$1(props);
var use_class = (cljs.core.truth_(use_class_name)?"className":"class");
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [component,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([reagent.core.props(this$),new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(use_class),cljsjs.util.trim([cljs.core.str(classes),cljs.core.str(" "),cljs.core.str(extra_classes),cljs.core.str(" "),cljs.core.str((function (){var or__4307__auto__ = cljs.core.constant$keyword$className.cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(or__4307__auto__)){
return or__4307__auto__;
} else {
return cljs.core.constant$keyword$class.cljs$core$IFn$_invoke$arity$1(props);
}
})())].join('')),cljs.core.constant$keyword$children,(function (){var or__4307__auto__ = rchildren;
if(cljs.core.truth_(or__4307__auto__)){
return or__4307__auto__;
} else {
return cljs.core.constant$keyword$children.cljs$core$IFn$_invoke$arity$1(props);
}
})(),cljs.core.constant$keyword$role,cljs.core.constant$keyword$role.cljs$core$IFn$_invoke$arity$1(props)], true, false)], 0))], null);
});

rubix_bootstrap.components.nav.nav_mixin.cljs$lang$maxFixedArity = (3);

rubix_bootstrap.components.nav.nav_mixin.cljs$lang$applyTo = (function (seq14092){
var G__14093 = cljs.core.first(seq14092);
var seq14092__$1 = cljs.core.next(seq14092);
var G__14094 = cljs.core.first(seq14092__$1);
var seq14092__$2 = cljs.core.next(seq14092__$1);
var G__14095 = cljs.core.first(seq14092__$2);
var seq14092__$3 = cljs.core.next(seq14092__$2);
return rubix_bootstrap.components.nav.nav_mixin.cljs$core$IFn$_invoke$arity$variadic(G__14093,G__14094,G__14095,seq14092__$3);
});
rubix_bootstrap.components.nav.nav_button = (function rubix_bootstrap$components$nav$nav_button(props){
cljsjs.util.debug.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["nav-button"], 0));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rubix_bootstrap.components.nav.nav_mixin,rubix_bootstrap.components.button.button,props], null);
});
rubix_bootstrap.components.nav.nav_link = (function rubix_bootstrap$components$nav$nav_link(props){
cljsjs.util.debug.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["nav-link"], 0));

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [rubix_bootstrap.components.nav.nav_mixin,cljs.core.constant$keyword$a,props,"navbar-link"], null);
});
rubix_bootstrap.components.nav.nav_text = (function rubix_bootstrap$components$nav$nav_text(props){
cljsjs.util.debug.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["nav-text"], 0));

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [rubix_bootstrap.components.nav.nav_mixin,cljs.core.constant$keyword$p,props,"navbar-text"], null);
});
rubix_bootstrap.components.nav.nav_form = (function rubix_bootstrap$components$nav$nav_form(props){
cljsjs.util.debug.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["nav-form"], 0));

var this$ = reagent.core.current_component();
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [rubix_bootstrap.components.nav.nav_mixin,rubix_bootstrap.components.form.form,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([reagent.core.props(this$),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$role,"search",cljs.core.constant$keyword$use_DASH_class_DASH_name,true], null)], 0)),"navbar-form form-inline"], null);
});
rubix_bootstrap.components.nav.toggle_navcontents = (function rubix_bootstrap$components$nav$toggle_navcontents(e,target){
e.preventDefault();

var navcontents_cursor = reagent.core.cursor(rubix_bootstrap.components.nav.navcontents,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [target], null));
var collapse = cljs.core.not(cljs.core.constant$keyword$collapse.cljs$core$IFn$_invoke$arity$1((function (){var G__14099 = navcontents_cursor;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14099) : cljs.core.deref.call(null,G__14099));
})()));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(navcontents_cursor,cljs.core.assoc,cljs.core.constant$keyword$collapse,collapse);
});
rubix_bootstrap.components.nav.nav_toggle = (function rubix_bootstrap$components$nav$nav_toggle(props){
cljsjs.util.debug.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["nav-toggle"], 0));

var this$ = reagent.core.current_component();
var target = cljs.core.constant$keyword$target.cljs$core$IFn$_invoke$arity$1(props);
var toggle_navcontents_event = ((function (this$,target){
return (function (e){
return rubix_bootstrap.components.nav.toggle_navcontents(e,target);
});})(this$,target))
;
var nchildren = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$span,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$span$sr_DASH_only,cljs.core.constant$keyword$children.cljs$core$IFn$_invoke$arity$1(props)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$span$icon_DASH_bar], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$span$icon_DASH_bar], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$span$icon_DASH_bar], null)], null);
if((target == null)){
throw (new Error("No \"target\" property set for NavToggle. Please refer to Navbar documentation."));
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rubix_bootstrap.components.button.button,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([reagent.core.props(this$),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$className,cljsjs.util.trim([cljs.core.str("navbar-toggle "),cljs.core.str(cljs.core.constant$keyword$className.cljs$core$IFn$_invoke$arity$1(props))].join('')),cljs.core.constant$keyword$data_DASH_toggle,"collapse",cljs.core.constant$keyword$on_DASH_click,toggle_navcontents_event,cljs.core.constant$keyword$on_DASH_touch_DASH_end,toggle_navcontents_event,cljs.core.constant$keyword$children,nchildren], null)], 0))], null);
}
});
rubix_bootstrap.components.nav.deactivate_nav_items = (function rubix_bootstrap$components$nav$deactivate_nav_items(nav_cursor){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__14103){
var vec__14104 = p__14103;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14104,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14104,(1),null);
var nav_item_cursor = reagent.core.cursor(nav_cursor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nav_item_cursor,cljs.core.assoc,cljs.core.constant$keyword$active,false);
}),(function (){var G__14105 = nav_cursor;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14105) : cljs.core.deref.call(null,G__14105));
})()));
});
rubix_bootstrap.components.nav.activate_nav_item = (function rubix_bootstrap$components$nav$activate_nav_item(nav_item_cursor,nav_cursor,props){
rubix_bootstrap.components.nav.deactivate_nav_items(nav_cursor);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nav_item_cursor,cljs.core.assoc,cljs.core.constant$keyword$active,true);

var on_click = cljs.core.constant$keyword$onClick.cljs$core$IFn$_invoke$arity$1(props);
var on_touch_end = cljs.core.constant$keyword$onTouchEnd.cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(on_click)){
(on_click.cljs$core$IFn$_invoke$arity$0 ? on_click.cljs$core$IFn$_invoke$arity$0() : on_click.call(null));
} else {
}

if(cljs.core.truth_(on_touch_end)){
return (on_touch_end.cljs$core$IFn$_invoke$arity$0 ? on_touch_end.cljs$core$IFn$_invoke$arity$0() : on_touch_end.call(null));
} else {
return null;
}
});
rubix_bootstrap.components.nav.nav_item_class = (function rubix_bootstrap$components$nav$nav_item_class(props){
cljsjs.util.debug.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["nav-item-class"], 0));

var this$ = reagent.core.current_component();
var id = cljsjs.util.get_id(this$,props);
var nav_id = cljs.core.constant$keyword$nav_DASH_id.cljs$core$IFn$_invoke$arity$1(props);
var nav_cursor = reagent.core.cursor(rubix_bootstrap.components.nav.navs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nav_id], null));
var nav_item_cursor = reagent.core.cursor(nav_cursor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null));
var active_QMARK_ = cljs.core.constant$keyword$active.cljs$core$IFn$_invoke$arity$1((function (){var G__14109 = nav_item_cursor;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14109) : cljs.core.deref.call(null,G__14109));
})());
var on_item_select = cljs.core.constant$keyword$on_DASH_item_DASH_select.cljs$core$IFn$_invoke$arity$1(props);
var _ = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nav_item_cursor,cljs.core.assoc,cljs.core.constant$keyword$active,((!((active_QMARK_ == null)))?active_QMARK_:cljs.core.constant$keyword$active.cljs$core$IFn$_invoke$arity$1(props)));
var active_QMARK___$1 = cljs.core.constant$keyword$active.cljs$core$IFn$_invoke$arity$1((function (){var G__14110 = nav_item_cursor;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14110) : cljs.core.deref.call(null,G__14110));
})());
var divider_QMARK_ = cljs.core.constant$keyword$divider.cljs$core$IFn$_invoke$arity$1(props);
var dropdown_QMARK_ = cljs.core.constant$keyword$dropdown.cljs$core$IFn$_invoke$arity$1(props);
var on_shown = cljs.core.constant$keyword$onShown.cljs$core$IFn$_invoke$arity$1(props);
var on_hidden = cljs.core.constant$keyword$onHidden.cljs$core$IFn$_invoke$arity$1(props);
var d = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$li,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([reagent.core.props(this$),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$class,cljsjs.util.trim([cljs.core.str("divider "),cljs.core.str(cljs.core.constant$keyword$className.cljs$core$IFn$_invoke$arity$1(props))].join(''))], null)], 0))], null);
if(cljs.core.truth_(divider_QMARK_)){
return d;
} else {
var on_shown_event = ((function (this$,id,nav_id,nav_cursor,nav_item_cursor,active_QMARK_,on_item_select,_,active_QMARK___$1,divider_QMARK_,dropdown_QMARK_,on_shown,on_hidden,d){
return (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nav_item_cursor,cljs.core.assoc,cljs.core.constant$keyword$active,true);

if(cljs.core.truth_(on_shown)){
return (on_shown.cljs$core$IFn$_invoke$arity$0 ? on_shown.cljs$core$IFn$_invoke$arity$0() : on_shown.call(null));
} else {
return null;
}
});})(this$,id,nav_id,nav_cursor,nav_item_cursor,active_QMARK_,on_item_select,_,active_QMARK___$1,divider_QMARK_,dropdown_QMARK_,on_shown,on_hidden,d))
;
var on_hidden_event = ((function (on_shown_event,this$,id,nav_id,nav_cursor,nav_item_cursor,active_QMARK_,on_item_select,_,active_QMARK___$1,divider_QMARK_,dropdown_QMARK_,on_shown,on_hidden,d){
return (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nav_item_cursor,cljs.core.assoc,cljs.core.constant$keyword$active,false);

if(cljs.core.truth_(on_hidden)){
return (on_hidden.cljs$core$IFn$_invoke$arity$0 ? on_hidden.cljs$core$IFn$_invoke$arity$0() : on_hidden.call(null));
} else {
return null;
}
});})(on_shown_event,this$,id,nav_id,nav_cursor,nav_item_cursor,active_QMARK_,on_item_select,_,active_QMARK___$1,divider_QMARK_,dropdown_QMARK_,on_shown,on_hidden,d))
;
var classes = [cljs.core.str((cljs.core.truth_(dropdown_QMARK_)?"dropdown ":null)),cljs.core.str((cljs.core.truth_(active_QMARK___$1)?"active ":null)),cljs.core.str(cljs.core.constant$keyword$className.cljs$core$IFn$_invoke$arity$1(props))].join('');
var handle_click_event = ((function (on_shown_event,on_hidden_event,classes,this$,id,nav_id,nav_cursor,nav_item_cursor,active_QMARK_,on_item_select,_,active_QMARK___$1,divider_QMARK_,dropdown_QMARK_,on_shown,on_hidden,d){
return (function (e){
e.preventDefault();

rubix_bootstrap.components.nav.activate_nav_item(nav_item_cursor,nav_cursor,props);

if(cljs.core.truth_(on_item_select)){
var G__14111 = cljs.core.clj__GT_js(props);
return (on_item_select.cljs$core$IFn$_invoke$arity$1 ? on_item_select.cljs$core$IFn$_invoke$arity$1(G__14111) : on_item_select.call(null,G__14111));
} else {
return null;
}
});})(on_shown_event,on_hidden_event,classes,this$,id,nav_id,nav_cursor,nav_item_cursor,active_QMARK_,on_item_select,_,active_QMARK___$1,divider_QMARK_,dropdown_QMARK_,on_shown,on_hidden,d))
;
var href = cljs.core.constant$keyword$href.cljs$core$IFn$_invoke$arity$1(props);
var nchildren = (cljs.core.truth_(href)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$a,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$href,href,cljs.core.constant$keyword$on_DASH_click,handle_click_event,cljs.core.constant$keyword$on_DASH_touch_DASH_end,handle_click_event], null),cljs.core.constant$keyword$children.cljs$core$IFn$_invoke$arity$1(props)], null):cljs.core.constant$keyword$children.cljs$core$IFn$_invoke$arity$1(props));
var nchildren__$1 = (cljs.core.truth_(dropdown_QMARK_)?cljsjs.util.map_children(((function (on_shown_event,on_hidden_event,classes,handle_click_event,href,nchildren,this$,id,nav_id,nav_cursor,nav_item_cursor,active_QMARK_,on_item_select,_,active_QMARK___$1,divider_QMARK_,dropdown_QMARK_,on_shown,on_hidden,d){
return (function (i,c){
return React.cloneElement(c,{"dropdown": id, "toggleOnHover": cljs.core.constant$keyword$toggleOnHover.cljs$core$IFn$_invoke$arity$1(props), "onShown": on_shown_event, "onHidden": on_hidden_event, "key": i});
});})(on_shown_event,on_hidden_event,classes,handle_click_event,href,nchildren,this$,id,nav_id,nav_cursor,nav_item_cursor,active_QMARK_,on_item_select,_,active_QMARK___$1,divider_QMARK_,dropdown_QMARK_,on_shown,on_hidden,d))
,cljs.core.constant$keyword$children.cljs$core$IFn$_invoke$arity$1(props)):nchildren);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$li,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([reagent.core.props(this$),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$class,cljsjs.util.trim(classes)], null)], 0)),nchildren__$1], null);
}
});
rubix_bootstrap.components.nav.nav_item = cljs.core.with_meta(rubix_bootstrap.components.nav.nav_item_class,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$component_DASH_will_DASH_unmount,(function (this$){
var id = (this$["id"]);
var props = reagent.core.props(this$);
var nav_id = cljs.core.constant$keyword$nav_DASH_id.cljs$core$IFn$_invoke$arity$1(props);
var nav_cursor = reagent.core.cursor(rubix_bootstrap.components.nav.navs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nav_id], null));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(nav_cursor,cljs.core.dissoc,id);
})], null));
rubix_bootstrap.components.nav.nav_class = (function rubix_bootstrap$components$nav$nav_class(props){
cljsjs.util.debug.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["nav"], 0));

var this$ = reagent.core.current_component();
var id = cljsjs.util.get_id(this$,props);
var _ = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(rubix_bootstrap.components.nav.navs,cljs.core.assoc,id,cljs.core.PersistentArrayMap.EMPTY);
var on_item_select = cljs.core.constant$keyword$onItemSelect.cljs$core$IFn$_invoke$arity$1(props);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [rubix_bootstrap.components.nav.nav_mixin,cljs.core.constant$keyword$ul,props,"nav navbar-nav",cljsjs.util.map_children(((function (this$,id,_,on_item_select){
return (function (i,c){
if(!((c == null))){
return React.cloneElement(c,{"on-item-select": on_item_select, "nav-id": id});
} else {
return null;
}
});})(this$,id,_,on_item_select))
,cljs.core.constant$keyword$children.cljs$core$IFn$_invoke$arity$1(props))], null);
});
rubix_bootstrap.components.nav.nav = cljs.core.with_meta(rubix_bootstrap.components.nav.nav_class,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$component_DASH_will_DASH_unmount,(function (this$){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(rubix_bootstrap.components.nav.navs,cljs.core.dissoc,(this$["id"]));
})], null));
rubix_bootstrap.components.nav.nav_content_class = (function rubix_bootstrap$components$nav$nav_content_class(props){
cljsjs.util.debug.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["nav-content"], 0));

var this$ = reagent.core.current_component();
var id = (function (){var or__4307__auto__ = cljs.core.constant$keyword$id.cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(or__4307__auto__)){
return or__4307__auto__;
} else {
return cljsjs.util.get_id(this$,props);
}
})();
var navcontents_cursor = reagent.core.cursor(rubix_bootstrap.components.nav.navcontents,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null));
var collapse_QMARK_ = cljs.core.constant$keyword$collapse.cljs$core$IFn$_invoke$arity$1((function (){var G__14114 = navcontents_cursor;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14114) : cljs.core.deref.call(null,G__14114));
})());
var _ = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(navcontents_cursor,cljs.core.assoc,cljs.core.constant$keyword$collapse,((!((collapse_QMARK_ == null)))?collapse_QMARK_:cljs.core.constant$keyword$collapse.cljs$core$IFn$_invoke$arity$1(props)));
var collapse_QMARK___$1 = cljs.core.constant$keyword$collapse.cljs$core$IFn$_invoke$arity$1((function (){var G__14115 = navcontents_cursor;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14115) : cljs.core.deref.call(null,G__14115));
})());
var classes = [cljs.core.str("navbar-content "),cljs.core.str((cljs.core.truth_(collapse_QMARK___$1)?"collapse navbar-collapse ":null))].join('');
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([reagent.core.props(this$),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$class,cljsjs.util.trim([cljs.core.str(classes),cljs.core.str(" "),cljs.core.str(cljs.core.constant$keyword$className.cljs$core$IFn$_invoke$arity$1(props))].join(''))], null)], 0)),cljs.core.constant$keyword$children.cljs$core$IFn$_invoke$arity$1(props)], null);
});
rubix_bootstrap.components.nav.nav_content = cljs.core.with_meta(rubix_bootstrap.components.nav.nav_content_class,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$component_DASH_will_DASH_unmount,(function (this$){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(rubix_bootstrap.components.nav.navcontents,cljs.core.dissoc,(this$["id"]));
})], null));
rubix_bootstrap.components.nav.nav_brand = (function rubix_bootstrap$components$nav$nav_brand(props){
cljsjs.util.debug.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["nav-brand"], 0));

var this$ = reagent.core.current_component();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$a,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([reagent.core.props(this$),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$href,(function (){var or__4307__auto__ = cljs.core.constant$keyword$href.cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(or__4307__auto__)){
return or__4307__auto__;
} else {
return "#";
}
})(),cljs.core.constant$keyword$class,cljsjs.util.trim([cljs.core.str("navbar-brand "),cljs.core.str(cljs.core.constant$keyword$className.cljs$core$IFn$_invoke$arity$1(props))].join(''))], null)], 0)),cljs.core.constant$keyword$children.cljs$core$IFn$_invoke$arity$1(props)], null);
});
rubix_bootstrap.components.nav.nav_header = (function rubix_bootstrap$components$nav$nav_header(props){
cljsjs.util.debug.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["nav-header"], 0));

var this$ = reagent.core.current_component();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([reagent.core.props(this$),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$class,cljsjs.util.trim([cljs.core.str("navbar-header "),cljs.core.str(cljs.core.constant$keyword$className.cljs$core$IFn$_invoke$arity$1(props))].join(''))], null)], 0)),cljs.core.constant$keyword$children.cljs$core$IFn$_invoke$arity$1(props)], null);
});
rubix_bootstrap.components.nav.gen_classes = (function rubix_bootstrap$components$nav$gen_classes(props){
var inverse_QMARK_ = cljs.core.constant$keyword$inverse.cljs$core$IFn$_invoke$arity$1(props);
var fixed_top_QMARK_ = cljs.core.constant$keyword$fixedTop.cljs$core$IFn$_invoke$arity$1(props);
var static_top_QMARK_ = cljs.core.constant$keyword$staticTop.cljs$core$IFn$_invoke$arity$1(props);
var fixed_bottom_QMARK_ = cljs.core.constant$keyword$fixedBottom.cljs$core$IFn$_invoke$arity$1(props);
return [cljs.core.str("navbar navbar-default "),cljs.core.str((cljs.core.truth_(inverse_QMARK_)?"navbar-inverse ":null)),cljs.core.str((cljs.core.truth_(fixed_top_QMARK_)?"navbar-fixed-top ":null)),cljs.core.str((cljs.core.truth_(static_top_QMARK_)?"navbar-static-top ":null)),cljs.core.str((cljs.core.truth_(fixed_bottom_QMARK_)?"navbar-fixed-bottom ":null))].join('');
});
rubix_bootstrap.components.nav.navbar = (function rubix_bootstrap$components$nav$navbar(props){
cljsjs.util.debug.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["navbar"], 0));

var this$ = reagent.core.current_component();
var classes = rubix_bootstrap.components.nav.gen_classes(props);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$nav,cljsjs.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([reagent.core.props(this$),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$class,cljsjs.util.trim([cljs.core.str(classes),cljs.core.str(" "),cljs.core.str(cljs.core.constant$keyword$className.cljs$core$IFn$_invoke$arity$1(props))].join('')),cljs.core.constant$keyword$role,"navigation",cljs.core.constant$keyword$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$style.cljs$core$IFn$_invoke$arity$1(props)),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$zIndex,rubix_bootstrap.components.nav.getZIndex()], null)], 0))], null)], 0)),cljs.core.constant$keyword$children.cljs$core$IFn$_invoke$arity$1(props)], null);
});
