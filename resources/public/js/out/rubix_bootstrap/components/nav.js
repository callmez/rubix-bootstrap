// Compiled by ClojureScript 0.0-3269 {}
goog.provide('rubix_bootstrap.components.nav');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljsjs.util');
goog.require('rubix_bootstrap.components.form');
goog.require('rubix_bootstrap.components.button');
if(typeof rubix_bootstrap.components.nav.navs !== 'undefined'){
} else {
rubix_bootstrap.components.nav.navs = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof rubix_bootstrap.components.nav.navcontents !== 'undefined'){
} else {
rubix_bootstrap.components.nav.navcontents = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof rubix_bootstrap.components.nav.zIndex !== 'undefined'){
} else {
rubix_bootstrap.components.nav.zIndex = reagent.core.atom.call(null,(9999999));
}
rubix_bootstrap.components.nav.reset_globals_BANG_ = (function rubix_bootstrap$components$nav$reset_globals_BANG_(){
return cljs.core.reset_BANG_.call(null,rubix_bootstrap.components.nav.zIndex,(9999999));
});
rubix_bootstrap.components.nav.getZIndex = (function rubix_bootstrap$components$nav$getZIndex(){
return cljs.core.swap_BANG_.call(null,rubix_bootstrap.components.nav.zIndex,cljs.core.dec);
});
rubix_bootstrap.components.nav.nav_mixin_classes = (function rubix_bootstrap$components$nav$nav_mixin_classes(props){
var left_QMARK_ = new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(props);
var right_QMARK_ = new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(props);
return [cljs.core.str((cljs.core.truth_(left_QMARK_)?"navbar-left ":null)),cljs.core.str((cljs.core.truth_(right_QMARK_)?"navbar-right ":null))].join('');
});
rubix_bootstrap.components.nav.nav_mixin = (function rubix_bootstrap$components$nav$nav_mixin(){
var argseq__5347__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return rubix_bootstrap.components.nav.nav_mixin.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5347__auto__);
});

rubix_bootstrap.components.nav.nav_mixin.cljs$core$IFn$_invoke$arity$variadic = (function (component,props,extra_classes,p__14419){
var vec__14420 = p__14419;
var rchildren = cljs.core.nth.call(null,vec__14420,(0),null);
var this$ = reagent.core.current_component.call(null);
var classes = rubix_bootstrap.components.nav.nav_mixin_classes.call(null,props);
var use_class_name = new cljs.core.Keyword(null,"use-class-name","use-class-name",2096834982).cljs$core$IFn$_invoke$arity$1(props);
var use_class = (cljs.core.truth_(use_class_name)?"className":"class");
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [component,cljs.core.merge.call(null,reagent.core.props.call(null,this$),new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,use_class),cljsjs.util.trim.call(null,[cljs.core.str(classes),cljs.core.str(" "),cljs.core.str(extra_classes),cljs.core.str(" "),cljs.core.str((function (){var or__4307__auto__ = new cljs.core.Keyword(null,"className","className",-1983287057).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(or__4307__auto__)){
return or__4307__auto__;
} else {
return new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props);
}
})())].join('')),new cljs.core.Keyword(null,"children","children",-940561982),(function (){var or__4307__auto__ = rchildren;
if(cljs.core.truth_(or__4307__auto__)){
return or__4307__auto__;
} else {
return new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(props);
}
})(),new cljs.core.Keyword(null,"role","role",-736691072),new cljs.core.Keyword(null,"role","role",-736691072).cljs$core$IFn$_invoke$arity$1(props)], true, false))], null);
});

rubix_bootstrap.components.nav.nav_mixin.cljs$lang$maxFixedArity = (3);

rubix_bootstrap.components.nav.nav_mixin.cljs$lang$applyTo = (function (seq14415){
var G__14416 = cljs.core.first.call(null,seq14415);
var seq14415__$1 = cljs.core.next.call(null,seq14415);
var G__14417 = cljs.core.first.call(null,seq14415__$1);
var seq14415__$2 = cljs.core.next.call(null,seq14415__$1);
var G__14418 = cljs.core.first.call(null,seq14415__$2);
var seq14415__$3 = cljs.core.next.call(null,seq14415__$2);
return rubix_bootstrap.components.nav.nav_mixin.cljs$core$IFn$_invoke$arity$variadic(G__14416,G__14417,G__14418,seq14415__$3);
});
rubix_bootstrap.components.nav.nav_button = (function rubix_bootstrap$components$nav$nav_button(props){
cljsjs.util.debug.call(null,"nav-button");

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rubix_bootstrap.components.nav.nav_mixin,rubix_bootstrap.components.button.button,props], null);
});
rubix_bootstrap.components.nav.nav_link = (function rubix_bootstrap$components$nav$nav_link(props){
cljsjs.util.debug.call(null,"nav-link");

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [rubix_bootstrap.components.nav.nav_mixin,new cljs.core.Keyword(null,"a","a",-2123407586),props,"navbar-link"], null);
});
rubix_bootstrap.components.nav.nav_text = (function rubix_bootstrap$components$nav$nav_text(props){
cljsjs.util.debug.call(null,"nav-text");

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [rubix_bootstrap.components.nav.nav_mixin,new cljs.core.Keyword(null,"p","p",151049309),props,"navbar-text"], null);
});
rubix_bootstrap.components.nav.nav_form = (function rubix_bootstrap$components$nav$nav_form(props){
cljsjs.util.debug.call(null,"nav-form");

var this$ = reagent.core.current_component.call(null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [rubix_bootstrap.components.nav.nav_mixin,rubix_bootstrap.components.form.form,cljs.core.merge.call(null,reagent.core.props.call(null,this$),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"role","role",-736691072),"search",new cljs.core.Keyword(null,"use-class-name","use-class-name",2096834982),true], null)),"navbar-form form-inline"], null);
});
rubix_bootstrap.components.nav.toggle_navcontents = (function rubix_bootstrap$components$nav$toggle_navcontents(e,target){
e.preventDefault();

var navcontents_cursor = reagent.core.cursor.call(null,rubix_bootstrap.components.nav.navcontents,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [target], null));
var collapse = cljs.core.not.call(null,new cljs.core.Keyword(null,"collapse","collapse",-1218136136).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,navcontents_cursor)));
return cljs.core.swap_BANG_.call(null,navcontents_cursor,cljs.core.assoc,new cljs.core.Keyword(null,"collapse","collapse",-1218136136),collapse);
});
rubix_bootstrap.components.nav.nav_toggle = (function rubix_bootstrap$components$nav$nav_toggle(props){
cljsjs.util.debug.call(null,"nav-toggle");

var this$ = reagent.core.current_component.call(null);
var target = new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(props);
var toggle_navcontents_event = ((function (this$,target){
return (function (e){
return rubix_bootstrap.components.nav.toggle_navcontents.call(null,e,target);
});})(this$,target))
;
var nchildren = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.sr-only","span.sr-only",2081743235),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(props)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.icon-bar","span.icon-bar",618689172)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.icon-bar","span.icon-bar",618689172)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.icon-bar","span.icon-bar",618689172)], null)], null);
if((target == null)){
throw (new Error("No \"target\" property set for NavToggle. Please refer to Navbar documentation."));
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rubix_bootstrap.components.button.button,cljs.core.merge.call(null,reagent.core.props.call(null,this$),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"className","className",-1983287057),cljsjs.util.trim.call(null,[cljs.core.str("navbar-toggle "),cljs.core.str(new cljs.core.Keyword(null,"className","className",-1983287057).cljs$core$IFn$_invoke$arity$1(props))].join('')),new cljs.core.Keyword(null,"data-toggle","data-toggle",436966687),"collapse",new cljs.core.Keyword(null,"on-click","on-click",1632826543),toggle_navcontents_event,new cljs.core.Keyword(null,"on-touch-end","on-touch-end",1515667389),toggle_navcontents_event,new cljs.core.Keyword(null,"children","children",-940561982),nchildren], null))], null);
}
});
rubix_bootstrap.components.nav.deactivate_nav_items = (function rubix_bootstrap$components$nav$deactivate_nav_items(nav_cursor){
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p__14423){
var vec__14424 = p__14423;
var id = cljs.core.nth.call(null,vec__14424,(0),null);
var v = cljs.core.nth.call(null,vec__14424,(1),null);
var nav_item_cursor = reagent.core.cursor.call(null,nav_cursor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null));
return cljs.core.swap_BANG_.call(null,nav_item_cursor,cljs.core.assoc,new cljs.core.Keyword(null,"active","active",1895962068),false);
}),cljs.core.deref.call(null,nav_cursor)));
});
rubix_bootstrap.components.nav.activate_nav_item = (function rubix_bootstrap$components$nav$activate_nav_item(nav_item_cursor,nav_cursor,props){
rubix_bootstrap.components.nav.deactivate_nav_items.call(null,nav_cursor);

cljs.core.swap_BANG_.call(null,nav_item_cursor,cljs.core.assoc,new cljs.core.Keyword(null,"active","active",1895962068),true);

var on_click = new cljs.core.Keyword(null,"onClick","onClick",-1991238530).cljs$core$IFn$_invoke$arity$1(props);
var on_touch_end = new cljs.core.Keyword(null,"onTouchEnd","onTouchEnd",1356758529).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(on_click)){
on_click.call(null);
} else {
}

if(cljs.core.truth_(on_touch_end)){
return on_touch_end.call(null);
} else {
return null;
}
});
rubix_bootstrap.components.nav.nav_item_class = (function rubix_bootstrap$components$nav$nav_item_class(props){
cljsjs.util.debug.call(null,"nav-item-class");

var this$ = reagent.core.current_component.call(null);
var id = cljsjs.util.get_id.call(null,this$,props);
var nav_id = new cljs.core.Keyword(null,"nav-id","nav-id",-1465777828).cljs$core$IFn$_invoke$arity$1(props);
var nav_cursor = reagent.core.cursor.call(null,rubix_bootstrap.components.nav.navs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nav_id], null));
var nav_item_cursor = reagent.core.cursor.call(null,nav_cursor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null));
var active_QMARK_ = new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,nav_item_cursor));
var on_item_select = new cljs.core.Keyword(null,"on-item-select","on-item-select",-1142117016).cljs$core$IFn$_invoke$arity$1(props);
var _ = cljs.core.swap_BANG_.call(null,nav_item_cursor,cljs.core.assoc,new cljs.core.Keyword(null,"active","active",1895962068),((!((active_QMARK_ == null)))?active_QMARK_:new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(props)));
var active_QMARK___$1 = new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,nav_item_cursor));
var divider_QMARK_ = new cljs.core.Keyword(null,"divider","divider",1265972657).cljs$core$IFn$_invoke$arity$1(props);
var dropdown_QMARK_ = new cljs.core.Keyword(null,"dropdown","dropdown",1343185805).cljs$core$IFn$_invoke$arity$1(props);
var on_shown = new cljs.core.Keyword(null,"onShown","onShown",-788063648).cljs$core$IFn$_invoke$arity$1(props);
var on_hidden = new cljs.core.Keyword(null,"onHidden","onHidden",-441246357).cljs$core$IFn$_invoke$arity$1(props);
var d = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),cljs.core.merge.call(null,reagent.core.props.call(null,this$),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),cljsjs.util.trim.call(null,[cljs.core.str("divider "),cljs.core.str(new cljs.core.Keyword(null,"className","className",-1983287057).cljs$core$IFn$_invoke$arity$1(props))].join(''))], null))], null);
if(cljs.core.truth_(divider_QMARK_)){
return d;
} else {
var on_shown_event = ((function (this$,id,nav_id,nav_cursor,nav_item_cursor,active_QMARK_,on_item_select,_,active_QMARK___$1,divider_QMARK_,dropdown_QMARK_,on_shown,on_hidden,d){
return (function (){
cljs.core.swap_BANG_.call(null,nav_item_cursor,cljs.core.assoc,new cljs.core.Keyword(null,"active","active",1895962068),true);

if(cljs.core.truth_(on_shown)){
return on_shown.call(null);
} else {
return null;
}
});})(this$,id,nav_id,nav_cursor,nav_item_cursor,active_QMARK_,on_item_select,_,active_QMARK___$1,divider_QMARK_,dropdown_QMARK_,on_shown,on_hidden,d))
;
var on_hidden_event = ((function (on_shown_event,this$,id,nav_id,nav_cursor,nav_item_cursor,active_QMARK_,on_item_select,_,active_QMARK___$1,divider_QMARK_,dropdown_QMARK_,on_shown,on_hidden,d){
return (function (){
cljs.core.swap_BANG_.call(null,nav_item_cursor,cljs.core.assoc,new cljs.core.Keyword(null,"active","active",1895962068),false);

if(cljs.core.truth_(on_hidden)){
return on_hidden.call(null);
} else {
return null;
}
});})(on_shown_event,this$,id,nav_id,nav_cursor,nav_item_cursor,active_QMARK_,on_item_select,_,active_QMARK___$1,divider_QMARK_,dropdown_QMARK_,on_shown,on_hidden,d))
;
var classes = [cljs.core.str((cljs.core.truth_(dropdown_QMARK_)?"dropdown ":null)),cljs.core.str((cljs.core.truth_(active_QMARK___$1)?"active ":null)),cljs.core.str(new cljs.core.Keyword(null,"className","className",-1983287057).cljs$core$IFn$_invoke$arity$1(props))].join('');
var handle_click_event = ((function (on_shown_event,on_hidden_event,classes,this$,id,nav_id,nav_cursor,nav_item_cursor,active_QMARK_,on_item_select,_,active_QMARK___$1,divider_QMARK_,dropdown_QMARK_,on_shown,on_hidden,d){
return (function (e){
e.preventDefault();

rubix_bootstrap.components.nav.activate_nav_item.call(null,nav_item_cursor,nav_cursor,props);

if(cljs.core.truth_(on_item_select)){
return on_item_select.call(null,cljs.core.clj__GT_js.call(null,props));
} else {
return null;
}
});})(on_shown_event,on_hidden_event,classes,this$,id,nav_id,nav_cursor,nav_item_cursor,active_QMARK_,on_item_select,_,active_QMARK___$1,divider_QMARK_,dropdown_QMARK_,on_shown,on_hidden,d))
;
var href = new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(props);
var nchildren = (cljs.core.truth_(href)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),href,new cljs.core.Keyword(null,"on-click","on-click",1632826543),handle_click_event,new cljs.core.Keyword(null,"on-touch-end","on-touch-end",1515667389),handle_click_event], null),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(props)], null):new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(props));
var nchildren__$1 = (cljs.core.truth_(dropdown_QMARK_)?cljsjs.util.map_children.call(null,((function (on_shown_event,on_hidden_event,classes,handle_click_event,href,nchildren,this$,id,nav_id,nav_cursor,nav_item_cursor,active_QMARK_,on_item_select,_,active_QMARK___$1,divider_QMARK_,dropdown_QMARK_,on_shown,on_hidden,d){
return (function (i,c){
return React.cloneElement(c,{"dropdown": id, "toggleOnHover": new cljs.core.Keyword(null,"toggleOnHover","toggleOnHover",1782310243).cljs$core$IFn$_invoke$arity$1(props), "onShown": on_shown_event, "onHidden": on_hidden_event, "key": i});
});})(on_shown_event,on_hidden_event,classes,handle_click_event,href,nchildren,this$,id,nav_id,nav_cursor,nav_item_cursor,active_QMARK_,on_item_select,_,active_QMARK___$1,divider_QMARK_,dropdown_QMARK_,on_shown,on_hidden,d))
,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(props)):nchildren);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),cljs.core.merge.call(null,reagent.core.props.call(null,this$),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),cljsjs.util.trim.call(null,classes)], null)),nchildren__$1], null);
}
});
rubix_bootstrap.components.nav.nav_item = cljs.core.with_meta.call(null,rubix_bootstrap.components.nav.nav_item_class,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),(function (this$){
var id = (this$["id"]);
var props = reagent.core.props.call(null,this$);
var nav_id = new cljs.core.Keyword(null,"nav-id","nav-id",-1465777828).cljs$core$IFn$_invoke$arity$1(props);
var nav_cursor = reagent.core.cursor.call(null,rubix_bootstrap.components.nav.navs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nav_id], null));
return cljs.core.swap_BANG_.call(null,nav_cursor,cljs.core.dissoc,id);
})], null));
rubix_bootstrap.components.nav.nav_class = (function rubix_bootstrap$components$nav$nav_class(props){
cljsjs.util.debug.call(null,"nav");

var this$ = reagent.core.current_component.call(null);
var id = cljsjs.util.get_id.call(null,this$,props);
var _ = cljs.core.swap_BANG_.call(null,rubix_bootstrap.components.nav.navs,cljs.core.assoc,id,cljs.core.PersistentArrayMap.EMPTY);
var on_item_select = new cljs.core.Keyword(null,"onItemSelect","onItemSelect",781904873).cljs$core$IFn$_invoke$arity$1(props);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [rubix_bootstrap.components.nav.nav_mixin,new cljs.core.Keyword(null,"ul","ul",-1349521403),props,"nav navbar-nav",cljsjs.util.map_children.call(null,((function (this$,id,_,on_item_select){
return (function (i,c){
if(!((c == null))){
return React.cloneElement(c,{"on-item-select": on_item_select, "nav-id": id});
} else {
return null;
}
});})(this$,id,_,on_item_select))
,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(props))], null);
});
rubix_bootstrap.components.nav.nav = cljs.core.with_meta.call(null,rubix_bootstrap.components.nav.nav_class,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),(function (this$){
return cljs.core.swap_BANG_.call(null,rubix_bootstrap.components.nav.navs,cljs.core.dissoc,(this$["id"]));
})], null));
rubix_bootstrap.components.nav.nav_content_class = (function rubix_bootstrap$components$nav$nav_content_class(props){
cljsjs.util.debug.call(null,"nav-content");

var this$ = reagent.core.current_component.call(null);
var id = (function (){var or__4307__auto__ = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(or__4307__auto__)){
return or__4307__auto__;
} else {
return cljsjs.util.get_id.call(null,this$,props);
}
})();
var navcontents_cursor = reagent.core.cursor.call(null,rubix_bootstrap.components.nav.navcontents,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null));
var collapse_QMARK_ = new cljs.core.Keyword(null,"collapse","collapse",-1218136136).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,navcontents_cursor));
var _ = cljs.core.swap_BANG_.call(null,navcontents_cursor,cljs.core.assoc,new cljs.core.Keyword(null,"collapse","collapse",-1218136136),((!((collapse_QMARK_ == null)))?collapse_QMARK_:new cljs.core.Keyword(null,"collapse","collapse",-1218136136).cljs$core$IFn$_invoke$arity$1(props)));
var collapse_QMARK___$1 = new cljs.core.Keyword(null,"collapse","collapse",-1218136136).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,navcontents_cursor));
var classes = [cljs.core.str("navbar-content "),cljs.core.str((cljs.core.truth_(collapse_QMARK___$1)?"collapse navbar-collapse ":null))].join('');
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.call(null,reagent.core.props.call(null,this$),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),cljsjs.util.trim.call(null,[cljs.core.str(classes),cljs.core.str(" "),cljs.core.str(new cljs.core.Keyword(null,"className","className",-1983287057).cljs$core$IFn$_invoke$arity$1(props))].join(''))], null)),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(props)], null);
});
rubix_bootstrap.components.nav.nav_content = cljs.core.with_meta.call(null,rubix_bootstrap.components.nav.nav_content_class,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),(function (this$){
return cljs.core.swap_BANG_.call(null,rubix_bootstrap.components.nav.navcontents,cljs.core.dissoc,(this$["id"]));
})], null));
rubix_bootstrap.components.nav.nav_brand = (function rubix_bootstrap$components$nav$nav_brand(props){
cljsjs.util.debug.call(null,"nav-brand");

var this$ = reagent.core.current_component.call(null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),cljs.core.merge.call(null,reagent.core.props.call(null,this$),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),(function (){var or__4307__auto__ = new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(or__4307__auto__)){
return or__4307__auto__;
} else {
return "#";
}
})(),new cljs.core.Keyword(null,"class","class",-2030961996),cljsjs.util.trim.call(null,[cljs.core.str("navbar-brand "),cljs.core.str(new cljs.core.Keyword(null,"className","className",-1983287057).cljs$core$IFn$_invoke$arity$1(props))].join(''))], null)),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(props)], null);
});
rubix_bootstrap.components.nav.nav_header = (function rubix_bootstrap$components$nav$nav_header(props){
cljsjs.util.debug.call(null,"nav-header");

var this$ = reagent.core.current_component.call(null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.call(null,reagent.core.props.call(null,this$),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),cljsjs.util.trim.call(null,[cljs.core.str("navbar-header "),cljs.core.str(new cljs.core.Keyword(null,"className","className",-1983287057).cljs$core$IFn$_invoke$arity$1(props))].join(''))], null)),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(props)], null);
});
rubix_bootstrap.components.nav.gen_classes = (function rubix_bootstrap$components$nav$gen_classes(props){
var inverse_QMARK_ = new cljs.core.Keyword(null,"inverse","inverse",-1623859672).cljs$core$IFn$_invoke$arity$1(props);
var fixed_top_QMARK_ = new cljs.core.Keyword(null,"fixedTop","fixedTop",-1633552719).cljs$core$IFn$_invoke$arity$1(props);
var static_top_QMARK_ = new cljs.core.Keyword(null,"staticTop","staticTop",-327994402).cljs$core$IFn$_invoke$arity$1(props);
var fixed_bottom_QMARK_ = new cljs.core.Keyword(null,"fixedBottom","fixedBottom",-369290631).cljs$core$IFn$_invoke$arity$1(props);
return [cljs.core.str("navbar navbar-default "),cljs.core.str((cljs.core.truth_(inverse_QMARK_)?"navbar-inverse ":null)),cljs.core.str((cljs.core.truth_(fixed_top_QMARK_)?"navbar-fixed-top ":null)),cljs.core.str((cljs.core.truth_(static_top_QMARK_)?"navbar-static-top ":null)),cljs.core.str((cljs.core.truth_(fixed_bottom_QMARK_)?"navbar-fixed-bottom ":null))].join('');
});
rubix_bootstrap.components.nav.navbar = (function rubix_bootstrap$components$nav$navbar(props){
cljsjs.util.debug.call(null,"navbar");

var this$ = reagent.core.current_component.call(null);
var classes = rubix_bootstrap.components.nav.gen_classes.call(null,props);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav","nav",719540477),cljsjs.util.deep_merge.call(null,reagent.core.props.call(null,this$),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),cljsjs.util.trim.call(null,[cljs.core.str(classes),cljs.core.str(" "),cljs.core.str(new cljs.core.Keyword(null,"className","className",-1983287057).cljs$core$IFn$_invoke$arity$1(props))].join('')),new cljs.core.Keyword(null,"role","role",-736691072),"navigation",new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(props)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"zIndex","zIndex",-1588341609),rubix_bootstrap.components.nav.getZIndex.call(null)], null))], null)),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(props)], null);
});

//# sourceMappingURL=nav.js.map