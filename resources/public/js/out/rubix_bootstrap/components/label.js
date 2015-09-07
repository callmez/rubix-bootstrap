// Compiled by ClojureScript 0.0-3269 {}
goog.provide('rubix_bootstrap.components.label');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljsjs.util');
goog.require('rubix_bootstrap.components.col');
rubix_bootstrap.components.label.gen_classes = (function rubix_bootstrap$components$label$gen_classes(props){
var inline_QMARK_ = new cljs.core.Keyword(null,"inline","inline",1399884222).cljs$core$IFn$_invoke$arity$1(props);
var control_QMARK_ = new cljs.core.Keyword(null,"control","control",1892578036).cljs$core$IFn$_invoke$arity$1(props);
return [cljs.core.str((cljs.core.truth_(inline_QMARK_)?"inline ":null)),cljs.core.str((cljs.core.truth_(control_QMARK_)?"control-label ":null))].join('');
});
rubix_bootstrap.components.label.label = (function rubix_bootstrap$components$label$label(props){
var this$ = reagent.core.current_component.call(null);
var classes = rubix_bootstrap.components.label.gen_classes.call(null,props);
var classes__$1 = [cljs.core.str(classes),cljs.core.str(rubix_bootstrap.components.col.gen_classes.call(null,props))].join('');
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.merge.call(null,reagent.core.props.call(null,this$),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),cljsjs.util.trim.call(null,[cljs.core.str(classes__$1),cljs.core.str(" "),cljs.core.str(new cljs.core.Keyword(null,"className","className",-1983287057).cljs$core$IFn$_invoke$arity$1(props))].join(''))], null)),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(props)], null);
});

//# sourceMappingURL=label.js.map