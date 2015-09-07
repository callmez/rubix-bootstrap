// Compiled by ClojureScript 0.0-3269 {}
goog.provide('rubix_bootstrap.components.button');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljsjs.util');
goog.require('rubix_bootstrap.components.common.buttonclasses');
rubix_bootstrap.components.button.close_component = (function rubix_bootstrap$components$button$close_component(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),true], null),String.fromCharCode((215))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"sr-only"], null),"Close"], null)], null);
});
rubix_bootstrap.components.button.button = (function rubix_bootstrap$components$button$button(props){
var this$ = reagent.core.current_component.call(null);
var react_component = new cljs.core.Keyword(null,"componentClass","componentClass",-1482563204).cljs$core$IFn$_invoke$arity$1(props);
var componentClass = (function (){var or__4307__auto__ = ((!((react_component == null)))?reagent.core.adapt_react_class.call(null,react_component):null);
if(cljs.core.truth_(or__4307__auto__)){
return or__4307__auto__;
} else {
return new cljs.core.Keyword(null,"button","button",1456579943);
}
})();
var type = (function (){var or__4307__auto__ = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(or__4307__auto__)){
return or__4307__auto__;
} else {
return "button";
}
})();
var close_QMARK_ = new cljs.core.Keyword(null,"close","close",1835149582).cljs$core$IFn$_invoke$arity$1(props);
var classes = (cljs.core.truth_(close_QMARK_)?"close":rubix_bootstrap.components.common.buttonclasses.gen_classes.call(null,props));
var rchildren = (cljs.core.truth_(close_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rubix_bootstrap.components.button.close_component], null):new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(props));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [componentClass,cljs.core.merge.call(null,reagent.core.props.call(null,this$),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"role","role",-736691072),"button",new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"class","class",-2030961996),cljsjs.util.trim.call(null,[cljs.core.str(classes),cljs.core.str(" "),cljs.core.str(new cljs.core.Keyword(null,"className","className",-1983287057).cljs$core$IFn$_invoke$arity$1(props))].join(''))], null)),rchildren], null);
});

//# sourceMappingURL=button.js.map