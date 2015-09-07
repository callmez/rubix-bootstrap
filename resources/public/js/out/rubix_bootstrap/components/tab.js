// Compiled by ClojureScript 0.0-3269 {}
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
rubix_bootstrap.components.tab.tab_containers = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof rubix_bootstrap.components.tab.tab_panes !== 'undefined'){
} else {
rubix_bootstrap.components.tab.tab_panes = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof rubix_bootstrap.components.tab.tabs !== 'undefined'){
} else {
rubix_bootstrap.components.tab.tabs = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
rubix_bootstrap.components.tab.create_tab_container_cursor = (function rubix_bootstrap$components$tab$create_tab_container_cursor(id){
var c = reagent.core.cursor.call(null,rubix_bootstrap.components.tab.tab_containers,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null));
if((cljs.core.deref.call(null,c) == null)){
cljs.core.swap_BANG_.call(null,rubix_bootstrap.components.tab.tab_containers,cljs.core.assoc,id,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tab-list","tab-list",684589107),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"tab-pane","tab-pane",-532627816),cljs.core.PersistentVector.EMPTY], null));
} else {
}

return c;
});
rubix_bootstrap.components.tab.gen_classes_t = (function rubix_bootstrap$components$tab$gen_classes_t(props){
var dropdown_QMARK_ = new cljs.core.Keyword(null,"dropdown","dropdown",1343185805).cljs$core$IFn$_invoke$arity$1(props);
var disabled_QMARK_ = new cljs.core.Keyword(null,"disabled","disabled",-1529784218).cljs$core$IFn$_invoke$arity$1(props);
return [cljs.core.str("b-tab "),cljs.core.str((cljs.core.truth_(dropdown_QMARK_)?"dropdown ":null)),cljs.core.str((cljs.core.truth_(disabled_QMARK_)?"disabled ":null))].join('');
});
rubix_bootstrap.components.tab.deactivate_all_tabs = (function rubix_bootstrap$components$tab$deactivate_all_tabs(tab_container_id){
var tab_container_cursor = reagent.core.cursor.call(null,rubix_bootstrap.components.tab.tab_containers,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tab_container_id], null));
var tab_list_cursor = reagent.core.cursor.call(null,tab_container_cursor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tab-list","tab-list",684589107)], null));
var tab_pane_cursor = reagent.core.cursor.call(null,tab_container_cursor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tab-pane","tab-pane",-532627816)], null));
cljs.core.doall.call(null,cljs.core.map.call(null,((function (tab_container_cursor,tab_list_cursor,tab_pane_cursor){
return (function (id){
var tpc = reagent.core.cursor.call(null,rubix_bootstrap.components.tab.tab_panes,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null));
return cljs.core.reset_BANG_.call(null,tpc,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active","active",1895962068),false], null));
});})(tab_container_cursor,tab_list_cursor,tab_pane_cursor))
,cljs.core.deref.call(null,tab_pane_cursor)));

return cljs.core.doall.call(null,cljs.core.map.call(null,((function (tab_container_cursor,tab_list_cursor,tab_pane_cursor){
return (function (id){
var tbc = reagent.core.cursor.call(null,rubix_bootstrap.components.tab.tabs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null));
return cljs.core.reset_BANG_.call(null,tbc,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active","active",1895962068),false], null));
});})(tab_container_cursor,tab_list_cursor,tab_pane_cursor))
,cljs.core.deref.call(null,tab_list_cursor)));
});
rubix_bootstrap.components.tab.activate_tab = (function rubix_bootstrap$components$tab$activate_tab(id,tab_container_id){
var tab_container_cursor = reagent.core.cursor.call(null,rubix_bootstrap.components.tab.tab_containers,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tab_container_id], null));
var tab_list_cursor = reagent.core.cursor.call(null,tab_container_cursor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tab-list","tab-list",684589107)], null));
var tab_pane_cursor = reagent.core.cursor.call(null,tab_container_cursor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tab-pane","tab-pane",-532627816)], null));
var idx = cljsjs.util.indexOf.call(null,cljs.core.vec.call(null,cljs.core.deref.call(null,tab_list_cursor)),id);
var tab_pane_id = cljs.core.get.call(null,cljs.core.deref.call(null,tab_pane_cursor),idx);
var tpc = reagent.core.cursor.call(null,rubix_bootstrap.components.tab.tab_panes,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tab_pane_id], null));
var active_QMARK_ = new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tpc));
if(cljs.core.not.call(null,active_QMARK_)){
return cljs.core.reset_BANG_.call(null,tpc,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active","active",1895962068),true], null));
} else {
return null;
}
});
rubix_bootstrap.components.tab.tab_click = (function rubix_bootstrap$components$tab$tab_click(e,id,tab_container_id){
if(cljs.core.truth_(e)){
e.preventDefault();
} else {
}

var tbc = reagent.core.cursor.call(null,rubix_bootstrap.components.tab.tabs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null));
rubix_bootstrap.components.tab.deactivate_all_tabs.call(null,tab_container_id);

rubix_bootstrap.components.tab.activate_tab.call(null,id,tab_container_id);

return cljs.core.reset_BANG_.call(null,tbc,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active","active",1895962068),true], null));
});
rubix_bootstrap.components.tab.tab_class = (function rubix_bootstrap$components$tab$tab_class(props){
var this$ = reagent.core.current_component.call(null);
var id = cljsjs.util.get_id.call(null,this$,props);
var active_QMARK_ = new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(props);
var dropdown_QMARK_ = new cljs.core.Keyword(null,"dropdown","dropdown",1343185805).cljs$core$IFn$_invoke$arity$1(props);
var classes = rubix_bootstrap.components.tab.gen_classes_t.call(null,props);
var tab_container_id = new cljs.core.Keyword(null,"tab-container-id","tab-container-id",865505137).cljs$core$IFn$_invoke$arity$1(props);
var tab_container_cursor = reagent.core.cursor.call(null,rubix_bootstrap.components.tab.tab_containers,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tab_container_id], null));
var tab_list_cursor = reagent.core.cursor.call(null,tab_container_cursor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tab-list","tab-list",684589107)], null));
var idx = cljsjs.util.indexOf.call(null,cljs.core.vec.call(null,cljs.core.deref.call(null,tab_list_cursor)),id);
var _ = (((idx == null))?cljs.core.swap_BANG_.call(null,tab_list_cursor,cljs.core.conj,id):null);
var tbc = reagent.core.cursor.call(null,rubix_bootstrap.components.tab.tabs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null));
var ___$1 = cljs.core.swap_BANG_.call(null,tbc,cljs.core.assoc,new cljs.core.Keyword(null,"active","active",1895962068),((!((new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tbc)) == null)))?new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tbc)):active_QMARK_));
var on_tab_select = new cljs.core.Keyword(null,"on-tab-select","on-tab-select",1906217468).cljs$core$IFn$_invoke$arity$1(props);
var tab_click_event = ((function (this$,id,active_QMARK_,dropdown_QMARK_,classes,tab_container_id,tab_container_cursor,tab_list_cursor,idx,_,tbc,___$1,on_tab_select){
return (function (e){
rubix_bootstrap.components.tab.tab_click.call(null,e,id,tab_container_id);

return on_tab_select.call(null,cljs.core.clj__GT_js.call(null,props));
});})(this$,id,active_QMARK_,dropdown_QMARK_,classes,tab_container_id,tab_container_cursor,tab_list_cursor,idx,_,tbc,___$1,on_tab_select))
;
if(cljs.core.truth_(dropdown_QMARK_)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.call(null,reagent.core.props.call(null,this$),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),cljsjs.util.trim.call(null,[cljs.core.str("div-b-tab "),cljs.core.str(new cljs.core.Keyword(null,"className","className",-1983287057).cljs$core$IFn$_invoke$arity$1(props))].join('')),new cljs.core.Keyword(null,"on-click","on-click",1632826543),tab_click_event,new cljs.core.Keyword(null,"on-touch-end","on-touch-end",1515667389),tab_click_event], null)),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(props)], null);
} else {
var active_QMARK___$1 = new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tbc));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),cljs.core.merge.call(null,reagent.core.props.call(null,this$),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),cljsjs.util.trim.call(null,[cljs.core.str(classes),cljs.core.str((cljs.core.truth_(active_QMARK___$1)?"active ":null)),cljs.core.str(" "),cljs.core.str(new cljs.core.Keyword(null,"className","className",-1983287057).cljs$core$IFn$_invoke$arity$1(props))].join('')),new cljs.core.Keyword(null,"active","active",1895962068),null], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"role","role",-736691072),"tab",new cljs.core.Keyword(null,"data-toggle","data-toggle",436966687),"tab",new cljs.core.Keyword(null,"on-click","on-click",1632826543),tab_click_event,new cljs.core.Keyword(null,"on-touch-end","on-touch-end",1515667389),tab_click_event], null),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(props)], null)], null);
}
});
rubix_bootstrap.components.tab.tab = cljs.core.with_meta.call(null,rubix_bootstrap.components.tab.tab_class,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (this$){
var props = reagent.core.props.call(null,this$);
var id = cljsjs.util.get_id.call(null,this$,props);
var tbc = reagent.core.cursor.call(null,rubix_bootstrap.components.tab.tabs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null));
var tab_container_id = new cljs.core.Keyword(null,"tab-container-id","tab-container-id",865505137).cljs$core$IFn$_invoke$arity$1(props);
var active_QMARK_ = new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tbc));
var _ = (cljs.core.truth_(active_QMARK_)?rubix_bootstrap.components.tab.activate_tab.call(null,id,tab_container_id):null);
return null;
})], null));
rubix_bootstrap.components.tab.tab_dropdown = (function rubix_bootstrap$components$tab$tab_dropdown(props){
var this$ = reagent.core.current_component.call(null);
var id = cljsjs.util.get_id.call(null,this$,props);
var title = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(props);
var no_caret_QMARK_ = new cljs.core.Keyword(null,"noCaret","noCaret",-345207735).cljs$core$IFn$_invoke$arity$1(props);
var tab_container_id = new cljs.core.Keyword(null,"tab-container-id","tab-container-id",865505137).cljs$core$IFn$_invoke$arity$1(props);
var on_tab_select = new cljs.core.Keyword(null,"on-tab-select","on-tab-select",1906217468).cljs$core$IFn$_invoke$arity$1(props);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),cljs.core.merge.call(null,reagent.core.props.call(null,this$),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),cljsjs.util.trim.call(null,[cljs.core.str("b-tab dropdown "),cljs.core.str(new cljs.core.Keyword(null,"className","className",-1983287057).cljs$core$IFn$_invoke$arity$1(props))].join('')),new cljs.core.Keyword(null,"title","title",636505583),null], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rubix_bootstrap.components.menu.dropdown_button,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tab","tab",-559583621),true,new cljs.core.Keyword(null,"dropdown","dropdown",1343185805),id,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (this$,id,title,no_caret_QMARK_,tab_container_id,on_tab_select){
return (function (e){
var dd_14422 = reagent.core.dom_node.call(null,this$);
goog.dom.classes.add(dd_14422,"active");

return "";
});})(this$,id,title,no_caret_QMARK_,tab_container_id,on_tab_select))
,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),title], null),((cljs.core.not.call(null,no_caret_QMARK_))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rubix_bootstrap.components.caret.caret], null):null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rubix_bootstrap.components.menu.menu,cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,new cljs.core.Keyword(null,"menu-props","menu-props",-1614006883).cljs$core$IFn$_invoke$arity$1(props)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dropdown","dropdown",1343185805),id,new cljs.core.Keyword(null,"onHidden","onHidden",-441246357),((function (this$,id,title,no_caret_QMARK_,tab_container_id,on_tab_select){
return (function (){
var dd_14423 = reagent.core.dom_node.call(null,this$);
goog.dom.classes.remove(dd_14423,"active");

return "";
});})(this$,id,title,no_caret_QMARK_,tab_container_id,on_tab_select))
,new cljs.core.Keyword(null,"children","children",-940561982),cljsjs.util.map_children.call(null,((function (this$,id,title,no_caret_QMARK_,tab_container_id,on_tab_select){
return (function (i,c){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rubix_bootstrap.components.menu.menu_item,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"key","key",-1516042587),i,new cljs.core.Keyword(null,"children","children",-940561982),React.cloneElement(c,{"tab-container-id": tab_container_id, "on-tab-select": on_tab_select, "dropdown": true})], null)], null));
});})(this$,id,title,no_caret_QMARK_,tab_container_id,on_tab_select))
,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(props))], null))], null)], null);
});
rubix_bootstrap.components.tab.tab_pane_class = (function rubix_bootstrap$components$tab$tab_pane_class(props){
var this$ = reagent.core.current_component.call(null);
var id = cljsjs.util.get_id.call(null,this$,props);
var active_QMARK_ = new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(props);
var tab_container_id = new cljs.core.Keyword(null,"tab-container-id","tab-container-id",865505137).cljs$core$IFn$_invoke$arity$1(props);
var tab_container_cursor = reagent.core.cursor.call(null,rubix_bootstrap.components.tab.tab_containers,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tab_container_id], null));
var tab_pane_cursor = reagent.core.cursor.call(null,tab_container_cursor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tab-pane","tab-pane",-532627816)], null));
var idx = cljsjs.util.indexOf.call(null,cljs.core.vec.call(null,cljs.core.deref.call(null,tab_pane_cursor)),id);
var _ = (((idx == null))?cljs.core.swap_BANG_.call(null,tab_pane_cursor,cljs.core.conj,id):null);
var tpc = reagent.core.cursor.call(null,rubix_bootstrap.components.tab.tab_panes,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null));
var ___$1 = cljs.core.swap_BANG_.call(null,tpc,cljs.core.assoc,new cljs.core.Keyword(null,"active","active",1895962068),((!((new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tpc)) == null)))?new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tpc)):active_QMARK_));
var active_QMARK___$1 = new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tpc));
if(cljs.core.truth_(active_QMARK___$1)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.call(null,reagent.core.props.call(null,this$),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),cljsjs.util.trim.call(null,[cljs.core.str(" tab-pane active "),cljs.core.str(new cljs.core.Keyword(null,"className","className",-1983287057).cljs$core$IFn$_invoke$arity$1(props))].join('')),new cljs.core.Keyword(null,"active","active",1895962068),null], null)),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(props)], null);
} else {
return null;
}
});
rubix_bootstrap.components.tab.tab_pane = cljs.core.with_meta.call(null,rubix_bootstrap.components.tab.tab_pane_class,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),(function (this$){
var id = (this$["id"]);
return cljs.core.swap_BANG_.call(null,rubix_bootstrap.components.tab.tab_panes,cljs.core.dissoc,id);
})], null));
rubix_bootstrap.components.tab.gen_classes_tl = (function rubix_bootstrap$components$tab$gen_classes_tl(props){
var pills_QMARK_ = new cljs.core.Keyword(null,"pills","pills",-85353539).cljs$core$IFn$_invoke$arity$1(props);
var stacked_QMARK_ = new cljs.core.Keyword(null,"stacked","stacked",2007240048).cljs$core$IFn$_invoke$arity$1(props);
var stacked_QMARK___$1 = (cljs.core.truth_(stacked_QMARK_)?(cljs.core.truth_(pills_QMARK_)?true:false):false);
var justified_QMARK_ = new cljs.core.Keyword(null,"justified","justified",-547284074).cljs$core$IFn$_invoke$arity$1(props);
var bsStyle = ((!((new cljs.core.Keyword(null,"bsStyle","bsStyle",493669071).cljs$core$IFn$_invoke$arity$1(props) == null)))?cljs.core.filter.call(null,cljs.core.not_empty,clojure.string.split.call(null,new cljs.core.Keyword(null,"bsStyle","bsStyle",493669071).cljs$core$IFn$_invoke$arity$1(props),/\s|,/)):null);
var styles = ((!((bsStyle == null)))?cljs.core.apply.call(null,cljs.core.str,(function (){var iter__5061__auto__ = ((function (pills_QMARK_,stacked_QMARK_,stacked_QMARK___$1,justified_QMARK_,bsStyle){
return (function rubix_bootstrap$components$tab$gen_classes_tl_$_iter__14428(s__14429){
return (new cljs.core.LazySeq(null,((function (pills_QMARK_,stacked_QMARK_,stacked_QMARK___$1,justified_QMARK_,bsStyle){
return (function (){
var s__14429__$1 = s__14429;
while(true){
var temp__4423__auto__ = cljs.core.seq.call(null,s__14429__$1);
if(temp__4423__auto__){
var s__14429__$2 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14429__$2)){
var c__5059__auto__ = cljs.core.chunk_first.call(null,s__14429__$2);
var size__5060__auto__ = cljs.core.count.call(null,c__5059__auto__);
var b__14431 = cljs.core.chunk_buffer.call(null,size__5060__auto__);
if((function (){var i__14430 = (0);
while(true){
if((i__14430 < size__5060__auto__)){
var st = cljs.core._nth.call(null,c__5059__auto__,i__14430);
cljs.core.chunk_append.call(null,b__14431,[cljs.core.str(" nav-"),cljs.core.str(clojure.string.trim.call(null,st))].join(''));

var G__14432 = (i__14430 + (1));
i__14430 = G__14432;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14431),rubix_bootstrap$components$tab$gen_classes_tl_$_iter__14428.call(null,cljs.core.chunk_rest.call(null,s__14429__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14431),null);
}
} else {
var st = cljs.core.first.call(null,s__14429__$2);
return cljs.core.cons.call(null,[cljs.core.str(" nav-"),cljs.core.str(clojure.string.trim.call(null,st))].join(''),rubix_bootstrap$components$tab$gen_classes_tl_$_iter__14428.call(null,cljs.core.rest.call(null,s__14429__$2)));
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
return iter__5061__auto__.call(null,bsStyle);
})()):" nav-default");
return [cljs.core.str("nav "),cljs.core.str(((cljs.core.not.call(null,pills_QMARK_))?"nav-tabs ":null)),cljs.core.str((cljs.core.truth_(pills_QMARK_)?"nav-pills ":null)),cljs.core.str(((stacked_QMARK___$1)?"nav-stacked ":null)),cljs.core.str((cljs.core.truth_(justified_QMARK_)?"nav-justified ":null)),cljs.core.str(styles)].join('');
});
rubix_bootstrap.components.tab.tab_list_class = (function rubix_bootstrap$components$tab$tab_list_class(props){
var this$ = reagent.core.current_component.call(null);
var pills_QMARK_ = new cljs.core.Keyword(null,"pills","pills",-85353539).cljs$core$IFn$_invoke$arity$1(props);
var tablist = (cljs.core.truth_(pills_QMARK_)?"":"tablist");
var classes = rubix_bootstrap.components.tab.gen_classes_tl.call(null,props);
var tab_container_id = (function (){var or__4307__auto__ = new cljs.core.Keyword(null,"tabContainerID","tabContainerID",-91288202).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(or__4307__auto__)){
return or__4307__auto__;
} else {
return new cljs.core.Keyword(null,"tab-container-id","tab-container-id",865505137).cljs$core$IFn$_invoke$arity$1(props);
}
})();
var _ = (this$["tabContainerID"] = tab_container_id);
var tab_container_cursor = reagent.core.cursor.call(null,rubix_bootstrap.components.tab.tab_containers,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tab_container_id], null));
var ___$1 = (((new cljs.core.Keyword(null,"tabContinuation","tabContinuation",272700123).cljs$core$IFn$_invoke$arity$1(props) == null))?rubix_bootstrap.components.tab.create_tab_container_cursor.call(null,tab_container_id):null);
var on_tab_select = (function (){var or__4307__auto__ = new cljs.core.Keyword(null,"onTabSelect","onTabSelect",531880).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(or__4307__auto__)){
return or__4307__auto__;
} else {
var or__4307__auto____$1 = new cljs.core.Keyword(null,"on-tab-select","on-tab-select",1906217468).cljs$core$IFn$_invoke$arity$1(props);
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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.merge.call(null,reagent.core.props.call(null,this$),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),cljsjs.util.trim.call(null,[cljs.core.str(classes),cljs.core.str(" "),cljs.core.str(new cljs.core.Keyword(null,"className","className",-1983287057).cljs$core$IFn$_invoke$arity$1(props))].join('')),new cljs.core.Keyword(null,"role","role",-736691072),tablist], null)),cljsjs.util.map_children.call(null,((function (this$,pills_QMARK_,tablist,classes,tab_container_id,_,tab_container_cursor,___$1,on_tab_select){
return (function (i,c){
return React.cloneElement(c,{"tab-container-id": tab_container_id, "on-tab-select": on_tab_select, "key": i});
});})(this$,pills_QMARK_,tablist,classes,tab_container_id,_,tab_container_cursor,___$1,on_tab_select))
,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(props))], null);
}
});
rubix_bootstrap.components.tab.tab_list = cljs.core.with_meta.call(null,rubix_bootstrap.components.tab.tab_list_class,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),(function (this$){
var id = (this$["tabContainerID"]);
return cljs.core.swap_BANG_.call(null,rubix_bootstrap.components.tab.tab_containers,cljs.core.dissoc,id);
})], null));
rubix_bootstrap.components.tab.tab_content = (function rubix_bootstrap$components$tab$tab_content(props){
var this$ = reagent.core.current_component.call(null);
var tab_container_id = (function (){var or__4307__auto__ = new cljs.core.Keyword(null,"tabContainerID","tabContainerID",-91288202).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(or__4307__auto__)){
return or__4307__auto__;
} else {
return new cljs.core.Keyword(null,"tab-container-id","tab-container-id",865505137).cljs$core$IFn$_invoke$arity$1(props);
}
})();
var on_tab_select = new cljs.core.Keyword(null,"on-tab-select","on-tab-select",1906217468).cljs$core$IFn$_invoke$arity$1(props);
var _ = rubix_bootstrap.components.tab.create_tab_container_cursor.call(null,tab_container_id);
if((tab_container_id == null)){
throw (new Error("tabContainerID required!"));
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.call(null,reagent.core.props.call(null,this$),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),cljsjs.util.trim.call(null,[cljs.core.str("tab-content "),cljs.core.str(new cljs.core.Keyword(null,"className","className",-1983287057).cljs$core$IFn$_invoke$arity$1(props))].join(''))], null)),cljsjs.util.map_children.call(null,((function (this$,tab_container_id,on_tab_select,_){
return (function (i,c){
return React.cloneElement(c,{"tab-container-id": tab_container_id, "on-tab-select": on_tab_select, "key": i});
});})(this$,tab_container_id,on_tab_select,_))
,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(props))], null);
}
});
rubix_bootstrap.components.tab.tab_container_class = (function rubix_bootstrap$components$tab$tab_container_class(props){
var this$ = reagent.core.current_component.call(null);
var id = cljsjs.util.get_id.call(null,this$,props);
var on_tab_select = (function (){var or__4307__auto__ = new cljs.core.Keyword(null,"onTabSelect","onTabSelect",531880).cljs$core$IFn$_invoke$arity$1(props);
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
var _ = rubix_bootstrap.components.tab.create_tab_container_cursor.call(null,id);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.call(null,reagent.core.props.call(null,this$),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),cljsjs.util.trim.call(null,[cljs.core.str("tab-container "),cljs.core.str(new cljs.core.Keyword(null,"className","className",-1983287057).cljs$core$IFn$_invoke$arity$1(props))].join(''))], null)),cljsjs.util.map_children.call(null,((function (this$,id,on_tab_select,_){
return (function (i,c){
return React.cloneElement(c,{"tab-container-id": id, "on-tab-select": on_tab_select, "key": i});
});})(this$,id,on_tab_select,_))
,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(props))], null);
});
rubix_bootstrap.components.tab.tab_container = cljs.core.with_meta.call(null,rubix_bootstrap.components.tab.tab_container_class,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),(function (this$){
var id = (this$["id"]);
return cljs.core.swap_BANG_.call(null,rubix_bootstrap.components.tab.tab_containers,cljs.core.dissoc,id);
})], null));

//# sourceMappingURL=tab.js.map