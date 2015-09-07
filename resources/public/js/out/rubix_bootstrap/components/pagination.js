// Compiled by ClojureScript 0.0-3269 {}
goog.provide('rubix_bootstrap.components.pagination');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljsjs.util');
rubix_bootstrap.components.pagination.gen_classes_page = (function rubix_bootstrap$components$pagination$gen_classes_page(props){
var next_QMARK_ = new cljs.core.Keyword(null,"next","next",-117701485).cljs$core$IFn$_invoke$arity$1(props);
var active_QMARK_ = new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(props);
var disabled_QMARK_ = new cljs.core.Keyword(null,"disabled","disabled",-1529784218).cljs$core$IFn$_invoke$arity$1(props);
var previous_QMARK_ = new cljs.core.Keyword(null,"previous","previous",-720163404).cljs$core$IFn$_invoke$arity$1(props);
return [cljs.core.str((cljs.core.truth_(next_QMARK_)?"next ":null)),cljs.core.str((cljs.core.truth_(active_QMARK_)?"active ":null)),cljs.core.str((cljs.core.truth_(disabled_QMARK_)?"disabled ":null)),cljs.core.str((cljs.core.truth_(previous_QMARK_)?"previous ":null))].join('');
});
rubix_bootstrap.components.pagination.render_page_el = (function rubix_bootstrap$components$pagination$render_page_el(props){
var begin_QMARK_ = new cljs.core.Keyword(null,"begin","begin",-319034319).cljs$core$IFn$_invoke$arity$1(props);
var end_QMARK_ = new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(props);
var next_QMARK_ = new cljs.core.Keyword(null,"next","next",-117701485).cljs$core$IFn$_invoke$arity$1(props);
var previous_QMARK_ = new cljs.core.Keyword(null,"previous","previous",-720163404).cljs$core$IFn$_invoke$arity$1(props);
var active_QMARK_ = new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(props);
var rchildren = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(begin_QMARK_)){
return "\u00AB";
} else {
if(cljs.core.truth_(end_QMARK_)){
return "\u00BB";
} else {
if(cljs.core.truth_(next_QMARK_)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),rchildren," \u2192"], null);
} else {
if(cljs.core.truth_(previous_QMARK_)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"\u2190 ",rchildren], null);
} else {
if(cljs.core.truth_(active_QMARK_)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),rchildren,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.sr-only","span.sr-only",2081743235),"(current)"], null)], null);
} else {
return rchildren;
}
}
}
}
}
});
rubix_bootstrap.components.pagination.page = (function rubix_bootstrap$components$pagination$page(props){
var this$ = reagent.core.current_component.call(null);
var classes = rubix_bootstrap.components.pagination.gen_classes_page.call(null,props);
var child = rubix_bootstrap.components.pagination.render_page_el.call(null,props);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),cljs.core.merge.call(null,reagent.core.props.call(null,this$),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),null,new cljs.core.Keyword(null,"class","class",-2030961996),cljsjs.util.trim.call(null,[cljs.core.str(classes),cljs.core.str(" "),cljs.core.str(new cljs.core.Keyword(null,"className","className",-1983287057).cljs$core$IFn$_invoke$arity$1(props))].join(''))], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),(function (){var or__4307__auto__ = new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(or__4307__auto__)){
return or__4307__auto__;
} else {
return "#";
}
})()], null),child], null)], null);
});
rubix_bootstrap.components.pagination.gen_classes_pagination = (function rubix_bootstrap$components$pagination$gen_classes_pagination(props){
var sm_QMARK_ = new cljs.core.Keyword(null,"sm","sm",-1402575065).cljs$core$IFn$_invoke$arity$1(props);
var lg_QMARK_ = new cljs.core.Keyword(null,"lg","lg",-80787836).cljs$core$IFn$_invoke$arity$1(props);
return [cljs.core.str("pagination "),cljs.core.str((cljs.core.truth_(sm_QMARK_)?"pagination-sm ":null)),cljs.core.str((cljs.core.truth_(lg_QMARK_)?"pagination-lg ":null))].join('');
});
rubix_bootstrap.components.pagination.pagination = (function rubix_bootstrap$components$pagination$pagination(props){
var this$ = reagent.core.current_component.call(null);
var classes = rubix_bootstrap.components.pagination.gen_classes_pagination.call(null,props);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.merge.call(null,reagent.core.props.call(null,this$),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),cljsjs.util.trim.call(null,[cljs.core.str(classes),cljs.core.str(" "),cljs.core.str(new cljs.core.Keyword(null,"className","className",-1983287057).cljs$core$IFn$_invoke$arity$1(props))].join(''))], null)),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(props)], null);
});
rubix_bootstrap.components.pagination.pager = (function rubix_bootstrap$components$pagination$pager(props){
var this$ = reagent.core.current_component.call(null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.merge.call(null,reagent.core.props.call(null,this$),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),cljsjs.util.trim.call(null,[cljs.core.str("pager "),cljs.core.str(new cljs.core.Keyword(null,"className","className",-1983287057).cljs$core$IFn$_invoke$arity$1(props))].join(''))], null)),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(props)], null);
});

//# sourceMappingURL=pagination.js.map