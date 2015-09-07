// Compiled by ClojureScript 0.0-3269 {:static-fns true, :optimize-constants true}
goog.provide('rubix_bootstrap.components.menu');
goog.require('cljs.core');
goog.require('cljsjs.dispatcher');
goog.require('goog.dom.classes');
goog.require('reagent.core');
goog.require('rubix_bootstrap.components.button');
goog.require('cljsjs.util');
goog.require('clojure.string');
if(typeof rubix_bootstrap.components.menu.dropdowns !== 'undefined'){
} else {
rubix_bootstrap.components.menu.dropdowns = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof rubix_bootstrap.components.menu.menus !== 'undefined'){
} else {
rubix_bootstrap.components.menu.menus = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof rubix_bootstrap.components.menu.menu_items !== 'undefined'){
} else {
rubix_bootstrap.components.menu.menu_items = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof rubix_bootstrap.components.menu.menu_items_set !== 'undefined'){
} else {
rubix_bootstrap.components.menu.menu_items_set = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof rubix_bootstrap.components.menu.zIndex !== 'undefined'){
} else {
rubix_bootstrap.components.menu.zIndex = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
rubix_bootstrap.components.menu.reset_globals_BANG_ = (function rubix_bootstrap$components$menu$reset_globals_BANG_(){
var G__14178 = rubix_bootstrap.components.menu.zIndex;
var G__14179 = (0);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__14178,G__14179) : cljs.core.reset_BANG_.call(null,G__14178,G__14179));
});
rubix_bootstrap.components.menu.getZIndex = (function rubix_bootstrap$components$menu$getZIndex(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(rubix_bootstrap.components.menu.zIndex,cljs.core.inc);
});
rubix_bootstrap.components.menu.show_dropdown = (function rubix_bootstrap$components$menu$show_dropdown(e,dropdown_id,dropdown_cursor){
if(cljs.core.truth_(e)){
e.preventDefault();
} else {
}

var d = (function (){var G__14181 = dropdown_cursor;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14181) : cljs.core.deref.call(null,G__14181));
})();
var hidden_QMARK_ = cljs.core.constant$keyword$hidden.cljs$core$IFn$_invoke$arity$1(d);
var on_shown = cljs.core.constant$keyword$on_DASH_shown.cljs$core$IFn$_invoke$arity$1(d);
if(cljs.core.truth_((function (){var and__4295__auto__ = hidden_QMARK_;
if(cljs.core.truth_(and__4295__auto__)){
return !((dropdown_id == null));
} else {
return and__4295__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(dropdown_cursor,cljs.core.assoc,cljs.core.constant$keyword$hidden,false);

if(cljs.core.truth_(on_shown)){
return (on_shown.cljs$core$IFn$_invoke$arity$0 ? on_shown.cljs$core$IFn$_invoke$arity$0() : on_shown.call(null));
} else {
return null;
}
} else {
return null;
}
});
rubix_bootstrap.components.menu.hide_dropdown = (function rubix_bootstrap$components$menu$hide_dropdown(e,dropdown_id,dropdown_cursor){
if(cljs.core.truth_(e)){
e.preventDefault();
} else {
}

var d = (function (){var G__14183 = dropdown_cursor;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14183) : cljs.core.deref.call(null,G__14183));
})();
var hidden_QMARK_ = cljs.core.constant$keyword$hidden.cljs$core$IFn$_invoke$arity$1(d);
var on_hidden = cljs.core.constant$keyword$on_DASH_hidden.cljs$core$IFn$_invoke$arity$1(d);
if((cljs.core.not(hidden_QMARK_)) && (!((dropdown_id == null)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(dropdown_cursor,cljs.core.assoc,cljs.core.constant$keyword$hidden,true);

if(cljs.core.truth_(on_hidden)){
return (on_hidden.cljs$core$IFn$_invoke$arity$0 ? on_hidden.cljs$core$IFn$_invoke$arity$0() : on_hidden.call(null));
} else {
return null;
}
} else {
return null;
}
});
rubix_bootstrap.components.menu.force_hide_dropdown = (function rubix_bootstrap$components$menu$force_hide_dropdown(){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__14187){
var vec__14188 = p__14187;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14188,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14188,(1),null);
var dropdown_cursor = reagent.core.cursor(rubix_bootstrap.components.menu.dropdowns,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null));
return rubix_bootstrap.components.menu.hide_dropdown(null,id,dropdown_cursor);
}),(function (){var G__14189 = rubix_bootstrap.components.menu.dropdowns;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14189) : cljs.core.deref.call(null,G__14189));
})()));
});
rubix_bootstrap.components.menu.hide_all_dropdowns = (function rubix_bootstrap$components$menu$hide_all_dropdowns(e){
if(cljs.core.truth_(e)){
e.preventDefault();
} else {
}

var target = e.target;
var is_dropdown = (function (){var G__14196 = target;
var G__14197 = "dropdown";
return goog.dom.getAncestorByClass(G__14196,G__14197);
})();
var is_dropup = (function (){var G__14198 = target;
var G__14199 = "dropup";
return goog.dom.getAncestorByClass(G__14198,G__14199);
})();
var is_dropdown_toggle = (function (){var G__14200 = target;
var G__14201 = "dropdown-toggle";
return goog.dom.getAncestorByClass(G__14200,G__14201);
})();
if(cljs.core.not((function (){var or__4307__auto__ = is_dropdown;
if(cljs.core.truth_(or__4307__auto__)){
return or__4307__auto__;
} else {
var or__4307__auto____$1 = is_dropup;
if(cljs.core.truth_(or__4307__auto____$1)){
return or__4307__auto____$1;
} else {
return is_dropdown_toggle;
}
}
})())){
return rubix_bootstrap.components.menu.force_hide_dropdown();
} else {
return null;
}
});
rubix_bootstrap.components.menu.toggle_dropdown = (function rubix_bootstrap$components$menu$toggle_dropdown(e,dropdown_id,dropdown_cursor){
if(cljs.core.truth_(e)){
e.preventDefault();
} else {
}

var d = (function (){var G__14203 = dropdown_cursor;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14203) : cljs.core.deref.call(null,G__14203));
})();
var hidden = cljs.core.constant$keyword$hidden.cljs$core$IFn$_invoke$arity$1(d);
if(cljs.core.truth_(hidden)){
return rubix_bootstrap.components.menu.show_dropdown(e,dropdown_id,dropdown_cursor);
} else {
return rubix_bootstrap.components.menu.hide_dropdown(e,dropdown_id,dropdown_cursor);
}
});
rubix_bootstrap.components.menu.gen_classes_menu = (function rubix_bootstrap$components$menu$gen_classes_menu(props){
var props__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__14212){
var vec__14213 = p__14212;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14213,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14213,(1),null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k)],[v]);
}),props));
var left_QMARK_ = cljs.core.constant$keyword$alignLeft.cljs$core$IFn$_invoke$arity$1(props__$1);
var right_QMARK_ = cljs.core.constant$keyword$alignRight.cljs$core$IFn$_invoke$arity$1(props__$1);
var bsStyle = ((!((cljs.core.constant$keyword$bsStyle.cljs$core$IFn$_invoke$arity$1(props__$1) == null)))?cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.not_empty,clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$bsStyle.cljs$core$IFn$_invoke$arity$1(props__$1),/\s|,/)):null);
var styles = ((!((bsStyle == null)))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,(function (){var iter__5061__auto__ = ((function (props__$1,left_QMARK_,right_QMARK_,bsStyle){
return (function rubix_bootstrap$components$menu$gen_classes_menu_$_iter__14214(s__14215){
return (new cljs.core.LazySeq(null,((function (props__$1,left_QMARK_,right_QMARK_,bsStyle){
return (function (){
var s__14215__$1 = s__14215;
while(true){
var temp__4423__auto__ = cljs.core.seq(s__14215__$1);
if(temp__4423__auto__){
var s__14215__$2 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14215__$2)){
var c__5059__auto__ = cljs.core.chunk_first(s__14215__$2);
var size__5060__auto__ = cljs.core.count(c__5059__auto__);
var b__14217 = cljs.core.chunk_buffer(size__5060__auto__);
if((function (){var i__14216 = (0);
while(true){
if((i__14216 < size__5060__auto__)){
var st = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5059__auto__,i__14216);
cljs.core.chunk_append(b__14217,[cljs.core.str(" menu-"),cljs.core.str(clojure.string.trim(st))].join(''));

var G__14220 = (i__14216 + (1));
i__14216 = G__14220;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14217),rubix_bootstrap$components$menu$gen_classes_menu_$_iter__14214(cljs.core.chunk_rest(s__14215__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14217),null);
}
} else {
var st = cljs.core.first(s__14215__$2);
return cljs.core.cons([cljs.core.str(" menu-"),cljs.core.str(clojure.string.trim(st))].join(''),rubix_bootstrap$components$menu$gen_classes_menu_$_iter__14214(cljs.core.rest(s__14215__$2)));
}
} else {
return null;
}
break;
}
});})(props__$1,left_QMARK_,right_QMARK_,bsStyle))
,null,null));
});})(props__$1,left_QMARK_,right_QMARK_,bsStyle))
;
return iter__5061__auto__(bsStyle);
})()):" menu-default");
return [cljs.core.str("dropdown-menu "),cljs.core.str((cljs.core.truth_(left_QMARK_)?"dropdown-menu-left ":null)),cljs.core.str((cljs.core.truth_(right_QMARK_)?"dropdown-menu-right ":null)),cljs.core.str(styles)].join('');
});
rubix_bootstrap.components.menu.deactivate_items = (function rubix_bootstrap$components$menu$deactivate_items(menu_cursor){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__14227){
var vec__14228 = p__14227;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14228,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14228,(1),null);
var item_cursor = reagent.core.cursor(menu_cursor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null));
var this$ = cljs.core.constant$keyword$this.cljs$core$IFn$_invoke$arity$1((function (){var G__14229 = item_cursor;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14229) : cljs.core.deref.call(null,G__14229));
})());
var dom_node = reagent.core.dom_node(this$);
if(!((dom_node == null))){
(this$["is-active?"] = false);

var G__14230 = dom_node;
var G__14231 = "active";
return goog.dom.classes.remove(G__14230,G__14231);
} else {
return null;
}
}),(function (){var G__14232 = menu_cursor;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14232) : cljs.core.deref.call(null,G__14232));
})()));
});
rubix_bootstrap.components.menu.activate_item = (function rubix_bootstrap$components$menu$activate_item(menu_cursor,item_cursor){
rubix_bootstrap.components.menu.deactivate_items(menu_cursor);

var this$ = cljs.core.constant$keyword$this.cljs$core$IFn$_invoke$arity$1((function (){var G__14236 = item_cursor;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14236) : cljs.core.deref.call(null,G__14236));
})());
var dom_node = reagent.core.dom_node(this$);
if(!((dom_node == null))){
(this$["is-active?"] = true);

var G__14237 = dom_node;
var G__14238 = "active";
return goog.dom.classes.add(G__14237,G__14238);
} else {
return null;
}
});
rubix_bootstrap.components.menu.menu_item_click = (function rubix_bootstrap$components$menu$menu_item_click(menu_cursor,item_cursor){
rubix_bootstrap.components.menu.activate_item(menu_cursor,item_cursor);

var props = cljs.core.constant$keyword$props.cljs$core$IFn$_invoke$arity$1((function (){var G__14241 = item_cursor;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14241) : cljs.core.deref.call(null,G__14241));
})());
var on_item_select = cljs.core.constant$keyword$on_DASH_item_DASH_select.cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(on_item_select)){
var G__14242 = cljs.core.clj__GT_js(props);
return (on_item_select.cljs$core$IFn$_invoke$arity$1 ? on_item_select.cljs$core$IFn$_invoke$arity$1(G__14242) : on_item_select.call(null,G__14242));
} else {
return null;
}
});
rubix_bootstrap.components.menu.select_item = (function rubix_bootstrap$components$menu$select_item(menu_id,k,v){
var menu_cursor = reagent.core.cursor(rubix_bootstrap.components.menu.menus,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [menu_id], null));
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (menu_cursor){
return (function (p__14246){
var vec__14247 = p__14246;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14247,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14247,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k).call(null,cljs.core.constant$keyword$props.cljs$core$IFn$_invoke$arity$1(p)),v)){
var item_cursor = reagent.core.cursor(menu_cursor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null));
return rubix_bootstrap.components.menu.activate_item(menu_cursor,item_cursor);
} else {
return null;
}
});})(menu_cursor))
,(function (){var G__14248 = menu_cursor;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14248) : cljs.core.deref.call(null,G__14248));
})()));
});
rubix_bootstrap.components.menu.menu_class = (function rubix_bootstrap$components$menu$menu_class(props){
cljsjs.util.debug.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["menu"], 0));

var this$ = reagent.core.current_component();
var classes = rubix_bootstrap.components.menu.gen_classes_menu(props);
var id = cljsjs.util.get_id(this$,props);
var dropdown_id = cljs.core.constant$keyword$dropdown.cljs$core$IFn$_invoke$arity$1(props);
var toggleOnHover = cljs.core.constant$keyword$toggleOnHover.cljs$core$IFn$_invoke$arity$1(props);
var _ = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(rubix_bootstrap.components.menu.menus,cljs.core.assoc,id,cljs.core.PersistentArrayMap.EMPTY);
var ___$1 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(rubix_bootstrap.components.menu.menu_items_set,cljs.core.assoc,id,cljs.core.PersistentHashSet.EMPTY);
var hidden = cljs.core.constant$keyword$hidden.cljs$core$IFn$_invoke$arity$1(props);
var dropdown_cursor = reagent.core.cursor(rubix_bootstrap.components.menu.dropdowns,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dropdown_id], null));
var hidden_QMARK_ = cljs.core.constant$keyword$hidden.cljs$core$IFn$_invoke$arity$1((function (){var G__14254 = dropdown_cursor;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14254) : cljs.core.deref.call(null,G__14254));
})());
var on_shown = cljs.core.constant$keyword$onShown.cljs$core$IFn$_invoke$arity$1(props);
var on_hidden = cljs.core.constant$keyword$onHidden.cljs$core$IFn$_invoke$arity$1(props);
var ___$2 = (((hidden_QMARK_ == null))?cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(dropdown_cursor,cljs.core.assoc,cljs.core.constant$keyword$hidden,((!((hidden == null)))?hidden:true),cljs.core.array_seq([cljs.core.constant$keyword$on_DASH_shown,on_shown,cljs.core.constant$keyword$on_DASH_hidden,on_hidden], 0)):null);
var hidden_QMARK___$1 = cljs.core.constant$keyword$hidden.cljs$core$IFn$_invoke$arity$1((function (){var G__14255 = dropdown_cursor;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14255) : cljs.core.deref.call(null,G__14255));
})());
var visible_QMARK_ = (cljs.core.truth_(hidden_QMARK___$1)?"none":"block");
var menu_items_cursor = reagent.core.cursor(rubix_bootstrap.components.menu.menu_items,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null));
var always_inactive = cljs.core.constant$keyword$alwaysInactive.cljs$core$IFn$_invoke$arity$1(props);
var ___$3 = (function (){var G__14256 = menu_items_cursor;
var G__14257 = cljs.core.PersistentVector.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__14256,G__14257) : cljs.core.reset_BANG_.call(null,G__14256,G__14257));
})();
var on_set_select_item = (function (){var or__4307__auto__ = cljs.core.constant$keyword$onDropdownSetSelectItem.cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(or__4307__auto__)){
return or__4307__auto__;
} else {
var or__4307__auto____$1 = cljs.core.constant$keyword$onSetSelectItem.cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(or__4307__auto____$1)){
return or__4307__auto____$1;
} else {
return ((function (or__4307__auto____$1,or__4307__auto__,this$,classes,id,dropdown_id,toggleOnHover,_,___$1,hidden,dropdown_cursor,hidden_QMARK_,on_shown,on_hidden,___$2,hidden_QMARK___$1,visible_QMARK_,menu_items_cursor,always_inactive,___$3){
return (function (){
return null;
});
;})(or__4307__auto____$1,or__4307__auto__,this$,classes,id,dropdown_id,toggleOnHover,_,___$1,hidden,dropdown_cursor,hidden_QMARK_,on_shown,on_hidden,___$2,hidden_QMARK___$1,visible_QMARK_,menu_items_cursor,always_inactive,___$3))
}
}
})();
var ___$4 = (function (){var G__14258 = ((function (this$,classes,id,dropdown_id,toggleOnHover,_,___$1,hidden,dropdown_cursor,hidden_QMARK_,on_shown,on_hidden,___$2,hidden_QMARK___$1,visible_QMARK_,menu_items_cursor,always_inactive,___$3,on_set_select_item){
return (function (k,v){
return rubix_bootstrap.components.menu.select_item(id,k,v);
});})(this$,classes,id,dropdown_id,toggleOnHover,_,___$1,hidden,dropdown_cursor,hidden_QMARK_,on_shown,on_hidden,___$2,hidden_QMARK___$1,visible_QMARK_,menu_items_cursor,always_inactive,___$3,on_set_select_item))
;
return (on_set_select_item.cljs$core$IFn$_invoke$arity$1 ? on_set_select_item.cljs$core$IFn$_invoke$arity$1(G__14258) : on_set_select_item.call(null,G__14258));
})();
var on_item_select = (function (){var or__4307__auto__ = cljs.core.constant$keyword$onItemSelect.cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(or__4307__auto__)){
return or__4307__auto__;
} else {
return ((function (or__4307__auto__,this$,classes,id,dropdown_id,toggleOnHover,_,___$1,hidden,dropdown_cursor,hidden_QMARK_,on_shown,on_hidden,___$2,hidden_QMARK___$1,visible_QMARK_,menu_items_cursor,always_inactive,___$3,on_set_select_item,___$4){
return (function (){
return null;
});
;})(or__4307__auto__,this$,classes,id,dropdown_id,toggleOnHover,_,___$1,hidden,dropdown_cursor,hidden_QMARK_,on_shown,on_hidden,___$2,hidden_QMARK___$1,visible_QMARK_,menu_items_cursor,always_inactive,___$3,on_set_select_item,___$4))
}
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$ul,cljsjs.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([reagent.core.props(this$),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$role,"menu",cljs.core.constant$keyword$aria_DASH_labelledby,cljs.core.constant$keyword$id.cljs$core$IFn$_invoke$arity$1(props),cljs.core.constant$keyword$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1((function (){var or__4307__auto__ = cljs.core.constant$keyword$style.cljs$core$IFn$_invoke$arity$1(reagent.core.props(this$));
if(cljs.core.truth_(or__4307__auto__)){
return or__4307__auto__;
} else {
return cljs.core.constant$keyword$container_DASH_style.cljs$core$IFn$_invoke$arity$1(reagent.core.props(this$));
}
})()),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$display,visible_QMARK_], null)], 0)),cljs.core.constant$keyword$class,cljsjs.util.trim([cljs.core.str(classes),cljs.core.str(" "),cljs.core.str(cljs.core.constant$keyword$className.cljs$core$IFn$_invoke$arity$1(props))].join('')),cljs.core.constant$keyword$on_DASH_mouse_DASH_out,((function (this$,classes,id,dropdown_id,toggleOnHover,_,___$1,hidden,dropdown_cursor,hidden_QMARK_,on_shown,on_hidden,___$2,hidden_QMARK___$1,visible_QMARK_,menu_items_cursor,always_inactive,___$3,on_set_select_item,___$4,on_item_select){
return (function (e){
if(cljs.core.truth_(toggleOnHover)){
return rubix_bootstrap.components.menu.hide_dropdown(e,dropdown_id,dropdown_cursor);
} else {
return null;
}
});})(this$,classes,id,dropdown_id,toggleOnHover,_,___$1,hidden,dropdown_cursor,hidden_QMARK_,on_shown,on_hidden,___$2,hidden_QMARK___$1,visible_QMARK_,menu_items_cursor,always_inactive,___$3,on_set_select_item,___$4,on_item_select))
,cljs.core.constant$keyword$on_DASH_mouse_DASH_over,((function (this$,classes,id,dropdown_id,toggleOnHover,_,___$1,hidden,dropdown_cursor,hidden_QMARK_,on_shown,on_hidden,___$2,hidden_QMARK___$1,visible_QMARK_,menu_items_cursor,always_inactive,___$3,on_set_select_item,___$4,on_item_select){
return (function (e){
return rubix_bootstrap.components.menu.show_dropdown(e,dropdown_id,dropdown_cursor);
});})(this$,classes,id,dropdown_id,toggleOnHover,_,___$1,hidden,dropdown_cursor,hidden_QMARK_,on_shown,on_hidden,___$2,hidden_QMARK___$1,visible_QMARK_,menu_items_cursor,always_inactive,___$3,on_set_select_item,___$4,on_item_select))
], null)], 0)),cljsjs.util.map_children(((function (this$,classes,id,dropdown_id,toggleOnHover,_,___$1,hidden,dropdown_cursor,hidden_QMARK_,on_shown,on_hidden,___$2,hidden_QMARK___$1,visible_QMARK_,menu_items_cursor,always_inactive,___$3,on_set_select_item,___$4,on_item_select){
return (function (i,c){
return React.cloneElement(c,{"menu": id, "dropdown": dropdown_id, "alwaysInactive": always_inactive, "on-item-select": on_item_select, "key": i});
});})(this$,classes,id,dropdown_id,toggleOnHover,_,___$1,hidden,dropdown_cursor,hidden_QMARK_,on_shown,on_hidden,___$2,hidden_QMARK___$1,visible_QMARK_,menu_items_cursor,always_inactive,___$3,on_set_select_item,___$4,on_item_select))
,cljs.core.constant$keyword$children.cljs$core$IFn$_invoke$arity$1(props))], null);
});
rubix_bootstrap.components.menu.menu = cljs.core.with_meta(rubix_bootstrap.components.menu.menu_class,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$component_DASH_will_DASH_unmount,(function (this$){
var id = (this$["id"]);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(rubix_bootstrap.components.menu.menus,cljs.core.dissoc,id);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(rubix_bootstrap.components.menu.menu_items,cljs.core.dissoc,id);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(rubix_bootstrap.components.menu.menu_items_set,cljs.core.dissoc,id);
})], null));
rubix_bootstrap.components.menu.gen_classes_menu_item = (function rubix_bootstrap$components$menu$gen_classes_menu_item(props){
var disabled_QMARK_ = cljs.core.constant$keyword$disabled.cljs$core$IFn$_invoke$arity$1(props);
return [cljs.core.str((cljs.core.truth_(disabled_QMARK_)?"disabled ":null))].join('');
});
rubix_bootstrap.components.menu.key_down_menu = (function rubix_bootstrap$components$menu$key_down_menu(e,menu_cursor,menu_items_cursor,id){
e.preventDefault();

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((e["key"]),"ArrowDown")){
var total = (cljs.core.count((function (){var G__14271 = menu_items_cursor;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14271) : cljs.core.deref.call(null,G__14271));
})()) - (1));
var idx = cljsjs.util.indexOf((function (){var G__14272 = menu_items_cursor;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14272) : cljs.core.deref.call(null,G__14272));
})(),id);
var idx__$1 = (((idx >= total))?(0):(idx + (1)));
var next_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__14273 = menu_items_cursor;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14273) : cljs.core.deref.call(null,G__14273));
})(),idx__$1);
var item_cursor = reagent.core.cursor(menu_cursor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [next_id], null));
var this$ = cljs.core.constant$keyword$this.cljs$core$IFn$_invoke$arity$1((function (){var G__14274 = item_cursor;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14274) : cljs.core.deref.call(null,G__14274));
})());
var dom_node = reagent.core.dom_node(this$);
var menu_item = dom_node.querySelector("a[role=menuitem]");
rubix_bootstrap.components.menu.deactivate_items(menu_cursor);

if(!((dom_node == null))){
(this$["is-active"] = true);

var G__14275_14283 = dom_node;
var G__14276_14284 = "active";
goog.dom.classes.add(G__14275_14283,G__14276_14284);
} else {
}

return menu_item.focus();
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((e["key"]),"ArrowUp")){
var total = (cljs.core.count((function (){var G__14277 = menu_items_cursor;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14277) : cljs.core.deref.call(null,G__14277));
})()) - (1));
var idx = cljsjs.util.indexOf((function (){var G__14278 = menu_items_cursor;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14278) : cljs.core.deref.call(null,G__14278));
})(),id);
var idx__$1 = (((idx <= (0)))?total:(idx - (1)));
var prev_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__14279 = menu_items_cursor;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14279) : cljs.core.deref.call(null,G__14279));
})(),idx__$1);
var item_cursor = reagent.core.cursor(menu_cursor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [prev_id], null));
var this$ = cljs.core.constant$keyword$this.cljs$core$IFn$_invoke$arity$1((function (){var G__14280 = item_cursor;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14280) : cljs.core.deref.call(null,G__14280));
})());
var dom_node = reagent.core.dom_node(this$);
var menu_item = dom_node.querySelector("a[role=menuitem]");
rubix_bootstrap.components.menu.deactivate_items(menu_cursor);

if(!((dom_node == null))){
(this$["is-active"] = true);

var G__14281_14285 = dom_node;
var G__14282_14286 = "active";
goog.dom.classes.add(G__14281_14285,G__14282_14286);
} else {
}

return menu_item.focus();
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((e["key"]),"Enter")){
var item_cursor = reagent.core.cursor(menu_cursor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null));
return rubix_bootstrap.components.menu.menu_item_click(menu_cursor,item_cursor);
} else {
return null;
}
}
}
});
rubix_bootstrap.components.menu.menu_item = (function rubix_bootstrap$components$menu$menu_item(props){
cljsjs.util.debug.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["menu-item"], 0));

var this$ = reagent.core.current_component();
var id = cljsjs.util.get_id(this$,props);
var menu_id = cljs.core.constant$keyword$menu.cljs$core$IFn$_invoke$arity$1(props);
var dropdown_id = cljs.core.constant$keyword$dropdown.cljs$core$IFn$_invoke$arity$1(props);
var dropdown_cursor = reagent.core.cursor(rubix_bootstrap.components.menu.dropdowns,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dropdown_id], null));
var menu_cursor = reagent.core.cursor(rubix_bootstrap.components.menu.menus,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [menu_id], null));
var menu_items_set_cursor = reagent.core.cursor(rubix_bootstrap.components.menu.menu_items_set,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [menu_id], null));
var menu_items_cursor = reagent.core.cursor(rubix_bootstrap.components.menu.menu_items,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [menu_id], null));
var item_cursor = reagent.core.cursor(menu_cursor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null));
var always_inactive = cljs.core.constant$keyword$alwaysInactive.cljs$core$IFn$_invoke$arity$1(props);
var active_QMARK_ = ((!(((this$["is-active?"]) == null)))?(this$["is-active?"]):cljs.core.constant$keyword$active.cljs$core$IFn$_invoke$arity$1(props));
var active_QMARK___$1 = ((!((always_inactive == null)))?cljs.core.not(always_inactive):active_QMARK_);
var _ = (this$["is-active?"] = active_QMARK___$1);
var ___$1 = (function (){var G__14291 = item_cursor;
var G__14292 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$props,props,cljs.core.constant$keyword$this,this$], null);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__14291,G__14292) : cljs.core.reset_BANG_.call(null,G__14291,G__14292));
})();
var classes = rubix_bootstrap.components.menu.gen_classes_menu_item(props);
var header_QMARK_ = cljs.core.constant$keyword$header.cljs$core$IFn$_invoke$arity$1(props);
var h = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$li,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$role,"presentation",cljs.core.constant$keyword$class,"dropdown-header"], null),cljs.core.constant$keyword$children.cljs$core$IFn$_invoke$arity$1(props)], null);
var divider_QMARK_ = cljs.core.constant$keyword$divider.cljs$core$IFn$_invoke$arity$1(props);
var hidden_QMARK_ = cljs.core.constant$keyword$hidden.cljs$core$IFn$_invoke$arity$1((function (){var G__14293 = dropdown_cursor;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14293) : cljs.core.deref.call(null,G__14293));
})());
var d = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$li,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$role,"presentation",cljs.core.constant$keyword$class,"divider"], null)], null);
var no_hover_QMARK_ = cljs.core.constant$keyword$noHover.cljs$core$IFn$_invoke$arity$1(props);
var final_props = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([reagent.core.props(this$),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$role,"presentation",cljs.core.constant$keyword$class,cljsjs.util.trim([cljs.core.str(classes),cljs.core.str(" "),cljs.core.str(cljs.core.constant$keyword$className.cljs$core$IFn$_invoke$arity$1(props))].join(''))], null)], 0));
var n = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$li,final_props,cljs.core.constant$keyword$children.cljs$core$IFn$_invoke$arity$1(props)], null);
var check_if_active = ((function (this$,id,menu_id,dropdown_id,dropdown_cursor,menu_cursor,menu_items_set_cursor,menu_items_cursor,item_cursor,always_inactive,active_QMARK_,active_QMARK___$1,_,___$1,classes,header_QMARK_,h,divider_QMARK_,hidden_QMARK_,d,no_hover_QMARK_,final_props,n){
return (function (cb){
if(cljs.core.not(always_inactive)){
return (cb.cljs$core$IFn$_invoke$arity$0 ? cb.cljs$core$IFn$_invoke$arity$0() : cb.call(null));
} else {
return null;
}
});})(this$,id,menu_id,dropdown_id,dropdown_cursor,menu_cursor,menu_items_set_cursor,menu_items_cursor,item_cursor,always_inactive,active_QMARK_,active_QMARK___$1,_,___$1,classes,header_QMARK_,h,divider_QMARK_,hidden_QMARK_,d,no_hover_QMARK_,final_props,n))
;
if(cljs.core.truth_(header_QMARK_)){
if(cljs.core.not(hidden_QMARK_)){
return h;
} else {
return null;
}
} else {
if(cljs.core.truth_(divider_QMARK_)){
if(cljs.core.not(hidden_QMARK_)){
return d;
} else {
return null;
}
} else {
if(cljs.core.truth_(no_hover_QMARK_)){
if(cljs.core.not(hidden_QMARK_)){
return n;
} else {
return null;
}
} else {
var is_stored_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__14294 = menu_items_set_cursor;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14294) : cljs.core.deref.call(null,G__14294));
})(),id);
var final_props__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([final_props,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$class,cljsjs.util.trim([cljs.core.str((cljs.core.truth_(active_QMARK___$1)?"active ":null)),cljs.core.str(cljs.core.constant$keyword$class.cljs$core$IFn$_invoke$arity$1(final_props))].join(''))], null)], 0));
var ___$2 = (((is_stored_QMARK_ == null))?(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(menu_items_set_cursor,cljs.core.conj,id);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(menu_items_cursor,cljs.core.conj,id);
})()
:null);
if(cljs.core.not(hidden_QMARK_)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$li,final_props__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$a,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$role,"menuitem",cljs.core.constant$keyword$tabIndex,"-1",cljs.core.constant$keyword$href,cljs.core.constant$keyword$href.cljs$core$IFn$_invoke$arity$1(props),cljs.core.constant$keyword$on_DASH_key_DASH_down,((function (is_stored_QMARK_,final_props__$1,___$2,this$,id,menu_id,dropdown_id,dropdown_cursor,menu_cursor,menu_items_set_cursor,menu_items_cursor,item_cursor,always_inactive,active_QMARK_,active_QMARK___$1,_,___$1,classes,header_QMARK_,h,divider_QMARK_,hidden_QMARK_,d,no_hover_QMARK_,final_props,n,check_if_active){
return (function (e){
return check_if_active(((function (is_stored_QMARK_,final_props__$1,___$2,this$,id,menu_id,dropdown_id,dropdown_cursor,menu_cursor,menu_items_set_cursor,menu_items_cursor,item_cursor,always_inactive,active_QMARK_,active_QMARK___$1,_,___$1,classes,header_QMARK_,h,divider_QMARK_,hidden_QMARK_,d,no_hover_QMARK_,final_props,n,check_if_active){
return (function (){
return rubix_bootstrap.components.menu.key_down_menu(e,menu_cursor,menu_items_cursor,id);
});})(is_stored_QMARK_,final_props__$1,___$2,this$,id,menu_id,dropdown_id,dropdown_cursor,menu_cursor,menu_items_set_cursor,menu_items_cursor,item_cursor,always_inactive,active_QMARK_,active_QMARK___$1,_,___$1,classes,header_QMARK_,h,divider_QMARK_,hidden_QMARK_,d,no_hover_QMARK_,final_props,n,check_if_active))
);
});})(is_stored_QMARK_,final_props__$1,___$2,this$,id,menu_id,dropdown_id,dropdown_cursor,menu_cursor,menu_items_set_cursor,menu_items_cursor,item_cursor,always_inactive,active_QMARK_,active_QMARK___$1,_,___$1,classes,header_QMARK_,h,divider_QMARK_,hidden_QMARK_,d,no_hover_QMARK_,final_props,n,check_if_active))
,cljs.core.constant$keyword$on_DASH_mouse_DASH_over,((function (is_stored_QMARK_,final_props__$1,___$2,this$,id,menu_id,dropdown_id,dropdown_cursor,menu_cursor,menu_items_set_cursor,menu_items_cursor,item_cursor,always_inactive,active_QMARK_,active_QMARK___$1,_,___$1,classes,header_QMARK_,h,divider_QMARK_,hidden_QMARK_,d,no_hover_QMARK_,final_props,n,check_if_active){
return (function (e){
return check_if_active(((function (is_stored_QMARK_,final_props__$1,___$2,this$,id,menu_id,dropdown_id,dropdown_cursor,menu_cursor,menu_items_set_cursor,menu_items_cursor,item_cursor,always_inactive,active_QMARK_,active_QMARK___$1,_,___$1,classes,header_QMARK_,h,divider_QMARK_,hidden_QMARK_,d,no_hover_QMARK_,final_props,n,check_if_active){
return (function (){
return rubix_bootstrap.components.menu.show_dropdown(e,dropdown_id,dropdown_cursor);
});})(is_stored_QMARK_,final_props__$1,___$2,this$,id,menu_id,dropdown_id,dropdown_cursor,menu_cursor,menu_items_set_cursor,menu_items_cursor,item_cursor,always_inactive,active_QMARK_,active_QMARK___$1,_,___$1,classes,header_QMARK_,h,divider_QMARK_,hidden_QMARK_,d,no_hover_QMARK_,final_props,n,check_if_active))
);
});})(is_stored_QMARK_,final_props__$1,___$2,this$,id,menu_id,dropdown_id,dropdown_cursor,menu_cursor,menu_items_set_cursor,menu_items_cursor,item_cursor,always_inactive,active_QMARK_,active_QMARK___$1,_,___$1,classes,header_QMARK_,h,divider_QMARK_,hidden_QMARK_,d,no_hover_QMARK_,final_props,n,check_if_active))
,cljs.core.constant$keyword$on_DASH_click,((function (is_stored_QMARK_,final_props__$1,___$2,this$,id,menu_id,dropdown_id,dropdown_cursor,menu_cursor,menu_items_set_cursor,menu_items_cursor,item_cursor,always_inactive,active_QMARK_,active_QMARK___$1,_,___$1,classes,header_QMARK_,h,divider_QMARK_,hidden_QMARK_,d,no_hover_QMARK_,final_props,n,check_if_active){
return (function (e){
e.preventDefault();

return check_if_active(((function (is_stored_QMARK_,final_props__$1,___$2,this$,id,menu_id,dropdown_id,dropdown_cursor,menu_cursor,menu_items_set_cursor,menu_items_cursor,item_cursor,always_inactive,active_QMARK_,active_QMARK___$1,_,___$1,classes,header_QMARK_,h,divider_QMARK_,hidden_QMARK_,d,no_hover_QMARK_,final_props,n,check_if_active){
return (function (){
return rubix_bootstrap.components.menu.menu_item_click(menu_cursor,item_cursor);
});})(is_stored_QMARK_,final_props__$1,___$2,this$,id,menu_id,dropdown_id,dropdown_cursor,menu_cursor,menu_items_set_cursor,menu_items_cursor,item_cursor,always_inactive,active_QMARK_,active_QMARK___$1,_,___$1,classes,header_QMARK_,h,divider_QMARK_,hidden_QMARK_,d,no_hover_QMARK_,final_props,n,check_if_active))
);
});})(is_stored_QMARK_,final_props__$1,___$2,this$,id,menu_id,dropdown_id,dropdown_cursor,menu_cursor,menu_items_set_cursor,menu_items_cursor,item_cursor,always_inactive,active_QMARK_,active_QMARK___$1,_,___$1,classes,header_QMARK_,h,divider_QMARK_,hidden_QMARK_,d,no_hover_QMARK_,final_props,n,check_if_active))
,cljs.core.constant$keyword$on_DASH_touch_DASH_end,((function (is_stored_QMARK_,final_props__$1,___$2,this$,id,menu_id,dropdown_id,dropdown_cursor,menu_cursor,menu_items_set_cursor,menu_items_cursor,item_cursor,always_inactive,active_QMARK_,active_QMARK___$1,_,___$1,classes,header_QMARK_,h,divider_QMARK_,hidden_QMARK_,d,no_hover_QMARK_,final_props,n,check_if_active){
return (function (e){
e.preventDefault();

return check_if_active(((function (is_stored_QMARK_,final_props__$1,___$2,this$,id,menu_id,dropdown_id,dropdown_cursor,menu_cursor,menu_items_set_cursor,menu_items_cursor,item_cursor,always_inactive,active_QMARK_,active_QMARK___$1,_,___$1,classes,header_QMARK_,h,divider_QMARK_,hidden_QMARK_,d,no_hover_QMARK_,final_props,n,check_if_active){
return (function (){
return rubix_bootstrap.components.menu.menu_item_click(menu_cursor,item_cursor);
});})(is_stored_QMARK_,final_props__$1,___$2,this$,id,menu_id,dropdown_id,dropdown_cursor,menu_cursor,menu_items_set_cursor,menu_items_cursor,item_cursor,always_inactive,active_QMARK_,active_QMARK___$1,_,___$1,classes,header_QMARK_,h,divider_QMARK_,hidden_QMARK_,d,no_hover_QMARK_,final_props,n,check_if_active))
);
});})(is_stored_QMARK_,final_props__$1,___$2,this$,id,menu_id,dropdown_id,dropdown_cursor,menu_cursor,menu_items_set_cursor,menu_items_cursor,item_cursor,always_inactive,active_QMARK_,active_QMARK___$1,_,___$1,classes,header_QMARK_,h,divider_QMARK_,hidden_QMARK_,d,no_hover_QMARK_,final_props,n,check_if_active))
], null),cljs.core.constant$keyword$children.cljs$core$IFn$_invoke$arity$1(props)], null)], null);
} else {
return null;
}
}
}
}
});
rubix_bootstrap.components.menu.dropdown = (function rubix_bootstrap$components$menu$dropdown(props){
cljsjs.util.debug.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["dropdown"], 0));

var this$ = reagent.core.current_component();
var id = cljsjs.util.get_id(this$,props);
var on_set_select_item = (function (){var or__4307__auto__ = cljs.core.constant$keyword$onSetSelectItem.cljs$core$IFn$_invoke$arity$1(props);
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
var _ = (function (){var G__14296 = ((function (this$,id,on_set_select_item){
return (function (k,v){
return rubix_bootstrap.components.menu.select_item(id,k,v);
});})(this$,id,on_set_select_item))
;
return (on_set_select_item.cljs$core$IFn$_invoke$arity$1 ? on_set_select_item.cljs$core$IFn$_invoke$arity$1(G__14296) : on_set_select_item.call(null,G__14296));
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([props,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$class,cljsjs.util.trim([cljs.core.str("dropdown "),cljs.core.str(cljs.core.constant$keyword$className.cljs$core$IFn$_invoke$arity$1(props))].join(''))], null)], 0)),cljsjs.util.map_children(((function (this$,id,on_set_select_item,_){
return (function (i,c){
return React.cloneElement(c,{"dropdown": id, "toggleOnHover": cljs.core.constant$keyword$toggleOnHover.cljs$core$IFn$_invoke$arity$1(props), "onDropdownSetSelectItem": on_set_select_item, "key": i});
});})(this$,id,on_set_select_item,_))
,cljs.core.constant$keyword$children.cljs$core$IFn$_invoke$arity$1(props))], null);
});
rubix_bootstrap.components.menu.dropdown_button = (function rubix_bootstrap$components$menu$dropdown_button(props){
cljsjs.util.debug.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["dropdown-button"], 0));

var this$ = reagent.core.current_component();
var active_QMARK_ = cljs.core.constant$keyword$pressed.cljs$core$IFn$_invoke$arity$1(props);
var tab_QMARK_ = cljs.core.constant$keyword$tab.cljs$core$IFn$_invoke$arity$1(props);
var nav_QMARK_ = cljs.core.constant$keyword$nav.cljs$core$IFn$_invoke$arity$1(props);
var dropdown_id = cljs.core.constant$keyword$dropdown.cljs$core$IFn$_invoke$arity$1(props);
var dropdown_cursor = reagent.core.cursor(rubix_bootstrap.components.menu.dropdowns,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dropdown_id], null));
var classes = [cljs.core.str("dropdown-toggle "),cljs.core.str((cljs.core.truth_(active_QMARK_)?"active ":null))].join('');
var toggle_on_hover_QMARK_ = cljs.core.constant$keyword$toggleOnHover.cljs$core$IFn$_invoke$arity$1(props);
var on_click = (function (){var or__4307__auto__ = cljs.core.constant$keyword$onClick.cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(or__4307__auto__)){
return or__4307__auto__;
} else {
var or__4307__auto____$1 = cljs.core.constant$keyword$on_DASH_click.cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(or__4307__auto____$1)){
return or__4307__auto____$1;
} else {
return ((function (or__4307__auto____$1,or__4307__auto__,this$,active_QMARK_,tab_QMARK_,nav_QMARK_,dropdown_id,dropdown_cursor,classes,toggle_on_hover_QMARK_){
return (function (){
return null;
});
;})(or__4307__auto____$1,or__4307__auto__,this$,active_QMARK_,tab_QMARK_,nav_QMARK_,dropdown_id,dropdown_cursor,classes,toggle_on_hover_QMARK_))
}
}
})();
var toggle_dropdown_event = ((function (this$,active_QMARK_,tab_QMARK_,nav_QMARK_,dropdown_id,dropdown_cursor,classes,toggle_on_hover_QMARK_,on_click){
return (function (e){
rubix_bootstrap.components.menu.force_hide_dropdown();

rubix_bootstrap.components.menu.toggle_dropdown(e,dropdown_id,dropdown_cursor);

if(cljs.core.truth_(on_click)){
return (on_click.cljs$core$IFn$_invoke$arity$0 ? on_click.cljs$core$IFn$_invoke$arity$0() : on_click.call(null));
} else {
return null;
}
});})(this$,active_QMARK_,tab_QMARK_,nav_QMARK_,dropdown_id,dropdown_cursor,classes,toggle_on_hover_QMARK_,on_click))
;
var show_dropdown_event = ((function (this$,active_QMARK_,tab_QMARK_,nav_QMARK_,dropdown_id,dropdown_cursor,classes,toggle_on_hover_QMARK_,on_click,toggle_dropdown_event){
return (function (e){
return rubix_bootstrap.components.menu.show_dropdown(e,dropdown_id,dropdown_cursor);
});})(this$,active_QMARK_,tab_QMARK_,nav_QMARK_,dropdown_id,dropdown_cursor,classes,toggle_on_hover_QMARK_,on_click,toggle_dropdown_event))
;
var hide_dropdown_event = ((function (this$,active_QMARK_,tab_QMARK_,nav_QMARK_,dropdown_id,dropdown_cursor,classes,toggle_on_hover_QMARK_,on_click,toggle_dropdown_event,show_dropdown_event){
return (function (e){
return rubix_bootstrap.components.menu.hide_dropdown(e,dropdown_id,dropdown_cursor);
});})(this$,active_QMARK_,tab_QMARK_,nav_QMARK_,dropdown_id,dropdown_cursor,classes,toggle_on_hover_QMARK_,on_click,toggle_dropdown_event,show_dropdown_event))
;
if(cljs.core.truth_((function (){var or__4307__auto__ = tab_QMARK_;
if(cljs.core.truth_(or__4307__auto__)){
return or__4307__auto__;
} else {
return nav_QMARK_;
}
})())){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$a,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([props,new cljs.core.PersistentArrayMap(null, 8, [cljs.core.constant$keyword$href,"#",cljs.core.constant$keyword$class,cljsjs.util.trim(classes),cljs.core.constant$keyword$hidden,null,cljs.core.constant$keyword$onDropdownSetSelectItem,null,cljs.core.constant$keyword$data_DASH_toggle,"dropdown",cljs.core.constant$keyword$on_DASH_click,toggle_dropdown_event,cljs.core.constant$keyword$on_DASH_mouse_DASH_out,(cljs.core.truth_(toggle_on_hover_QMARK_)?hide_dropdown_event:null),cljs.core.constant$keyword$on_DASH_mouse_DASH_over,(cljs.core.truth_(toggle_on_hover_QMARK_)?show_dropdown_event:null)], null)], 0)),cljs.core.constant$keyword$children.cljs$core$IFn$_invoke$arity$1(props)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rubix_bootstrap.components.button.button,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([props,new cljs.core.PersistentArrayMap(null, 8, [cljs.core.constant$keyword$type,"button",cljs.core.constant$keyword$className,cljsjs.util.trim(classes),cljs.core.constant$keyword$hidden,null,cljs.core.constant$keyword$onDropdownSetSelectItem,null,cljs.core.constant$keyword$data_DASH_toggle,"dropdown",cljs.core.constant$keyword$on_DASH_click,toggle_dropdown_event,cljs.core.constant$keyword$on_DASH_mouse_DASH_out,(cljs.core.truth_(toggle_on_hover_QMARK_)?hide_dropdown_event:null),cljs.core.constant$keyword$on_DASH_mouse_DASH_over,(cljs.core.truth_(toggle_on_hover_QMARK_)?show_dropdown_event:null)], null)], 0))], null);
}
});
cljsjs.dispatcher.subscribe(cljs.core.constant$keyword$click_DASH_menu,(function (p__14297){
var map__14298 = p__14297;
var map__14298__$1 = ((cljs.core.seq_QMARK_(map__14298))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14298):map__14298);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14298__$1,cljs.core.constant$keyword$data);
return rubix_bootstrap.components.menu.hide_all_dropdowns(data);
}));
