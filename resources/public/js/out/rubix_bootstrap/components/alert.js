// Compiled by ClojureScript 0.0-3269 {}
goog.provide('rubix_bootstrap.components.alert');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljsjs.util');
goog.require('rubix_bootstrap.components.button');
rubix_bootstrap.components.alert.gen_classes = (function rubix_bootstrap$components$alert$gen_classes(props){
var info_QMARK_ = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(props);
var danger_QMARK_ = new cljs.core.Keyword(null,"danger","danger",-624338030).cljs$core$IFn$_invoke$arity$1(props);
var success_QMARK_ = new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(props);
var warning_QMARK_ = new cljs.core.Keyword(null,"warning","warning",-1685650671).cljs$core$IFn$_invoke$arity$1(props);
return [cljs.core.str("alert "),cljs.core.str((cljs.core.truth_(info_QMARK_)?"alert-info ":null)),cljs.core.str((cljs.core.truth_(danger_QMARK_)?"alert-danger ":null)),cljs.core.str((cljs.core.truth_(success_QMARK_)?"alert-success ":null)),cljs.core.str((cljs.core.truth_(warning_QMARK_)?"alert-warning ":null))].join('');
});
rubix_bootstrap.components.alert.handle_alert_close = (function rubix_bootstrap$components$alert$handle_alert_close(hidden){
return cljs.core.reset_BANG_.call(null,hidden,"hidden");
});
rubix_bootstrap.components.alert.alert_dismissible = (function rubix_bootstrap$components$alert$alert_dismissible(props,hidden,on_dismiss){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rubix_bootstrap.components.button.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"close","close",1835149582),true,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
rubix_bootstrap.components.alert.handle_alert_close.call(null,hidden);

if(cljs.core.truth_(on_dismiss)){
return on_dismiss.call(null);
} else {
return null;
}
})], null)], null),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(props)], null);
});
rubix_bootstrap.components.alert.alert = (function rubix_bootstrap$components$alert$alert(props){
var this$ = reagent.core.current_component.call(null);
var classes = rubix_bootstrap.components.alert.gen_classes.call(null,props);
var dismissible_QMARK_ = new cljs.core.Keyword(null,"dismissible","dismissible",80759338).cljs$core$IFn$_invoke$arity$1(props);
var _ = ((((this$["hidden"]) == null))?(this$["hidden"] = reagent.core.atom.call(null,"")):null);
var hidden = (this$["hidden"]);
var on_dismiss = new cljs.core.Keyword(null,"onDismiss","onDismiss",1209514337).cljs$core$IFn$_invoke$arity$1(props);
var collapse_bottom = (cljs.core.truth_(new cljs.core.Keyword(null,"collapseBottom","collapseBottom",-2079678199).cljs$core$IFn$_invoke$arity$1(props))?(0):null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljsjs.util.deep_merge.call(null,reagent.core.props.call(null,this$),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"role","role",-736691072),"alert",new cljs.core.Keyword(null,"class","class",-2030961996),cljsjs.util.trim.call(null,[cljs.core.str(classes),cljs.core.str(cljs.core.deref.call(null,hidden)),cljs.core.str(" "),cljs.core.str(new cljs.core.Keyword(null,"className","className",-1983287057).cljs$core$IFn$_invoke$arity$1(props))].join('')),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),collapse_bottom], null)], null)),(cljs.core.truth_(dismissible_QMARK_)?rubix_bootstrap.components.alert.alert_dismissible.call(null,props,hidden,on_dismiss):new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(props))], null);
});
rubix_bootstrap.components.alert.alert_link = (function rubix_bootstrap$components$alert$alert_link(props){
var this$ = reagent.core.current_component.call(null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),cljs.core.merge.call(null,reagent.core.props.call(null,this$),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),(function (){var or__4307__auto__ = new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(or__4307__auto__)){
return or__4307__auto__;
} else {
return "#";
}
})(),new cljs.core.Keyword(null,"class","class",-2030961996),cljsjs.util.trim.call(null,[cljs.core.str("alert-link "),cljs.core.str(new cljs.core.Keyword(null,"className","className",-1983287057).cljs$core$IFn$_invoke$arity$1(props))].join(''))], null)),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(props)], null);
});

//# sourceMappingURL=alert.js.map