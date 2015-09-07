// Compiled by ClojureScript 0.0-3269 {}
goog.provide('rubix_bootstrap.components.formgroup');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljsjs.util');
rubix_bootstrap.components.formgroup.gen_classes = (function rubix_bootstrap$components$formgroup$gen_classes(props){
var sm_QMARK_ = new cljs.core.Keyword(null,"sm","sm",-1402575065).cljs$core$IFn$_invoke$arity$1(props);
var lg_QMARK_ = new cljs.core.Keyword(null,"lg","lg",-80787836).cljs$core$IFn$_invoke$arity$1(props);
var error_QMARK_ = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(props);
var success_QMARK_ = new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(props);
var warning_QMARK_ = new cljs.core.Keyword(null,"warning","warning",-1685650671).cljs$core$IFn$_invoke$arity$1(props);
var feedback_QMARK_ = new cljs.core.Keyword(null,"feedback","feedback",1624587107).cljs$core$IFn$_invoke$arity$1(props);
return [cljs.core.str("form-group "),cljs.core.str((cljs.core.truth_(sm_QMARK_)?"form-group-sm ":null)),cljs.core.str((cljs.core.truth_(lg_QMARK_)?"form-group-lg ":null)),cljs.core.str((cljs.core.truth_(error_QMARK_)?"has-error ":null)),cljs.core.str((cljs.core.truth_(success_QMARK_)?"has-success ":null)),cljs.core.str((cljs.core.truth_(warning_QMARK_)?"has-warning ":null)),cljs.core.str((cljs.core.truth_(feedback_QMARK_)?"feedback ":null))].join('');
});
rubix_bootstrap.components.formgroup.formgroup = (function rubix_bootstrap$components$formgroup$formgroup(props){
var this$ = reagent.core.current_component.call(null);
var classes = rubix_bootstrap.components.formgroup.gen_classes.call(null,props);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.call(null,reagent.core.props.call(null,this$),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),cljsjs.util.trim.call(null,[cljs.core.str(classes),cljs.core.str(" "),cljs.core.str(new cljs.core.Keyword(null,"className","className",-1983287057).cljs$core$IFn$_invoke$arity$1(props))].join(''))], null)),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(props)], null);
});

//# sourceMappingURL=formgroup.js.map