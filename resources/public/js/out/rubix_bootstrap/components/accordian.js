// Compiled by ClojureScript 0.0-3269 {}
goog.provide('rubix_bootstrap.components.accordian');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljsjs.util');
if(typeof rubix_bootstrap.components.accordian.accordians !== 'undefined'){
} else {
rubix_bootstrap.components.accordian.accordians = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
rubix_bootstrap.components.accordian.collapse_pane = (function rubix_bootstrap$components$accordian$collapse_pane(accordian_pane_cursor){
cljs.core.swap_BANG_.call(null,accordian_pane_cursor,cljs.core.assoc,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),(0),new cljs.core.Keyword(null,"padding","padding",1660304693),(0)], null));

return cljs.core.swap_BANG_.call(null,accordian_pane_cursor,cljs.core.assoc,new cljs.core.Keyword(null,"active","active",1895962068),false);
});
rubix_bootstrap.components.accordian.expand_pane = (function rubix_bootstrap$components$accordian$expand_pane(){
var argseq__5347__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return rubix_bootstrap.components.accordian.expand_pane.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5347__auto__);
});

rubix_bootstrap.components.accordian.expand_pane.cljs$core$IFn$_invoke$arity$variadic = (function (accordian_pane_cursor,p__14523){
var vec__14524 = p__14523;
var should_callback_QMARK_ = cljs.core.nth.call(null,vec__14524,(0),null);
var on_item_select = new cljs.core.Keyword(null,"on-item-select","on-item-select",-1142117016).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,accordian_pane_cursor));
var pane_props = new cljs.core.Keyword(null,"pane-props","pane-props",953690554).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,accordian_pane_cursor));
cljs.core.swap_BANG_.call(null,accordian_pane_cursor,cljs.core.assoc,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),"auto",new cljs.core.Keyword(null,"padding","padding",1660304693),""], null));

cljs.core.swap_BANG_.call(null,accordian_pane_cursor,cljs.core.assoc,new cljs.core.Keyword(null,"active","active",1895962068),true);

if(cljs.core.truth_(should_callback_QMARK_)){
var data = cljs.core.dissoc.call(null,pane_props,new cljs.core.Keyword(null,"on-item-select","on-item-select",-1142117016));
var data__$1 = cljs.core.dissoc.call(null,data,new cljs.core.Keyword(null,"active","active",1895962068));
var data__$2 = cljs.core.dissoc.call(null,data__$1,new cljs.core.Keyword(null,"accordian","accordian",1146256378));
return on_item_select.call(null,cljs.core.clj__GT_js.call(null,data__$2));
} else {
return null;
}
});

rubix_bootstrap.components.accordian.expand_pane.cljs$lang$maxFixedArity = (1);

rubix_bootstrap.components.accordian.expand_pane.cljs$lang$applyTo = (function (seq14521){
var G__14522 = cljs.core.first.call(null,seq14521);
var seq14521__$1 = cljs.core.next.call(null,seq14521);
return rubix_bootstrap.components.accordian.expand_pane.cljs$core$IFn$_invoke$arity$variadic(G__14522,seq14521__$1);
});
rubix_bootstrap.components.accordian.collapse_all_panes = (function rubix_bootstrap$components$accordian$collapse_all_panes(){
var argseq__5347__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return rubix_bootstrap.components.accordian.collapse_all_panes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5347__auto__);
});

rubix_bootstrap.components.accordian.collapse_all_panes.cljs$core$IFn$_invoke$arity$variadic = (function (accordian_cursor,p__14527){
var vec__14528 = p__14527;
var exceptAPID = cljs.core.nth.call(null,vec__14528,(0),null);
var raw = cljs.core.deref.call(null,accordian_cursor);
return cljs.core.doall.call(null,(function (){var iter__5061__auto__ = ((function (raw,vec__14528,exceptAPID){
return (function rubix_bootstrap$components$accordian$iter__14529(s__14530){
return (new cljs.core.LazySeq(null,((function (raw,vec__14528,exceptAPID){
return (function (){
var s__14530__$1 = s__14530;
while(true){
var temp__4423__auto__ = cljs.core.seq.call(null,s__14530__$1);
if(temp__4423__auto__){
var s__14530__$2 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14530__$2)){
var c__5059__auto__ = cljs.core.chunk_first.call(null,s__14530__$2);
var size__5060__auto__ = cljs.core.count.call(null,c__5059__auto__);
var b__14532 = cljs.core.chunk_buffer.call(null,size__5060__auto__);
if((function (){var i__14531 = (0);
while(true){
if((i__14531 < size__5060__auto__)){
var vec__14535 = cljs.core._nth.call(null,c__5059__auto__,i__14531);
var aPID = cljs.core.nth.call(null,vec__14535,(0),null);
var v = cljs.core.nth.call(null,vec__14535,(1),null);
cljs.core.chunk_append.call(null,b__14532,((cljs.core.not_EQ_.call(null,aPID,exceptAPID))?(function (){var accordian_pane_cursor = reagent.core.cursor.call(null,accordian_cursor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [aPID], null));
return rubix_bootstrap.components.accordian.collapse_pane.call(null,accordian_pane_cursor);
})():null));

var G__14537 = (i__14531 + (1));
i__14531 = G__14537;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14532),rubix_bootstrap$components$accordian$iter__14529.call(null,cljs.core.chunk_rest.call(null,s__14530__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14532),null);
}
} else {
var vec__14536 = cljs.core.first.call(null,s__14530__$2);
var aPID = cljs.core.nth.call(null,vec__14536,(0),null);
var v = cljs.core.nth.call(null,vec__14536,(1),null);
return cljs.core.cons.call(null,((cljs.core.not_EQ_.call(null,aPID,exceptAPID))?(function (){var accordian_pane_cursor = reagent.core.cursor.call(null,accordian_cursor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [aPID], null));
return rubix_bootstrap.components.accordian.collapse_pane.call(null,accordian_pane_cursor);
})():null),rubix_bootstrap$components$accordian$iter__14529.call(null,cljs.core.rest.call(null,s__14530__$2)));
}
} else {
return null;
}
break;
}
});})(raw,vec__14528,exceptAPID))
,null,null));
});})(raw,vec__14528,exceptAPID))
;
return iter__5061__auto__.call(null,raw);
})());
});

rubix_bootstrap.components.accordian.collapse_all_panes.cljs$lang$maxFixedArity = (1);

rubix_bootstrap.components.accordian.collapse_all_panes.cljs$lang$applyTo = (function (seq14525){
var G__14526 = cljs.core.first.call(null,seq14525);
var seq14525__$1 = cljs.core.next.call(null,seq14525);
return rubix_bootstrap.components.accordian.collapse_all_panes.cljs$core$IFn$_invoke$arity$variadic(G__14526,seq14525__$1);
});
rubix_bootstrap.components.accordian.toggle_accordian = (function rubix_bootstrap$components$accordian$toggle_accordian(){
var argseq__5347__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return rubix_bootstrap.components.accordian.toggle_accordian.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5347__auto__);
});

rubix_bootstrap.components.accordian.toggle_accordian.cljs$core$IFn$_invoke$arity$variadic = (function (accordian_pane_cursor,p__14540){
var vec__14541 = p__14540;
var should_callback_QMARK_ = cljs.core.nth.call(null,vec__14541,(0),null);
var is_active_QMARK_ = new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,accordian_pane_cursor));
if(cljs.core.truth_(is_active_QMARK_)){
return rubix_bootstrap.components.accordian.collapse_pane.call(null,accordian_pane_cursor);
} else {
return rubix_bootstrap.components.accordian.expand_pane.call(null,accordian_pane_cursor,should_callback_QMARK_);
}
});

rubix_bootstrap.components.accordian.toggle_accordian.cljs$lang$maxFixedArity = (1);

rubix_bootstrap.components.accordian.toggle_accordian.cljs$lang$applyTo = (function (seq14538){
var G__14539 = cljs.core.first.call(null,seq14538);
var seq14538__$1 = cljs.core.next.call(null,seq14538);
return rubix_bootstrap.components.accordian.toggle_accordian.cljs$core$IFn$_invoke$arity$variadic(G__14539,seq14538__$1);
});
rubix_bootstrap.components.accordian.accordian_content = (function rubix_bootstrap$components$accordian$accordian_content(props){
cljsjs.util.debug.call(null,"accordian-content");

var this$ = reagent.core.current_component.call(null);
var accordianID = new cljs.core.Keyword(null,"accordian","accordian",1146256378).cljs$core$IFn$_invoke$arity$1(props);
var accordianPaneID = new cljs.core.Keyword(null,"accordianPane","accordianPane",604636169).cljs$core$IFn$_invoke$arity$1(props);
var accordian_cursor = reagent.core.cursor.call(null,rubix_bootstrap.components.accordian.accordians,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [accordianID], null));
var accordian_pane_cursor = reagent.core.cursor.call(null,accordian_cursor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [accordianPaneID], null));
var is_active_QMARK_ = new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,accordian_pane_cursor));
var _ = (cljs.core.truth_(is_active_QMARK_)?(function (){
rubix_bootstrap.components.accordian.collapse_all_panes.call(null,accordian_cursor);

return rubix_bootstrap.components.accordian.expand_pane.call(null,accordian_pane_cursor);
})()
:null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljsjs.util.deep_merge.call(null,reagent.core.props.call(null,this$),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),cljsjs.util.trim.call(null,[cljs.core.str("accordian-content "),cljs.core.str(new cljs.core.Keyword(null,"className","className",-1983287057).cljs$core$IFn$_invoke$arity$1(props))].join('')),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden"], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.accordian-body","div.accordian-body",-1854913496),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,accordian_pane_cursor))], null),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(props)], null)], null);
});
rubix_bootstrap.components.accordian.accordian_title = (function rubix_bootstrap$components$accordian$accordian_title(props){
cljsjs.util.debug.call(null,"accordian-title");

var this$ = reagent.core.current_component.call(null);
var accordianID = new cljs.core.Keyword(null,"accordian","accordian",1146256378).cljs$core$IFn$_invoke$arity$1(props);
var accordianPaneID = new cljs.core.Keyword(null,"accordianPane","accordianPane",604636169).cljs$core$IFn$_invoke$arity$1(props);
var accordian_cursor = reagent.core.cursor.call(null,rubix_bootstrap.components.accordian.accordians,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [accordianID], null));
var accordian_pane_cursor = reagent.core.cursor.call(null,accordian_cursor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [accordianPaneID], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),cljs.core.merge.call(null,reagent.core.props.call(null,this$),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),(function (){var or__4307__auto__ = new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(or__4307__auto__)){
return or__4307__auto__;
} else {
return "#";
}
})(),new cljs.core.Keyword(null,"class","class",-2030961996),cljsjs.util.trim.call(null,[cljs.core.str("accordian-title "),cljs.core.str(new cljs.core.Keyword(null,"className","className",-1983287057).cljs$core$IFn$_invoke$arity$1(props))].join('')),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (this$,accordianID,accordianPaneID,accordian_cursor,accordian_pane_cursor){
return (function (e){
e.preventDefault();

rubix_bootstrap.components.accordian.collapse_all_panes.call(null,accordian_cursor,accordianPaneID);

rubix_bootstrap.components.accordian.toggle_accordian.call(null,accordian_pane_cursor,true);

if(cljs.core.truth_(new cljs.core.Keyword(null,"onClick","onClick",-1991238530).cljs$core$IFn$_invoke$arity$1(props))){
return new cljs.core.Keyword(null,"onClick","onClick",-1991238530).cljs$core$IFn$_invoke$arity$1(props).call(null,e);
} else {
return null;
}
});})(this$,accordianID,accordianPaneID,accordian_cursor,accordian_pane_cursor))
], null)),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(props)], null);
});
rubix_bootstrap.components.accordian.accordian_pane = (function rubix_bootstrap$components$accordian$accordian_pane(props){
cljsjs.util.debug.call(null,"accordian-pane");

var this$ = reagent.core.current_component.call(null);
var accordianPaneID = (function (){var or__4307__auto__ = new cljs.core.Keyword(null,"accordianPaneID","accordianPaneID",-1841959144).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(or__4307__auto__)){
return or__4307__auto__;
} else {
var or__4307__auto____$1 = (this$["accordianPaneID"]);
if(cljs.core.truth_(or__4307__auto____$1)){
return or__4307__auto____$1;
} else {
return (this$["accordianPaneID"] = cljsjs.util.gen_id.call(null));
}
}
})();
var is_active_QMARK_ = (function (){var or__4307__auto__ = new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(or__4307__auto__)){
return or__4307__auto__;
} else {
return false;
}
})();
var accordianID = new cljs.core.Keyword(null,"accordian","accordian",1146256378).cljs$core$IFn$_invoke$arity$1(props);
var on_item_select = new cljs.core.Keyword(null,"on-item-select","on-item-select",-1142117016).cljs$core$IFn$_invoke$arity$1(props);
var accordian_cursor = reagent.core.cursor.call(null,rubix_bootstrap.components.accordian.accordians,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [accordianID], null));
var _ = cljs.core.swap_BANG_.call(null,accordian_cursor,cljs.core.assoc,accordianPaneID,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),(0),new cljs.core.Keyword(null,"padding","padding",1660304693),(0)], null),new cljs.core.Keyword(null,"active","active",1895962068),is_active_QMARK_,new cljs.core.Keyword(null,"pane-props","pane-props",953690554),(function (){var data = cljs.core.dissoc.call(null,props,new cljs.core.Keyword(null,"children","children",-940561982));
var data__$1 = cljs.core.dissoc.call(null,data,new cljs.core.Keyword(null,"-elem-count","-elem-count",663797079));
var data__$2 = cljs.core.assoc.call(null,data__$1,new cljs.core.Keyword(null,"accordianPaneID","accordianPaneID",-1841959144),accordianPaneID);
return data__$2;
})(),new cljs.core.Keyword(null,"on-item-select","on-item-select",-1142117016),on_item_select], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),cljs.core.merge.call(null,reagent.core.props.call(null,this$),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),cljsjs.util.trim.call(null,[cljs.core.str("accordian-pane "),cljs.core.str(new cljs.core.Keyword(null,"className","className",-1983287057).cljs$core$IFn$_invoke$arity$1(props))].join(''))], null)),cljsjs.util.map_children.call(null,((function (this$,accordianPaneID,is_active_QMARK_,accordianID,on_item_select,accordian_cursor,_){
return (function (i,c){
return React.cloneElement(c,{"accordian": accordianID, "accordianPane": accordianPaneID, "key": i});
});})(this$,accordianPaneID,is_active_QMARK_,accordianID,on_item_select,accordian_cursor,_))
,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(props))], null);
});
rubix_bootstrap.components.accordian.search_and_select = (function rubix_bootstrap$components$accordian$search_and_select(accordianID,k,v){
var accordian_cursor = reagent.core.cursor.call(null,rubix_bootstrap.components.accordian.accordians,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [accordianID], null));
var accordian_data = cljs.core.deref.call(null,accordian_cursor);
return cljs.core.doall.call(null,(function (){var iter__5061__auto__ = ((function (accordian_cursor,accordian_data){
return (function rubix_bootstrap$components$accordian$search_and_select_$_iter__14550(s__14551){
return (new cljs.core.LazySeq(null,((function (accordian_cursor,accordian_data){
return (function (){
var s__14551__$1 = s__14551;
while(true){
var temp__4423__auto__ = cljs.core.seq.call(null,s__14551__$1);
if(temp__4423__auto__){
var s__14551__$2 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14551__$2)){
var c__5059__auto__ = cljs.core.chunk_first.call(null,s__14551__$2);
var size__5060__auto__ = cljs.core.count.call(null,c__5059__auto__);
var b__14553 = cljs.core.chunk_buffer.call(null,size__5060__auto__);
if((function (){var i__14552 = (0);
while(true){
if((i__14552 < size__5060__auto__)){
var vec__14556 = cljs.core._nth.call(null,c__5059__auto__,i__14552);
var aPID = cljs.core.nth.call(null,vec__14556,(0),null);
var data = cljs.core.nth.call(null,vec__14556,(1),null);
cljs.core.chunk_append.call(null,b__14553,(function (){var pane_props = new cljs.core.Keyword(null,"pane-props","pane-props",953690554).cljs$core$IFn$_invoke$arity$1(data);
var value = cljs.core.keyword.call(null,k).call(null,pane_props);
if(cljs.core._EQ_.call(null,value,v)){
var accordian_pane_cursor = reagent.core.cursor.call(null,accordian_cursor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [aPID], null));
rubix_bootstrap.components.accordian.collapse_all_panes.call(null,accordian_cursor);

return rubix_bootstrap.components.accordian.expand_pane.call(null,accordian_pane_cursor);
} else {
return null;
}
})());

var G__14558 = (i__14552 + (1));
i__14552 = G__14558;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14553),rubix_bootstrap$components$accordian$search_and_select_$_iter__14550.call(null,cljs.core.chunk_rest.call(null,s__14551__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14553),null);
}
} else {
var vec__14557 = cljs.core.first.call(null,s__14551__$2);
var aPID = cljs.core.nth.call(null,vec__14557,(0),null);
var data = cljs.core.nth.call(null,vec__14557,(1),null);
return cljs.core.cons.call(null,(function (){var pane_props = new cljs.core.Keyword(null,"pane-props","pane-props",953690554).cljs$core$IFn$_invoke$arity$1(data);
var value = cljs.core.keyword.call(null,k).call(null,pane_props);
if(cljs.core._EQ_.call(null,value,v)){
var accordian_pane_cursor = reagent.core.cursor.call(null,accordian_cursor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [aPID], null));
rubix_bootstrap.components.accordian.collapse_all_panes.call(null,accordian_cursor);

return rubix_bootstrap.components.accordian.expand_pane.call(null,accordian_pane_cursor);
} else {
return null;
}
})(),rubix_bootstrap$components$accordian$search_and_select_$_iter__14550.call(null,cljs.core.rest.call(null,s__14551__$2)));
}
} else {
return null;
}
break;
}
});})(accordian_cursor,accordian_data))
,null,null));
});})(accordian_cursor,accordian_data))
;
return iter__5061__auto__.call(null,accordian_data);
})());
});
rubix_bootstrap.components.accordian.accordian_class = (function rubix_bootstrap$components$accordian$accordian_class(props){
cljsjs.util.debug.call(null,"accordian");

var this$ = reagent.core.current_component.call(null);
var accordianID = (function (){var or__4307__auto__ = new cljs.core.Keyword(null,"accordianID","accordianID",812776731).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(or__4307__auto__)){
return or__4307__auto__;
} else {
var or__4307__auto____$1 = (this$["accordianID"]);
if(cljs.core.truth_(or__4307__auto____$1)){
return or__4307__auto____$1;
} else {
return (this$["accordianID"] = cljsjs.util.gen_id.call(null));
}
}
})();
var on_item_select = new cljs.core.Keyword(null,"onItemSelect","onItemSelect",781904873).cljs$core$IFn$_invoke$arity$1(props);
var on_set_select_item = new cljs.core.Keyword(null,"onSetSelectItem","onSetSelectItem",1129790476).cljs$core$IFn$_invoke$arity$1(props);
var _ = on_set_select_item.call(null,((function (this$,accordianID,on_item_select,on_set_select_item){
return (function (k,v){
return rubix_bootstrap.components.accordian.search_and_select.call(null,accordianID,k,v);
});})(this$,accordianID,on_item_select,on_set_select_item))
);
var ___$1 = cljs.core.swap_BANG_.call(null,rubix_bootstrap.components.accordian.accordians,cljs.core.assoc,accordianID,cljs.core.PersistentArrayMap.EMPTY);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.merge.call(null,reagent.core.props.call(null,this$),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),cljsjs.util.trim.call(null,[cljs.core.str("accordian "),cljs.core.str(new cljs.core.Keyword(null,"className","className",-1983287057).cljs$core$IFn$_invoke$arity$1(props))].join(''))], null)),cljsjs.util.map_children.call(null,((function (this$,accordianID,on_item_select,on_set_select_item,_,___$1){
return (function (i,c){
return React.cloneElement(c,{"accordian": accordianID, "on-item-select": on_item_select, "key": i});
});})(this$,accordianID,on_item_select,on_set_select_item,_,___$1))
,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(props))], null);
});
rubix_bootstrap.components.accordian.accordian = cljs.core.with_meta.call(null,rubix_bootstrap.components.accordian.accordian_class,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),(function (this$){
return cljs.core.swap_BANG_.call(null,rubix_bootstrap.components.accordian.accordians,cljs.core.dissoc,(this$["accordianID"]));
})], null));

//# sourceMappingURL=accordian.js.map