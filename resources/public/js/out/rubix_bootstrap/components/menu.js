// Compiled by ClojureScript 0.0-3269 {}
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
rubix_bootstrap.components.menu.dropdowns = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof rubix_bootstrap.components.menu.menus !== 'undefined'){
} else {
rubix_bootstrap.components.menu.menus = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof rubix_bootstrap.components.menu.menu_items !== 'undefined'){
} else {
rubix_bootstrap.components.menu.menu_items = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof rubix_bootstrap.components.menu.menu_items_set !== 'undefined'){
} else {
rubix_bootstrap.components.menu.menu_items_set = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof rubix_bootstrap.components.menu.zIndex !== 'undefined'){
} else {
rubix_bootstrap.components.menu.zIndex = reagent.core.atom.call(null,(0));
}
rubix_bootstrap.components.menu.reset_globals_BANG_ = (function rubix_bootstrap$components$menu$reset_globals_BANG_(){
return cljs.core.reset_BANG_.call(null,rubix_bootstrap.components.menu.zIndex,(0));
});
rubix_bootstrap.components.menu.getZIndex = (function rubix_bootstrap$components$menu$getZIndex(){
return cljs.core.swap_BANG_.call(null,rubix_bootstrap.components.menu.zIndex,cljs.core.inc);
});
rubix_bootstrap.components.menu.show_dropdown = (function rubix_bootstrap$components$menu$show_dropdown(e,dropdown_id,dropdown_cursor){
if(cljs.core.truth_(e)){
e.preventDefault();
} else {
}

var d = cljs.core.deref.call(null,dropdown_cursor);
var hidden_QMARK_ = new cljs.core.Keyword(null,"hidden","hidden",-312506092).cljs$core$IFn$_invoke$arity$1(d);
var on_shown = new cljs.core.Keyword(null,"on-shown","on-shown",-1181773287).cljs$core$IFn$_invoke$arity$1(d);
if(cljs.core.truth_((function (){var and__4295__auto__ = hidden_QMARK_;
if(cljs.core.truth_(and__4295__auto__)){
return !((dropdown_id == null));
} else {
return and__4295__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,dropdown_cursor,cljs.core.assoc,new cljs.core.Keyword(null,"hidden","hidden",-312506092),false);

if(cljs.core.truth_(on_shown)){
return on_shown.call(null);
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

var d = cljs.core.deref.call(null,dropdown_cursor);
var hidden_QMARK_ = new cljs.core.Keyword(null,"hidden","hidden",-312506092).cljs$core$IFn$_invoke$arity$1(d);
var on_hidden = new cljs.core.Keyword(null,"on-hidden","on-hidden",-622634910).cljs$core$IFn$_invoke$arity$1(d);
if((cljs.core.not.call(null,hidden_QMARK_)) && (!((dropdown_id == null)))){
cljs.core.swap_BANG_.call(null,dropdown_cursor,cljs.core.assoc,new cljs.core.Keyword(null,"hidden","hidden",-312506092),true);

if(cljs.core.truth_(on_hidden)){
return on_hidden.call(null);
} else {
return null;
}
} else {
return null;
}
});
rubix_bootstrap.components.menu.force_hide_dropdown = (function rubix_bootstrap$components$menu$force_hide_dropdown(){
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p__14431){
var vec__14432 = p__14431;
var id = cljs.core.nth.call(null,vec__14432,(0),null);
var v = cljs.core.nth.call(null,vec__14432,(1),null);
var dropdown_cursor = reagent.core.cursor.call(null,rubix_bootstrap.components.menu.dropdowns,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null));
return rubix_bootstrap.components.menu.hide_dropdown.call(null,null,id,dropdown_cursor);
}),cljs.core.deref.call(null,rubix_bootstrap.components.menu.dropdowns)));
});
rubix_bootstrap.components.menu.hide_all_dropdowns = (function rubix_bootstrap$components$menu$hide_all_dropdowns(e){
if(cljs.core.truth_(e)){
e.preventDefault();
} else {
}

var target = e.target;
var is_dropdown = goog.dom.getAncestorByClass(target,"dropdown");
var is_dropup = goog.dom.getAncestorByClass(target,"dropup");
var is_dropdown_toggle = goog.dom.getAncestorByClass(target,"dropdown-toggle");
if(cljs.core.not.call(null,(function (){var or__4307__auto__ = is_dropdown;
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
return rubix_bootstrap.components.menu.force_hide_dropdown.call(null);
} else {
return null;
}
});
rubix_bootstrap.components.menu.toggle_dropdown = (function rubix_bootstrap$components$menu$toggle_dropdown(e,dropdown_id,dropdown_cursor){
if(cljs.core.truth_(e)){
e.preventDefault();
} else {
}

var d = cljs.core.deref.call(null,dropdown_cursor);
var hidden = new cljs.core.Keyword(null,"hidden","hidden",-312506092).cljs$core$IFn$_invoke$arity$1(d);
if(cljs.core.truth_(hidden)){
return rubix_bootstrap.components.menu.show_dropdown.call(null,e,dropdown_id,dropdown_cursor);
} else {
return rubix_bootstrap.components.menu.hide_dropdown.call(null,e,dropdown_id,dropdown_cursor);
}
});
rubix_bootstrap.components.menu.gen_classes_menu = (function rubix_bootstrap$components$menu$gen_classes_menu(props){
var props__$1 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__14439){
var vec__14440 = p__14439;
var k = cljs.core.nth.call(null,vec__14440,(0),null);
var v = cljs.core.nth.call(null,vec__14440,(1),null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.keyword.call(null,k)],[v]);
}),props));
var left_QMARK_ = new cljs.core.Keyword(null,"alignLeft","alignLeft",-1137602198).cljs$core$IFn$_invoke$arity$1(props__$1);
var right_QMARK_ = new cljs.core.Keyword(null,"alignRight","alignRight",-466547794).cljs$core$IFn$_invoke$arity$1(props__$1);
var bsStyle = ((!((new cljs.core.Keyword(null,"bsStyle","bsStyle",493669071).cljs$core$IFn$_invoke$arity$1(props__$1) == null)))?cljs.core.filter.call(null,cljs.core.not_empty,clojure.string.split.call(null,new cljs.core.Keyword(null,"bsStyle","bsStyle",493669071).cljs$core$IFn$_invoke$arity$1(props__$1),/\s|,/)):null);
var styles = ((!((bsStyle == null)))?cljs.core.apply.call(null,cljs.core.str,(function (){var iter__5061__auto__ = ((function (props__$1,left_QMARK_,right_QMARK_,bsStyle){
return (function rubix_bootstrap$components$menu$gen_classes_menu_$_iter__14441(s__14442){
return (new cljs.core.LazySeq(null,((function (props__$1,left_QMARK_,right_QMARK_,bsStyle){
return (function (){
var s__14442__$1 = s__14442;
while(true){
var temp__4423__auto__ = cljs.core.seq.call(null,s__14442__$1);
if(temp__4423__auto__){
var s__14442__$2 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14442__$2)){
var c__5059__auto__ = cljs.core.chunk_first.call(null,s__14442__$2);
var size__5060__auto__ = cljs.core.count.call(null,c__5059__auto__);
var b__14444 = cljs.core.chunk_buffer.call(null,size__5060__auto__);
if((function (){var i__14443 = (0);
while(true){
if((i__14443 < size__5060__auto__)){
var st = cljs.core._nth.call(null,c__5059__auto__,i__14443);
cljs.core.chunk_append.call(null,b__14444,[cljs.core.str(" menu-"),cljs.core.str(clojure.string.trim.call(null,st))].join(''));

var G__14445 = (i__14443 + (1));
i__14443 = G__14445;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14444),rubix_bootstrap$components$menu$gen_classes_menu_$_iter__14441.call(null,cljs.core.chunk_rest.call(null,s__14442__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14444),null);
}
} else {
var st = cljs.core.first.call(null,s__14442__$2);
return cljs.core.cons.call(null,[cljs.core.str(" menu-"),cljs.core.str(clojure.string.trim.call(null,st))].join(''),rubix_bootstrap$components$menu$gen_classes_menu_$_iter__14441.call(null,cljs.core.rest.call(null,s__14442__$2)));
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
return iter__5061__auto__.call(null,bsStyle);
})()):" menu-default");
return [cljs.core.str("dropdown-menu "),cljs.core.str((cljs.core.truth_(left_QMARK_)?"dropdown-menu-left ":null)),cljs.core.str((cljs.core.truth_(right_QMARK_)?"dropdown-menu-right ":null)),cljs.core.str(styles)].join('');
});
rubix_bootstrap.components.menu.deactivate_items = (function rubix_bootstrap$components$menu$deactivate_items(menu_cursor){
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p__14448){
var vec__14449 = p__14448;
var id = cljs.core.nth.call(null,vec__14449,(0),null);
var v = cljs.core.nth.call(null,vec__14449,(1),null);
var item_cursor = reagent.core.cursor.call(null,menu_cursor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null));
var this$ = new cljs.core.Keyword(null,"this","this",-611633625).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,item_cursor));
var dom_node = reagent.core.dom_node.call(null,this$);
if(!((dom_node == null))){
(this$["is-active?"] = false);

return goog.dom.classes.remove(dom_node,"active");
} else {
return null;
}
}),cljs.core.deref.call(null,menu_cursor)));
});
rubix_bootstrap.components.menu.activate_item = (function rubix_bootstrap$components$menu$activate_item(menu_cursor,item_cursor){
rubix_bootstrap.components.menu.deactivate_items.call(null,menu_cursor);

var this$ = new cljs.core.Keyword(null,"this","this",-611633625).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,item_cursor));
var dom_node = reagent.core.dom_node.call(null,this$);
if(!((dom_node == null))){
(this$["is-active?"] = true);

return goog.dom.classes.add(dom_node,"active");
} else {
return null;
}
});
rubix_bootstrap.components.menu.menu_item_click = (function rubix_bootstrap$components$menu$menu_item_click(menu_cursor,item_cursor){
rubix_bootstrap.components.menu.activate_item.call(null,menu_cursor,item_cursor);

var props = new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,item_cursor));
var on_item_select = new cljs.core.Keyword(null,"on-item-select","on-item-select",-1142117016).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(on_item_select)){
return on_item_select.call(null,cljs.core.clj__GT_js.call(null,props));
} else {
return null;
}
});
rubix_bootstrap.components.menu.select_item = (function rubix_bootstrap$components$menu$select_item(menu_id,k,v){
var menu_cursor = reagent.core.cursor.call(null,rubix_bootstrap.components.menu.menus,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [menu_id], null));
return cljs.core.doall.call(null,cljs.core.map.call(null,((function (menu_cursor){
return (function (p__14452){
var vec__14453 = p__14452;
var id = cljs.core.nth.call(null,vec__14453,(0),null);
var p = cljs.core.nth.call(null,vec__14453,(1),null);
if(cljs.core._EQ_.call(null,cljs.core.keyword.call(null,k).call(null,new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(p)),v)){
var item_cursor = reagent.core.cursor.call(null,menu_cursor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null));
return rubix_bootstrap.components.menu.activate_item.call(null,menu_cursor,item_cursor);
} else {
return null;
}
});})(menu_cursor))
,cljs.core.deref.call(null,menu_cursor)));
});
rubix_bootstrap.components.menu.menu_class = (function rubix_bootstrap$components$menu$menu_class(props){
cljsjs.util.debug.call(null,"menu");

var this$ = reagent.core.current_component.call(null);
var classes = rubix_bootstrap.components.menu.gen_classes_menu.call(null,props);
var id = cljsjs.util.get_id.call(null,this$,props);
var dropdown_id = new cljs.core.Keyword(null,"dropdown","dropdown",1343185805).cljs$core$IFn$_invoke$arity$1(props);
var toggleOnHover = new cljs.core.Keyword(null,"toggleOnHover","toggleOnHover",1782310243).cljs$core$IFn$_invoke$arity$1(props);
var _ = cljs.core.swap_BANG_.call(null,rubix_bootstrap.components.menu.menus,cljs.core.assoc,id,cljs.core.PersistentArrayMap.EMPTY);
var ___$1 = cljs.core.swap_BANG_.call(null,rubix_bootstrap.components.menu.menu_items_set,cljs.core.assoc,id,cljs.core.PersistentHashSet.EMPTY);
var hidden = new cljs.core.Keyword(null,"hidden","hidden",-312506092).cljs$core$IFn$_invoke$arity$1(props);
var dropdown_cursor = reagent.core.cursor.call(null,rubix_bootstrap.components.menu.dropdowns,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dropdown_id], null));
var hidden_QMARK_ = new cljs.core.Keyword(null,"hidden","hidden",-312506092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,dropdown_cursor));
var on_shown = new cljs.core.Keyword(null,"onShown","onShown",-788063648).cljs$core$IFn$_invoke$arity$1(props);
var on_hidden = new cljs.core.Keyword(null,"onHidden","onHidden",-441246357).cljs$core$IFn$_invoke$arity$1(props);
var ___$2 = (((hidden_QMARK_ == null))?cljs.core.swap_BANG_.call(null,dropdown_cursor,cljs.core.assoc,new cljs.core.Keyword(null,"hidden","hidden",-312506092),((!((hidden == null)))?hidden:true),new cljs.core.Keyword(null,"on-shown","on-shown",-1181773287),on_shown,new cljs.core.Keyword(null,"on-hidden","on-hidden",-622634910),on_hidden):null);
var hidden_QMARK___$1 = new cljs.core.Keyword(null,"hidden","hidden",-312506092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,dropdown_cursor));
var visible_QMARK_ = (cljs.core.truth_(hidden_QMARK___$1)?"none":"block");
var menu_items_cursor = reagent.core.cursor.call(null,rubix_bootstrap.components.menu.menu_items,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null));
var always_inactive = new cljs.core.Keyword(null,"alwaysInactive","alwaysInactive",-1063007376).cljs$core$IFn$_invoke$arity$1(props);
var ___$3 = cljs.core.reset_BANG_.call(null,menu_items_cursor,cljs.core.PersistentVector.EMPTY);
var on_set_select_item = (function (){var or__4307__auto__ = new cljs.core.Keyword(null,"onDropdownSetSelectItem","onDropdownSetSelectItem",-512540334).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(or__4307__auto__)){
return or__4307__auto__;
} else {
var or__4307__auto____$1 = new cljs.core.Keyword(null,"onSetSelectItem","onSetSelectItem",1129790476).cljs$core$IFn$_invoke$arity$1(props);
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
var ___$4 = on_set_select_item.call(null,((function (this$,classes,id,dropdown_id,toggleOnHover,_,___$1,hidden,dropdown_cursor,hidden_QMARK_,on_shown,on_hidden,___$2,hidden_QMARK___$1,visible_QMARK_,menu_items_cursor,always_inactive,___$3,on_set_select_item){
return (function (k,v){
return rubix_bootstrap.components.menu.select_item.call(null,id,k,v);
});})(this$,classes,id,dropdown_id,toggleOnHover,_,___$1,hidden,dropdown_cursor,hidden_QMARK_,on_shown,on_hidden,___$2,hidden_QMARK___$1,visible_QMARK_,menu_items_cursor,always_inactive,___$3,on_set_select_item))
);
var on_item_select = (function (){var or__4307__auto__ = new cljs.core.Keyword(null,"onItemSelect","onItemSelect",781904873).cljs$core$IFn$_invoke$arity$1(props);
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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),cljsjs.util.deep_merge.call(null,reagent.core.props.call(null,this$),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"role","role",-736691072),"menu",new cljs.core.Keyword(null,"aria-labelledby","aria-labelledby",1817118667),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,(function (){var or__4307__auto__ = new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(reagent.core.props.call(null,this$));
if(cljs.core.truth_(or__4307__auto__)){
return or__4307__auto__;
} else {
return new cljs.core.Keyword(null,"container-style","container-style",-240535783).cljs$core$IFn$_invoke$arity$1(reagent.core.props.call(null,this$));
}
})()),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),visible_QMARK_], null)),new cljs.core.Keyword(null,"class","class",-2030961996),cljsjs.util.trim.call(null,[cljs.core.str(classes),cljs.core.str(" "),cljs.core.str(new cljs.core.Keyword(null,"className","className",-1983287057).cljs$core$IFn$_invoke$arity$1(props))].join('')),new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),((function (this$,classes,id,dropdown_id,toggleOnHover,_,___$1,hidden,dropdown_cursor,hidden_QMARK_,on_shown,on_hidden,___$2,hidden_QMARK___$1,visible_QMARK_,menu_items_cursor,always_inactive,___$3,on_set_select_item,___$4,on_item_select){
return (function (e){
if(cljs.core.truth_(toggleOnHover)){
return rubix_bootstrap.components.menu.hide_dropdown.call(null,e,dropdown_id,dropdown_cursor);
} else {
return null;
}
});})(this$,classes,id,dropdown_id,toggleOnHover,_,___$1,hidden,dropdown_cursor,hidden_QMARK_,on_shown,on_hidden,___$2,hidden_QMARK___$1,visible_QMARK_,menu_items_cursor,always_inactive,___$3,on_set_select_item,___$4,on_item_select))
,new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (this$,classes,id,dropdown_id,toggleOnHover,_,___$1,hidden,dropdown_cursor,hidden_QMARK_,on_shown,on_hidden,___$2,hidden_QMARK___$1,visible_QMARK_,menu_items_cursor,always_inactive,___$3,on_set_select_item,___$4,on_item_select){
return (function (e){
return rubix_bootstrap.components.menu.show_dropdown.call(null,e,dropdown_id,dropdown_cursor);
});})(this$,classes,id,dropdown_id,toggleOnHover,_,___$1,hidden,dropdown_cursor,hidden_QMARK_,on_shown,on_hidden,___$2,hidden_QMARK___$1,visible_QMARK_,menu_items_cursor,always_inactive,___$3,on_set_select_item,___$4,on_item_select))
], null)),cljsjs.util.map_children.call(null,((function (this$,classes,id,dropdown_id,toggleOnHover,_,___$1,hidden,dropdown_cursor,hidden_QMARK_,on_shown,on_hidden,___$2,hidden_QMARK___$1,visible_QMARK_,menu_items_cursor,always_inactive,___$3,on_set_select_item,___$4,on_item_select){
return (function (i,c){
return React.cloneElement(c,{"menu": id, "dropdown": dropdown_id, "alwaysInactive": always_inactive, "on-item-select": on_item_select, "key": i});
});})(this$,classes,id,dropdown_id,toggleOnHover,_,___$1,hidden,dropdown_cursor,hidden_QMARK_,on_shown,on_hidden,___$2,hidden_QMARK___$1,visible_QMARK_,menu_items_cursor,always_inactive,___$3,on_set_select_item,___$4,on_item_select))
,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(props))], null);
});
rubix_bootstrap.components.menu.menu = cljs.core.with_meta.call(null,rubix_bootstrap.components.menu.menu_class,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),(function (this$){
var id = (this$["id"]);
cljs.core.swap_BANG_.call(null,rubix_bootstrap.components.menu.menus,cljs.core.dissoc,id);

cljs.core.swap_BANG_.call(null,rubix_bootstrap.components.menu.menu_items,cljs.core.dissoc,id);

return cljs.core.swap_BANG_.call(null,rubix_bootstrap.components.menu.menu_items_set,cljs.core.dissoc,id);
})], null));
rubix_bootstrap.components.menu.gen_classes_menu_item = (function rubix_bootstrap$components$menu$gen_classes_menu_item(props){
var disabled_QMARK_ = new cljs.core.Keyword(null,"disabled","disabled",-1529784218).cljs$core$IFn$_invoke$arity$1(props);
return [cljs.core.str((cljs.core.truth_(disabled_QMARK_)?"disabled ":null))].join('');
});
rubix_bootstrap.components.menu.key_down_menu = (function rubix_bootstrap$components$menu$key_down_menu(e,menu_cursor,menu_items_cursor,id){
e.preventDefault();

if(cljs.core._EQ_.call(null,(e["key"]),"ArrowDown")){
var total = (cljs.core.count.call(null,cljs.core.deref.call(null,menu_items_cursor)) - (1));
var idx = cljsjs.util.indexOf.call(null,cljs.core.deref.call(null,menu_items_cursor),id);
var idx__$1 = (((idx >= total))?(0):(idx + (1)));
var next_id = cljs.core.get.call(null,cljs.core.deref.call(null,menu_items_cursor),idx__$1);
var item_cursor = reagent.core.cursor.call(null,menu_cursor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [next_id], null));
var this$ = new cljs.core.Keyword(null,"this","this",-611633625).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,item_cursor));
var dom_node = reagent.core.dom_node.call(null,this$);
var menu_item = dom_node.querySelector("a[role=menuitem]");
rubix_bootstrap.components.menu.deactivate_items.call(null,menu_cursor);

if(!((dom_node == null))){
(this$["is-active"] = true);

goog.dom.classes.add(dom_node,"active");
} else {
}

return menu_item.focus();
} else {
if(cljs.core._EQ_.call(null,(e["key"]),"ArrowUp")){
var total = (cljs.core.count.call(null,cljs.core.deref.call(null,menu_items_cursor)) - (1));
var idx = cljsjs.util.indexOf.call(null,cljs.core.deref.call(null,menu_items_cursor),id);
var idx__$1 = (((idx <= (0)))?total:(idx - (1)));
var prev_id = cljs.core.get.call(null,cljs.core.deref.call(null,menu_items_cursor),idx__$1);
var item_cursor = reagent.core.cursor.call(null,menu_cursor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [prev_id], null));
var this$ = new cljs.core.Keyword(null,"this","this",-611633625).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,item_cursor));
var dom_node = reagent.core.dom_node.call(null,this$);
var menu_item = dom_node.querySelector("a[role=menuitem]");
rubix_bootstrap.components.menu.deactivate_items.call(null,menu_cursor);

if(!((dom_node == null))){
(this$["is-active"] = true);

goog.dom.classes.add(dom_node,"active");
} else {
}

return menu_item.focus();
} else {
if(cljs.core._EQ_.call(null,(e["key"]),"Enter")){
var item_cursor = reagent.core.cursor.call(null,menu_cursor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null));
return rubix_bootstrap.components.menu.menu_item_click.call(null,menu_cursor,item_cursor);
} else {
return null;
}
}
}
});
rubix_bootstrap.components.menu.menu_item = (function rubix_bootstrap$components$menu$menu_item(props){
cljsjs.util.debug.call(null,"menu-item");

var this$ = reagent.core.current_component.call(null);
var id = cljsjs.util.get_id.call(null,this$,props);
var menu_id = new cljs.core.Keyword(null,"menu","menu",352255198).cljs$core$IFn$_invoke$arity$1(props);
var dropdown_id = new cljs.core.Keyword(null,"dropdown","dropdown",1343185805).cljs$core$IFn$_invoke$arity$1(props);
var dropdown_cursor = reagent.core.cursor.call(null,rubix_bootstrap.components.menu.dropdowns,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dropdown_id], null));
var menu_cursor = reagent.core.cursor.call(null,rubix_bootstrap.components.menu.menus,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [menu_id], null));
var menu_items_set_cursor = reagent.core.cursor.call(null,rubix_bootstrap.components.menu.menu_items_set,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [menu_id], null));
var menu_items_cursor = reagent.core.cursor.call(null,rubix_bootstrap.components.menu.menu_items,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [menu_id], null));
var item_cursor = reagent.core.cursor.call(null,menu_cursor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null));
var always_inactive = new cljs.core.Keyword(null,"alwaysInactive","alwaysInactive",-1063007376).cljs$core$IFn$_invoke$arity$1(props);
var active_QMARK_ = ((!(((this$["is-active?"]) == null)))?(this$["is-active?"]):new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(props));
var active_QMARK___$1 = ((!((always_inactive == null)))?cljs.core.not.call(null,always_inactive):active_QMARK_);
var _ = (this$["is-active?"] = active_QMARK___$1);
var ___$1 = cljs.core.reset_BANG_.call(null,item_cursor,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"props","props",453281727),props,new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
var classes = rubix_bootstrap.components.menu.gen_classes_menu_item.call(null,props);
var header_QMARK_ = new cljs.core.Keyword(null,"header","header",119441134).cljs$core$IFn$_invoke$arity$1(props);
var h = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"role","role",-736691072),"presentation",new cljs.core.Keyword(null,"class","class",-2030961996),"dropdown-header"], null),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(props)], null);
var divider_QMARK_ = new cljs.core.Keyword(null,"divider","divider",1265972657).cljs$core$IFn$_invoke$arity$1(props);
var hidden_QMARK_ = new cljs.core.Keyword(null,"hidden","hidden",-312506092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,dropdown_cursor));
var d = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"role","role",-736691072),"presentation",new cljs.core.Keyword(null,"class","class",-2030961996),"divider"], null)], null);
var no_hover_QMARK_ = new cljs.core.Keyword(null,"noHover","noHover",-159411515).cljs$core$IFn$_invoke$arity$1(props);
var final_props = cljs.core.merge.call(null,reagent.core.props.call(null,this$),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"role","role",-736691072),"presentation",new cljs.core.Keyword(null,"class","class",-2030961996),cljsjs.util.trim.call(null,[cljs.core.str(classes),cljs.core.str(" "),cljs.core.str(new cljs.core.Keyword(null,"className","className",-1983287057).cljs$core$IFn$_invoke$arity$1(props))].join(''))], null));
var n = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),final_props,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(props)], null);
var check_if_active = ((function (this$,id,menu_id,dropdown_id,dropdown_cursor,menu_cursor,menu_items_set_cursor,menu_items_cursor,item_cursor,always_inactive,active_QMARK_,active_QMARK___$1,_,___$1,classes,header_QMARK_,h,divider_QMARK_,hidden_QMARK_,d,no_hover_QMARK_,final_props,n){
return (function (cb){
if(cljs.core.not.call(null,always_inactive)){
return cb.call(null);
} else {
return null;
}
});})(this$,id,menu_id,dropdown_id,dropdown_cursor,menu_cursor,menu_items_set_cursor,menu_items_cursor,item_cursor,always_inactive,active_QMARK_,active_QMARK___$1,_,___$1,classes,header_QMARK_,h,divider_QMARK_,hidden_QMARK_,d,no_hover_QMARK_,final_props,n))
;
if(cljs.core.truth_(header_QMARK_)){
if(cljs.core.not.call(null,hidden_QMARK_)){
return h;
} else {
return null;
}
} else {
if(cljs.core.truth_(divider_QMARK_)){
if(cljs.core.not.call(null,hidden_QMARK_)){
return d;
} else {
return null;
}
} else {
if(cljs.core.truth_(no_hover_QMARK_)){
if(cljs.core.not.call(null,hidden_QMARK_)){
return n;
} else {
return null;
}
} else {
var is_stored_QMARK_ = cljs.core.get.call(null,cljs.core.deref.call(null,menu_items_set_cursor),id);
var final_props__$1 = cljs.core.merge.call(null,final_props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),cljsjs.util.trim.call(null,[cljs.core.str((cljs.core.truth_(active_QMARK___$1)?"active ":null)),cljs.core.str(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(final_props))].join(''))], null));
var ___$2 = (((is_stored_QMARK_ == null))?(function (){
cljs.core.swap_BANG_.call(null,menu_items_set_cursor,cljs.core.conj,id);

return cljs.core.swap_BANG_.call(null,menu_items_cursor,cljs.core.conj,id);
})()
:null);
if(cljs.core.not.call(null,hidden_QMARK_)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),final_props__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"role","role",-736691072),"menuitem",new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),"-1",new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),((function (is_stored_QMARK_,final_props__$1,___$2,this$,id,menu_id,dropdown_id,dropdown_cursor,menu_cursor,menu_items_set_cursor,menu_items_cursor,item_cursor,always_inactive,active_QMARK_,active_QMARK___$1,_,___$1,classes,header_QMARK_,h,divider_QMARK_,hidden_QMARK_,d,no_hover_QMARK_,final_props,n,check_if_active){
return (function (e){
return check_if_active.call(null,((function (is_stored_QMARK_,final_props__$1,___$2,this$,id,menu_id,dropdown_id,dropdown_cursor,menu_cursor,menu_items_set_cursor,menu_items_cursor,item_cursor,always_inactive,active_QMARK_,active_QMARK___$1,_,___$1,classes,header_QMARK_,h,divider_QMARK_,hidden_QMARK_,d,no_hover_QMARK_,final_props,n,check_if_active){
return (function (){
return rubix_bootstrap.components.menu.key_down_menu.call(null,e,menu_cursor,menu_items_cursor,id);
});})(is_stored_QMARK_,final_props__$1,___$2,this$,id,menu_id,dropdown_id,dropdown_cursor,menu_cursor,menu_items_set_cursor,menu_items_cursor,item_cursor,always_inactive,active_QMARK_,active_QMARK___$1,_,___$1,classes,header_QMARK_,h,divider_QMARK_,hidden_QMARK_,d,no_hover_QMARK_,final_props,n,check_if_active))
);
});})(is_stored_QMARK_,final_props__$1,___$2,this$,id,menu_id,dropdown_id,dropdown_cursor,menu_cursor,menu_items_set_cursor,menu_items_cursor,item_cursor,always_inactive,active_QMARK_,active_QMARK___$1,_,___$1,classes,header_QMARK_,h,divider_QMARK_,hidden_QMARK_,d,no_hover_QMARK_,final_props,n,check_if_active))
,new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (is_stored_QMARK_,final_props__$1,___$2,this$,id,menu_id,dropdown_id,dropdown_cursor,menu_cursor,menu_items_set_cursor,menu_items_cursor,item_cursor,always_inactive,active_QMARK_,active_QMARK___$1,_,___$1,classes,header_QMARK_,h,divider_QMARK_,hidden_QMARK_,d,no_hover_QMARK_,final_props,n,check_if_active){
return (function (e){
return check_if_active.call(null,((function (is_stored_QMARK_,final_props__$1,___$2,this$,id,menu_id,dropdown_id,dropdown_cursor,menu_cursor,menu_items_set_cursor,menu_items_cursor,item_cursor,always_inactive,active_QMARK_,active_QMARK___$1,_,___$1,classes,header_QMARK_,h,divider_QMARK_,hidden_QMARK_,d,no_hover_QMARK_,final_props,n,check_if_active){
return (function (){
return rubix_bootstrap.components.menu.show_dropdown.call(null,e,dropdown_id,dropdown_cursor);
});})(is_stored_QMARK_,final_props__$1,___$2,this$,id,menu_id,dropdown_id,dropdown_cursor,menu_cursor,menu_items_set_cursor,menu_items_cursor,item_cursor,always_inactive,active_QMARK_,active_QMARK___$1,_,___$1,classes,header_QMARK_,h,divider_QMARK_,hidden_QMARK_,d,no_hover_QMARK_,final_props,n,check_if_active))
);
});})(is_stored_QMARK_,final_props__$1,___$2,this$,id,menu_id,dropdown_id,dropdown_cursor,menu_cursor,menu_items_set_cursor,menu_items_cursor,item_cursor,always_inactive,active_QMARK_,active_QMARK___$1,_,___$1,classes,header_QMARK_,h,divider_QMARK_,hidden_QMARK_,d,no_hover_QMARK_,final_props,n,check_if_active))
,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (is_stored_QMARK_,final_props__$1,___$2,this$,id,menu_id,dropdown_id,dropdown_cursor,menu_cursor,menu_items_set_cursor,menu_items_cursor,item_cursor,always_inactive,active_QMARK_,active_QMARK___$1,_,___$1,classes,header_QMARK_,h,divider_QMARK_,hidden_QMARK_,d,no_hover_QMARK_,final_props,n,check_if_active){
return (function (e){
e.preventDefault();

return check_if_active.call(null,((function (is_stored_QMARK_,final_props__$1,___$2,this$,id,menu_id,dropdown_id,dropdown_cursor,menu_cursor,menu_items_set_cursor,menu_items_cursor,item_cursor,always_inactive,active_QMARK_,active_QMARK___$1,_,___$1,classes,header_QMARK_,h,divider_QMARK_,hidden_QMARK_,d,no_hover_QMARK_,final_props,n,check_if_active){
return (function (){
return rubix_bootstrap.components.menu.menu_item_click.call(null,menu_cursor,item_cursor);
});})(is_stored_QMARK_,final_props__$1,___$2,this$,id,menu_id,dropdown_id,dropdown_cursor,menu_cursor,menu_items_set_cursor,menu_items_cursor,item_cursor,always_inactive,active_QMARK_,active_QMARK___$1,_,___$1,classes,header_QMARK_,h,divider_QMARK_,hidden_QMARK_,d,no_hover_QMARK_,final_props,n,check_if_active))
);
});})(is_stored_QMARK_,final_props__$1,___$2,this$,id,menu_id,dropdown_id,dropdown_cursor,menu_cursor,menu_items_set_cursor,menu_items_cursor,item_cursor,always_inactive,active_QMARK_,active_QMARK___$1,_,___$1,classes,header_QMARK_,h,divider_QMARK_,hidden_QMARK_,d,no_hover_QMARK_,final_props,n,check_if_active))
,new cljs.core.Keyword(null,"on-touch-end","on-touch-end",1515667389),((function (is_stored_QMARK_,final_props__$1,___$2,this$,id,menu_id,dropdown_id,dropdown_cursor,menu_cursor,menu_items_set_cursor,menu_items_cursor,item_cursor,always_inactive,active_QMARK_,active_QMARK___$1,_,___$1,classes,header_QMARK_,h,divider_QMARK_,hidden_QMARK_,d,no_hover_QMARK_,final_props,n,check_if_active){
return (function (e){
e.preventDefault();

return check_if_active.call(null,((function (is_stored_QMARK_,final_props__$1,___$2,this$,id,menu_id,dropdown_id,dropdown_cursor,menu_cursor,menu_items_set_cursor,menu_items_cursor,item_cursor,always_inactive,active_QMARK_,active_QMARK___$1,_,___$1,classes,header_QMARK_,h,divider_QMARK_,hidden_QMARK_,d,no_hover_QMARK_,final_props,n,check_if_active){
return (function (){
return rubix_bootstrap.components.menu.menu_item_click.call(null,menu_cursor,item_cursor);
});})(is_stored_QMARK_,final_props__$1,___$2,this$,id,menu_id,dropdown_id,dropdown_cursor,menu_cursor,menu_items_set_cursor,menu_items_cursor,item_cursor,always_inactive,active_QMARK_,active_QMARK___$1,_,___$1,classes,header_QMARK_,h,divider_QMARK_,hidden_QMARK_,d,no_hover_QMARK_,final_props,n,check_if_active))
);
});})(is_stored_QMARK_,final_props__$1,___$2,this$,id,menu_id,dropdown_id,dropdown_cursor,menu_cursor,menu_items_set_cursor,menu_items_cursor,item_cursor,always_inactive,active_QMARK_,active_QMARK___$1,_,___$1,classes,header_QMARK_,h,divider_QMARK_,hidden_QMARK_,d,no_hover_QMARK_,final_props,n,check_if_active))
], null),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(props)], null)], null);
} else {
return null;
}
}
}
}
});
rubix_bootstrap.components.menu.dropdown = (function rubix_bootstrap$components$menu$dropdown(props){
cljsjs.util.debug.call(null,"dropdown");

var this$ = reagent.core.current_component.call(null);
var id = cljsjs.util.get_id.call(null,this$,props);
var on_set_select_item = (function (){var or__4307__auto__ = new cljs.core.Keyword(null,"onSetSelectItem","onSetSelectItem",1129790476).cljs$core$IFn$_invoke$arity$1(props);
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
var _ = on_set_select_item.call(null,((function (this$,id,on_set_select_item){
return (function (k,v){
return rubix_bootstrap.components.menu.select_item.call(null,id,k,v);
});})(this$,id,on_set_select_item))
);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),cljsjs.util.trim.call(null,[cljs.core.str("dropdown "),cljs.core.str(new cljs.core.Keyword(null,"className","className",-1983287057).cljs$core$IFn$_invoke$arity$1(props))].join(''))], null)),cljsjs.util.map_children.call(null,((function (this$,id,on_set_select_item,_){
return (function (i,c){
return React.cloneElement(c,{"dropdown": id, "toggleOnHover": new cljs.core.Keyword(null,"toggleOnHover","toggleOnHover",1782310243).cljs$core$IFn$_invoke$arity$1(props), "onDropdownSetSelectItem": on_set_select_item, "key": i});
});})(this$,id,on_set_select_item,_))
,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(props))], null);
});
rubix_bootstrap.components.menu.dropdown_button = (function rubix_bootstrap$components$menu$dropdown_button(props){
cljsjs.util.debug.call(null,"dropdown-button");

var this$ = reagent.core.current_component.call(null);
var active_QMARK_ = new cljs.core.Keyword(null,"pressed","pressed",1100937946).cljs$core$IFn$_invoke$arity$1(props);
var tab_QMARK_ = new cljs.core.Keyword(null,"tab","tab",-559583621).cljs$core$IFn$_invoke$arity$1(props);
var nav_QMARK_ = new cljs.core.Keyword(null,"nav","nav",719540477).cljs$core$IFn$_invoke$arity$1(props);
var dropdown_id = new cljs.core.Keyword(null,"dropdown","dropdown",1343185805).cljs$core$IFn$_invoke$arity$1(props);
var dropdown_cursor = reagent.core.cursor.call(null,rubix_bootstrap.components.menu.dropdowns,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dropdown_id], null));
var classes = [cljs.core.str("dropdown-toggle "),cljs.core.str((cljs.core.truth_(active_QMARK_)?"active ":null))].join('');
var toggle_on_hover_QMARK_ = new cljs.core.Keyword(null,"toggleOnHover","toggleOnHover",1782310243).cljs$core$IFn$_invoke$arity$1(props);
var on_click = (function (){var or__4307__auto__ = new cljs.core.Keyword(null,"onClick","onClick",-1991238530).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(or__4307__auto__)){
return or__4307__auto__;
} else {
var or__4307__auto____$1 = new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(props);
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
rubix_bootstrap.components.menu.force_hide_dropdown.call(null);

rubix_bootstrap.components.menu.toggle_dropdown.call(null,e,dropdown_id,dropdown_cursor);

if(cljs.core.truth_(on_click)){
return on_click.call(null);
} else {
return null;
}
});})(this$,active_QMARK_,tab_QMARK_,nav_QMARK_,dropdown_id,dropdown_cursor,classes,toggle_on_hover_QMARK_,on_click))
;
var show_dropdown_event = ((function (this$,active_QMARK_,tab_QMARK_,nav_QMARK_,dropdown_id,dropdown_cursor,classes,toggle_on_hover_QMARK_,on_click,toggle_dropdown_event){
return (function (e){
return rubix_bootstrap.components.menu.show_dropdown.call(null,e,dropdown_id,dropdown_cursor);
});})(this$,active_QMARK_,tab_QMARK_,nav_QMARK_,dropdown_id,dropdown_cursor,classes,toggle_on_hover_QMARK_,on_click,toggle_dropdown_event))
;
var hide_dropdown_event = ((function (this$,active_QMARK_,tab_QMARK_,nav_QMARK_,dropdown_id,dropdown_cursor,classes,toggle_on_hover_QMARK_,on_click,toggle_dropdown_event,show_dropdown_event){
return (function (e){
return rubix_bootstrap.components.menu.hide_dropdown.call(null,e,dropdown_id,dropdown_cursor);
});})(this$,active_QMARK_,tab_QMARK_,nav_QMARK_,dropdown_id,dropdown_cursor,classes,toggle_on_hover_QMARK_,on_click,toggle_dropdown_event,show_dropdown_event))
;
if(cljs.core.truth_((function (){var or__4307__auto__ = tab_QMARK_;
if(cljs.core.truth_(or__4307__auto__)){
return or__4307__auto__;
} else {
return nav_QMARK_;
}
})())){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),cljs.core.merge.call(null,props,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"class","class",-2030961996),cljsjs.util.trim.call(null,classes),new cljs.core.Keyword(null,"hidden","hidden",-312506092),null,new cljs.core.Keyword(null,"onDropdownSetSelectItem","onDropdownSetSelectItem",-512540334),null,new cljs.core.Keyword(null,"data-toggle","data-toggle",436966687),"dropdown",new cljs.core.Keyword(null,"on-click","on-click",1632826543),toggle_dropdown_event,new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),(cljs.core.truth_(toggle_on_hover_QMARK_)?hide_dropdown_event:null),new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),(cljs.core.truth_(toggle_on_hover_QMARK_)?show_dropdown_event:null)], null)),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(props)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rubix_bootstrap.components.button.button,cljs.core.merge.call(null,props,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"className","className",-1983287057),cljsjs.util.trim.call(null,classes),new cljs.core.Keyword(null,"hidden","hidden",-312506092),null,new cljs.core.Keyword(null,"onDropdownSetSelectItem","onDropdownSetSelectItem",-512540334),null,new cljs.core.Keyword(null,"data-toggle","data-toggle",436966687),"dropdown",new cljs.core.Keyword(null,"on-click","on-click",1632826543),toggle_dropdown_event,new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),(cljs.core.truth_(toggle_on_hover_QMARK_)?hide_dropdown_event:null),new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),(cljs.core.truth_(toggle_on_hover_QMARK_)?show_dropdown_event:null)], null))], null);
}
});
cljsjs.dispatcher.subscribe.call(null,new cljs.core.Keyword(null,"click-menu","click-menu",1367922703),(function (p__14454){
var map__14455 = p__14454;
var map__14455__$1 = ((cljs.core.seq_QMARK_.call(null,map__14455))?cljs.core.apply.call(null,cljs.core.hash_map,map__14455):map__14455);
var data = cljs.core.get.call(null,map__14455__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return rubix_bootstrap.components.menu.hide_all_dropdowns.call(null,data);
}));

//# sourceMappingURL=menu.js.map