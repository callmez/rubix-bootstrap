// Compiled by ClojureScript 0.0-3269 {}
goog.provide('rubix_bootstrap.components.select');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljsjs.util');
rubix_bootstrap.components.select.gen_classes = (function rubix_bootstrap$components$select$gen_classes(props){
var sm_QMARK_ = new cljs.core.Keyword(null,"sm","sm",-1402575065).cljs$core$IFn$_invoke$arity$1(props);
var lg_QMARK_ = new cljs.core.Keyword(null,"lg","lg",-80787836).cljs$core$IFn$_invoke$arity$1(props);
return [cljs.core.str("form-control "),cljs.core.str((cljs.core.truth_(sm_QMARK_)?"input-sm ":null)),cljs.core.str((cljs.core.truth_(lg_QMARK_)?"input-lg ":null))].join('');
});
rubix_bootstrap.components.select.select = (function rubix_bootstrap$components$select$select(props){
var this$ = reagent.core.current_component.call(null);
var classes = rubix_bootstrap.components.select.gen_classes.call(null,props);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),cljs.core.merge.call(null,reagent.core.props.call(null,this$),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),cljsjs.util.trim.call(null,[cljs.core.str(classes),cljs.core.str(" "),cljs.core.str(new cljs.core.Keyword(null,"className","className",-1983287057).cljs$core$IFn$_invoke$arity$1(props))].join(''))], null)),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(props)], null);
});

//# sourceMappingURL=select.js.map