// Compiled by ClojureScript 0.0-3269 {}
goog.provide('rubix_bootstrap.components.breadcrumb');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljsjs.util');
rubix_bootstrap.components.breadcrumb.b_link_li = (function rubix_bootstrap$components$breadcrumb$b_link_li(props,classes,child){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),cljs.core.merge.call(null,props,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),null,new cljs.core.Keyword(null,"class","class",-2030961996),cljsjs.util.trim.call(null,classes)], null)),child], null);
});
rubix_bootstrap.components.breadcrumb.b_link = (function rubix_bootstrap$components$breadcrumb$b_link(props){
var this$ = reagent.core.current_component.call(null);
var active = (cljs.core.truth_(new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(props))?"active":"");
var active_QMARK_ = cljs.core._EQ_.call(null,active,"active");
var classes = [cljs.core.str(active),cljs.core.str(" "),cljs.core.str(new cljs.core.Keyword(null,"className","className",-1983287057).cljs$core$IFn$_invoke$arity$1(props))].join('');
if(active_QMARK_){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [rubix_bootstrap.components.breadcrumb.b_link_li,reagent.core.props.call(null,this$),classes,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(props)], null);
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [rubix_bootstrap.components.breadcrumb.b_link_li,reagent.core.props.call(null,this$),classes,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),(function (){var or__4307__auto__ = new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(or__4307__auto__)){
return or__4307__auto__;
} else {
return "#";
}
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(props)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)," "], null)], null)], null);
}
});
rubix_bootstrap.components.breadcrumb.breadcrumb = (function rubix_bootstrap$components$breadcrumb$breadcrumb(props){
var this$ = reagent.core.current_component.call(null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),cljs.core.merge.call(null,reagent.core.props.call(null,this$),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),cljsjs.util.trim.call(null,[cljs.core.str("breadcrumb "),cljs.core.str(new cljs.core.Keyword(null,"className","className",-1983287057).cljs$core$IFn$_invoke$arity$1(props))].join(''))], null)),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(props)], null);
});

//# sourceMappingURL=breadcrumb.js.map