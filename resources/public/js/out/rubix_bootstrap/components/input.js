// Compiled by ClojureScript 0.0-3269 {}
goog.provide('rubix_bootstrap.components.input');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljsjs.util');
goog.require('rubix_bootstrap.components.common.buttonclasses');
if(typeof rubix_bootstrap.components.input.form_control_types !== 'undefined'){
} else {
rubix_bootstrap.components.input.form_control_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 14, ["url",null,"tel",null,"email",null,"text",null,"number",null,"week",null,"time",null,"datetime",null,"password",null,"date",null,"month",null,"datetime-local",null,"search",null,"color",null], null), null);
}
if(typeof rubix_bootstrap.components.input.button_types !== 'undefined'){
} else {
rubix_bootstrap.components.input.button_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["reset",null,"submit",null,"button",null], null), null);
}
rubix_bootstrap.components.input.is_form_control_QMARK_ = (function rubix_bootstrap$components$input$is_form_control_QMARK_(t){
return cljs.core.contains_QMARK_.call(null,rubix_bootstrap.components.input.form_control_types,t);
});
rubix_bootstrap.components.input.is_button_QMARK_ = (function rubix_bootstrap$components$input$is_button_QMARK_(t){
return cljs.core.contains_QMARK_.call(null,rubix_bootstrap.components.input.button_types,t);
});
rubix_bootstrap.components.input.gen_classes = (function rubix_bootstrap$components$input$gen_classes(props){
var sm_QMARK_ = new cljs.core.Keyword(null,"sm","sm",-1402575065).cljs$core$IFn$_invoke$arity$1(props);
var lg_QMARK_ = new cljs.core.Keyword(null,"lg","lg",-80787836).cljs$core$IFn$_invoke$arity$1(props);
var t = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(props);
var form_control_QMARK_ = rubix_bootstrap.components.input.is_form_control_QMARK_.call(null,t);
return [cljs.core.str((cljs.core.truth_(sm_QMARK_)?"input-sm ":null)),cljs.core.str((cljs.core.truth_(lg_QMARK_)?"input-lg ":null)),cljs.core.str((cljs.core.truth_(form_control_QMARK_)?"form-control":null))].join('');
});
rubix_bootstrap.components.input.input = (function rubix_bootstrap$components$input$input(props){
var this$ = reagent.core.current_component.call(null);
var input_atom = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var classes = (cljs.core.truth_(rubix_bootstrap.components.input.is_button_QMARK_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(props)))?rubix_bootstrap.components.common.buttonclasses.gen_classes.call(null,props):rubix_bootstrap.components.input.gen_classes.call(null,props));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),cljs.core.merge.call(null,reagent.core.props.call(null,this$),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ref","ref",1289896967),"input",new cljs.core.Keyword(null,"class","class",-2030961996),cljsjs.util.trim.call(null,[cljs.core.str(classes),cljs.core.str(" "),cljs.core.str(new cljs.core.Keyword(null,"className","className",-1983287057).cljs$core$IFn$_invoke$arity$1(props))].join(''))], null))], null);
});

//# sourceMappingURL=input.js.map