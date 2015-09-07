// Compiled by ClojureScript 0.0-3269 {:static-fns true, :optimize-constants true}
goog.provide('rubix_bootstrap.components.accordian');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljsjs.util');
if(typeof rubix_bootstrap.components.accordian.accordians !== 'undefined'){
} else {
rubix_bootstrap.components.accordian.accordians = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
rubix_bootstrap.components.accordian.collapse_pane = (function rubix_bootstrap$components$accordian$collapse_pane(accordian_pane_cursor){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(accordian_pane_cursor,cljs.core.assoc,cljs.core.constant$keyword$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$height,(0),cljs.core.constant$keyword$padding,(0)], null));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(accordian_pane_cursor,cljs.core.assoc,cljs.core.constant$keyword$active,false);
});
rubix_bootstrap.components.accordian.expand_pane = (function rubix_bootstrap$components$accordian$expand_pane(){
var argseq__5347__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return rubix_bootstrap.components.accordian.expand_pane.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5347__auto__);
});

rubix_bootstrap.components.accordian.expand_pane.cljs$core$IFn$_invoke$arity$variadic = (function (accordian_pane_cursor,p__13989){
var vec__13990 = p__13989;
var should_callback_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13990,(0),null);
var on_item_select = cljs.core.constant$keyword$on_DASH_item_DASH_select.cljs$core$IFn$_invoke$arity$1((function (){var G__13991 = accordian_pane_cursor;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__13991) : cljs.core.deref.call(null,G__13991));
})());
var pane_props = cljs.core.constant$keyword$pane_DASH_props.cljs$core$IFn$_invoke$arity$1((function (){var G__13992 = accordian_pane_cursor;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__13992) : cljs.core.deref.call(null,G__13992));
})());
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(accordian_pane_cursor,cljs.core.assoc,cljs.core.constant$keyword$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$height,"auto",cljs.core.constant$keyword$padding,""], null));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(accordian_pane_cursor,cljs.core.assoc,cljs.core.constant$keyword$active,true);

if(cljs.core.truth_(should_callback_QMARK_)){
var data = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(pane_props,cljs.core.constant$keyword$on_DASH_item_DASH_select);
var data__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$active);
var data__$2 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(data__$1,cljs.core.constant$keyword$accordian);
var G__13993 = cljs.core.clj__GT_js(data__$2);
return (on_item_select.cljs$core$IFn$_invoke$arity$1 ? on_item_select.cljs$core$IFn$_invoke$arity$1(G__13993) : on_item_select.call(null,G__13993));
} else {
return null;
}
});

rubix_bootstrap.components.accordian.expand_pane.cljs$lang$maxFixedArity = (1);

rubix_bootstrap.components.accordian.expand_pane.cljs$lang$applyTo = (function (seq13987){
var G__13988 = cljs.core.first(seq13987);
var seq13987__$1 = cljs.core.next(seq13987);
return rubix_bootstrap.components.accordian.expand_pane.cljs$core$IFn$_invoke$arity$variadic(G__13988,seq13987__$1);
});
rubix_bootstrap.components.accordian.collapse_all_panes = (function rubix_bootstrap$components$accordian$collapse_all_panes(){
var argseq__5347__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return rubix_bootstrap.components.accordian.collapse_all_panes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5347__auto__);
});

rubix_bootstrap.components.accordian.collapse_all_panes.cljs$core$IFn$_invoke$arity$variadic = (function (accordian_cursor,p__13996){
var vec__13997 = p__13996;
var exceptAPID = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13997,(0),null);
var raw = (function (){var G__13998 = accordian_cursor;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__13998) : cljs.core.deref.call(null,G__13998));
})();
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__5061__auto__ = ((function (raw,vec__13997,exceptAPID){
return (function rubix_bootstrap$components$accordian$iter__13999(s__14000){
return (new cljs.core.LazySeq(null,((function (raw,vec__13997,exceptAPID){
return (function (){
var s__14000__$1 = s__14000;
while(true){
var temp__4423__auto__ = cljs.core.seq(s__14000__$1);
if(temp__4423__auto__){
var s__14000__$2 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14000__$2)){
var c__5059__auto__ = cljs.core.chunk_first(s__14000__$2);
var size__5060__auto__ = cljs.core.count(c__5059__auto__);
var b__14002 = cljs.core.chunk_buffer(size__5060__auto__);
if((function (){var i__14001 = (0);
while(true){
if((i__14001 < size__5060__auto__)){
var vec__14007 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5059__auto__,i__14001);
var aPID = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14007,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14007,(1),null);
cljs.core.chunk_append(b__14002,((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(aPID,exceptAPID))?(function (){var accordian_pane_cursor = reagent.core.cursor(accordian_cursor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [aPID], null));
return rubix_bootstrap.components.accordian.collapse_pane(accordian_pane_cursor);
})():null));

var G__14009 = (i__14001 + (1));
i__14001 = G__14009;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14002),rubix_bootstrap$components$accordian$iter__13999(cljs.core.chunk_rest(s__14000__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14002),null);
}
} else {
var vec__14008 = cljs.core.first(s__14000__$2);
var aPID = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14008,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14008,(1),null);
return cljs.core.cons(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(aPID,exceptAPID))?(function (){var accordian_pane_cursor = reagent.core.cursor(accordian_cursor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [aPID], null));
return rubix_bootstrap.components.accordian.collapse_pane(accordian_pane_cursor);
})():null),rubix_bootstrap$components$accordian$iter__13999(cljs.core.rest(s__14000__$2)));
}
} else {
return null;
}
break;
}
});})(raw,vec__13997,exceptAPID))
,null,null));
});})(raw,vec__13997,exceptAPID))
;
return iter__5061__auto__(raw);
})());
});

rubix_bootstrap.components.accordian.collapse_all_panes.cljs$lang$maxFixedArity = (1);

rubix_bootstrap.components.accordian.collapse_all_panes.cljs$lang$applyTo = (function (seq13994){
var G__13995 = cljs.core.first(seq13994);
var seq13994__$1 = cljs.core.next(seq13994);
return rubix_bootstrap.components.accordian.collapse_all_panes.cljs$core$IFn$_invoke$arity$variadic(G__13995,seq13994__$1);
});
rubix_bootstrap.components.accordian.toggle_accordian = (function rubix_bootstrap$components$accordian$toggle_accordian(){
var argseq__5347__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return rubix_bootstrap.components.accordian.toggle_accordian.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5347__auto__);
});

rubix_bootstrap.components.accordian.toggle_accordian.cljs$core$IFn$_invoke$arity$variadic = (function (accordian_pane_cursor,p__14012){
var vec__14013 = p__14012;
var should_callback_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14013,(0),null);
var is_active_QMARK_ = cljs.core.constant$keyword$active.cljs$core$IFn$_invoke$arity$1((function (){var G__14014 = accordian_pane_cursor;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14014) : cljs.core.deref.call(null,G__14014));
})());
if(cljs.core.truth_(is_active_QMARK_)){
return rubix_bootstrap.components.accordian.collapse_pane(accordian_pane_cursor);
} else {
return rubix_bootstrap.components.accordian.expand_pane.cljs$core$IFn$_invoke$arity$variadic(accordian_pane_cursor,cljs.core.array_seq([should_callback_QMARK_], 0));
}
});

rubix_bootstrap.components.accordian.toggle_accordian.cljs$lang$maxFixedArity = (1);

rubix_bootstrap.components.accordian.toggle_accordian.cljs$lang$applyTo = (function (seq14010){
var G__14011 = cljs.core.first(seq14010);
var seq14010__$1 = cljs.core.next(seq14010);
return rubix_bootstrap.components.accordian.toggle_accordian.cljs$core$IFn$_invoke$arity$variadic(G__14011,seq14010__$1);
});
rubix_bootstrap.components.accordian.accordian_content = (function rubix_bootstrap$components$accordian$accordian_content(props){
cljsjs.util.debug.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["accordian-content"], 0));

var this$ = reagent.core.current_component();
var accordianID = cljs.core.constant$keyword$accordian.cljs$core$IFn$_invoke$arity$1(props);
var accordianPaneID = cljs.core.constant$keyword$accordianPane.cljs$core$IFn$_invoke$arity$1(props);
var accordian_cursor = reagent.core.cursor(rubix_bootstrap.components.accordian.accordians,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [accordianID], null));
var accordian_pane_cursor = reagent.core.cursor(accordian_cursor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [accordianPaneID], null));
var is_active_QMARK_ = cljs.core.constant$keyword$active.cljs$core$IFn$_invoke$arity$1((function (){var G__14017 = accordian_pane_cursor;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14017) : cljs.core.deref.call(null,G__14017));
})());
var _ = (cljs.core.truth_(is_active_QMARK_)?(function (){
rubix_bootstrap.components.accordian.collapse_all_panes(accordian_cursor);

return rubix_bootstrap.components.accordian.expand_pane(accordian_pane_cursor);
})()
:null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div,cljsjs.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([reagent.core.props(this$),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$class,cljsjs.util.trim([cljs.core.str("accordian-content "),cljs.core.str(cljs.core.constant$keyword$className.cljs$core$IFn$_invoke$arity$1(props))].join('')),cljs.core.constant$keyword$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$overflow,"hidden"], null)], null)], 0)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$accordian_DASH_body,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$style,cljs.core.constant$keyword$style.cljs$core$IFn$_invoke$arity$1((function (){var G__14018 = accordian_pane_cursor;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14018) : cljs.core.deref.call(null,G__14018));
})())], null),cljs.core.constant$keyword$children.cljs$core$IFn$_invoke$arity$1(props)], null)], null);
});
rubix_bootstrap.components.accordian.accordian_title = (function rubix_bootstrap$components$accordian$accordian_title(props){
cljsjs.util.debug.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["accordian-title"], 0));

var this$ = reagent.core.current_component();
var accordianID = cljs.core.constant$keyword$accordian.cljs$core$IFn$_invoke$arity$1(props);
var accordianPaneID = cljs.core.constant$keyword$accordianPane.cljs$core$IFn$_invoke$arity$1(props);
var accordian_cursor = reagent.core.cursor(rubix_bootstrap.components.accordian.accordians,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [accordianID], null));
var accordian_pane_cursor = reagent.core.cursor(accordian_cursor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [accordianPaneID], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$a,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([reagent.core.props(this$),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$href,(function (){var or__4307__auto__ = cljs.core.constant$keyword$href.cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(or__4307__auto__)){
return or__4307__auto__;
} else {
return "#";
}
})(),cljs.core.constant$keyword$class,cljsjs.util.trim([cljs.core.str("accordian-title "),cljs.core.str(cljs.core.constant$keyword$className.cljs$core$IFn$_invoke$arity$1(props))].join('')),cljs.core.constant$keyword$on_DASH_click,((function (this$,accordianID,accordianPaneID,accordian_cursor,accordian_pane_cursor){
return (function (e){
e.preventDefault();

rubix_bootstrap.components.accordian.collapse_all_panes.cljs$core$IFn$_invoke$arity$variadic(accordian_cursor,cljs.core.array_seq([accordianPaneID], 0));

rubix_bootstrap.components.accordian.toggle_accordian.cljs$core$IFn$_invoke$arity$variadic(accordian_pane_cursor,cljs.core.array_seq([true], 0));

if(cljs.core.truth_(cljs.core.constant$keyword$onClick.cljs$core$IFn$_invoke$arity$1(props))){
return cljs.core.constant$keyword$onClick.cljs$core$IFn$_invoke$arity$1(props).call(null,e);
} else {
return null;
}
});})(this$,accordianID,accordianPaneID,accordian_cursor,accordian_pane_cursor))
], null)], 0)),cljs.core.constant$keyword$children.cljs$core$IFn$_invoke$arity$1(props)], null);
});
rubix_bootstrap.components.accordian.accordian_pane = (function rubix_bootstrap$components$accordian$accordian_pane(props){
cljsjs.util.debug.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["accordian-pane"], 0));

var this$ = reagent.core.current_component();
var accordianPaneID = (function (){var or__4307__auto__ = cljs.core.constant$keyword$accordianPaneID.cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(or__4307__auto__)){
return or__4307__auto__;
} else {
var or__4307__auto____$1 = (this$["accordianPaneID"]);
if(cljs.core.truth_(or__4307__auto____$1)){
return or__4307__auto____$1;
} else {
return (this$["accordianPaneID"] = cljsjs.util.gen_id());
}
}
})();
var is_active_QMARK_ = (function (){var or__4307__auto__ = cljs.core.constant$keyword$active.cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(or__4307__auto__)){
return or__4307__auto__;
} else {
return false;
}
})();
var accordianID = cljs.core.constant$keyword$accordian.cljs$core$IFn$_invoke$arity$1(props);
var on_item_select = cljs.core.constant$keyword$on_DASH_item_DASH_select.cljs$core$IFn$_invoke$arity$1(props);
var accordian_cursor = reagent.core.cursor(rubix_bootstrap.components.accordian.accordians,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [accordianID], null));
var _ = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(accordian_cursor,cljs.core.assoc,accordianPaneID,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$height,(0),cljs.core.constant$keyword$padding,(0)], null),cljs.core.constant$keyword$active,is_active_QMARK_,cljs.core.constant$keyword$pane_DASH_props,(function (){var data = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,cljs.core.constant$keyword$children);
var data__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$_DASH_elem_DASH_count);
var data__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__$1,cljs.core.constant$keyword$accordianPaneID,accordianPaneID);
return data__$2;
})(),cljs.core.constant$keyword$on_DASH_item_DASH_select,on_item_select], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$li,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([reagent.core.props(this$),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$class,cljsjs.util.trim([cljs.core.str("accordian-pane "),cljs.core.str(cljs.core.constant$keyword$className.cljs$core$IFn$_invoke$arity$1(props))].join(''))], null)], 0)),cljsjs.util.map_children(((function (this$,accordianPaneID,is_active_QMARK_,accordianID,on_item_select,accordian_cursor,_){
return (function (i,c){
return React.cloneElement(c,{"accordian": accordianID, "accordianPane": accordianPaneID, "key": i});
});})(this$,accordianPaneID,is_active_QMARK_,accordianID,on_item_select,accordian_cursor,_))
,cljs.core.constant$keyword$children.cljs$core$IFn$_invoke$arity$1(props))], null);
});
rubix_bootstrap.components.accordian.search_and_select = (function rubix_bootstrap$components$accordian$search_and_select(accordianID,k,v){
var accordian_cursor = reagent.core.cursor(rubix_bootstrap.components.accordian.accordians,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [accordianID], null));
var accordian_data = (function (){var G__14030 = accordian_cursor;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14030) : cljs.core.deref.call(null,G__14030));
})();
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__5061__auto__ = ((function (accordian_cursor,accordian_data){
return (function rubix_bootstrap$components$accordian$search_and_select_$_iter__14031(s__14032){
return (new cljs.core.LazySeq(null,((function (accordian_cursor,accordian_data){
return (function (){
var s__14032__$1 = s__14032;
while(true){
var temp__4423__auto__ = cljs.core.seq(s__14032__$1);
if(temp__4423__auto__){
var s__14032__$2 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14032__$2)){
var c__5059__auto__ = cljs.core.chunk_first(s__14032__$2);
var size__5060__auto__ = cljs.core.count(c__5059__auto__);
var b__14034 = cljs.core.chunk_buffer(size__5060__auto__);
if((function (){var i__14033 = (0);
while(true){
if((i__14033 < size__5060__auto__)){
var vec__14039 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5059__auto__,i__14033);
var aPID = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14039,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14039,(1),null);
cljs.core.chunk_append(b__14034,(function (){var pane_props = cljs.core.constant$keyword$pane_DASH_props.cljs$core$IFn$_invoke$arity$1(data);
var value = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k).call(null,pane_props);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,v)){
var accordian_pane_cursor = reagent.core.cursor(accordian_cursor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [aPID], null));
rubix_bootstrap.components.accordian.collapse_all_panes(accordian_cursor);

return rubix_bootstrap.components.accordian.expand_pane(accordian_pane_cursor);
} else {
return null;
}
})());

var G__14041 = (i__14033 + (1));
i__14033 = G__14041;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14034),rubix_bootstrap$components$accordian$search_and_select_$_iter__14031(cljs.core.chunk_rest(s__14032__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14034),null);
}
} else {
var vec__14040 = cljs.core.first(s__14032__$2);
var aPID = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14040,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14040,(1),null);
return cljs.core.cons((function (){var pane_props = cljs.core.constant$keyword$pane_DASH_props.cljs$core$IFn$_invoke$arity$1(data);
var value = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k).call(null,pane_props);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,v)){
var accordian_pane_cursor = reagent.core.cursor(accordian_cursor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [aPID], null));
rubix_bootstrap.components.accordian.collapse_all_panes(accordian_cursor);

return rubix_bootstrap.components.accordian.expand_pane(accordian_pane_cursor);
} else {
return null;
}
})(),rubix_bootstrap$components$accordian$search_and_select_$_iter__14031(cljs.core.rest(s__14032__$2)));
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
return iter__5061__auto__(accordian_data);
})());
});
rubix_bootstrap.components.accordian.accordian_class = (function rubix_bootstrap$components$accordian$accordian_class(props){
cljsjs.util.debug.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["accordian"], 0));

var this$ = reagent.core.current_component();
var accordianID = (function (){var or__4307__auto__ = cljs.core.constant$keyword$accordianID.cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(or__4307__auto__)){
return or__4307__auto__;
} else {
var or__4307__auto____$1 = (this$["accordianID"]);
if(cljs.core.truth_(or__4307__auto____$1)){
return or__4307__auto____$1;
} else {
return (this$["accordianID"] = cljsjs.util.gen_id());
}
}
})();
var on_item_select = cljs.core.constant$keyword$onItemSelect.cljs$core$IFn$_invoke$arity$1(props);
var on_set_select_item = cljs.core.constant$keyword$onSetSelectItem.cljs$core$IFn$_invoke$arity$1(props);
var _ = (function (){var G__14043 = ((function (this$,accordianID,on_item_select,on_set_select_item){
return (function (k,v){
return rubix_bootstrap.components.accordian.search_and_select(accordianID,k,v);
});})(this$,accordianID,on_item_select,on_set_select_item))
;
return (on_set_select_item.cljs$core$IFn$_invoke$arity$1 ? on_set_select_item.cljs$core$IFn$_invoke$arity$1(G__14043) : on_set_select_item.call(null,G__14043));
})();
var ___$1 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(rubix_bootstrap.components.accordian.accordians,cljs.core.assoc,accordianID,cljs.core.PersistentArrayMap.EMPTY);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$ul,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([reagent.core.props(this$),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$class,cljsjs.util.trim([cljs.core.str("accordian "),cljs.core.str(cljs.core.constant$keyword$className.cljs$core$IFn$_invoke$arity$1(props))].join(''))], null)], 0)),cljsjs.util.map_children(((function (this$,accordianID,on_item_select,on_set_select_item,_,___$1){
return (function (i,c){
return React.cloneElement(c,{"accordian": accordianID, "on-item-select": on_item_select, "key": i});
});})(this$,accordianID,on_item_select,on_set_select_item,_,___$1))
,cljs.core.constant$keyword$children.cljs$core$IFn$_invoke$arity$1(props))], null);
});
rubix_bootstrap.components.accordian.accordian = cljs.core.with_meta(rubix_bootstrap.components.accordian.accordian_class,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$component_DASH_will_DASH_unmount,(function (this$){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(rubix_bootstrap.components.accordian.accordians,cljs.core.dissoc,(this$["accordianID"]));
})], null));
