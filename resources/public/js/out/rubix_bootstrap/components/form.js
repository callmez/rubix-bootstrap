// Compiled by ClojureScript 0.0-3269 {}
goog.provide('rubix_bootstrap.components.form');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljsjs.util');
rubix_bootstrap.components.form.gen_classes = (function rubix_bootstrap$components$form$gen_classes(props){
var inline_QMARK_ = new cljs.core.Keyword(null,"inline","inline",1399884222).cljs$core$IFn$_invoke$arity$1(props);
var horizontal_QMARK_ = new cljs.core.Keyword(null,"horizontal","horizontal",2062109475).cljs$core$IFn$_invoke$arity$1(props);
return [cljs.core.str((cljs.core.truth_(inline_QMARK_)?"form-inline ":null)),cljs.core.str((cljs.core.truth_(horizontal_QMARK_)?"form-horizontal ":null))].join('');
});
rubix_bootstrap.components.form.fakeInputs = (function rubix_bootstrap$components$form$fakeInputs(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"none"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-group","div.form-group",-1721134770),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"text"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-group","div.form-group",-1721134770),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"email"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-group","div.form-group",-1721134770),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"password"], null)], null)], null)], null);
});
rubix_bootstrap.components.form.form = (function rubix_bootstrap$components$form$form(props){
var this$ = reagent.core.current_component.call(null);
var classes = rubix_bootstrap.components.form.gen_classes.call(null,props);
var autocomplete_QMARK_ = new cljs.core.Keyword(null,"allowAutoComplete","allowAutoComplete",1822732204).cljs$core$IFn$_invoke$arity$1(props);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.merge.call(null,reagent.core.props.call(null,this$),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"role","role",-736691072),"form",new cljs.core.Keyword(null,"class","class",-2030961996),cljsjs.util.trim.call(null,[cljs.core.str(classes),cljs.core.str(" "),cljs.core.str(new cljs.core.Keyword(null,"className","className",-1983287057).cljs$core$IFn$_invoke$arity$1(props))].join('')),new cljs.core.Keyword(null,"autoComplete","autoComplete",-219243415),((cljs.core.not.call(null,autocomplete_QMARK_))?"off":"on")], null)),((cljs.core.not.call(null,autocomplete_QMARK_))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rubix_bootstrap.components.form.fakeInputs], null):null),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(props)], null);
});

//# sourceMappingURL=form.js.map