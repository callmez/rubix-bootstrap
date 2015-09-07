// Compiled by ClojureScript 0.0-3269 {}
goog.provide('rubix_bootstrap.components.container');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljsjs.util');
rubix_bootstrap.components.container.gen_classes = (function rubix_bootstrap$components$container$gen_classes(props){
var fixed_QMARK_ = new cljs.core.Keyword(null,"fixed","fixed",-562004358).cljs$core$IFn$_invoke$arity$1(props);
var fluid_QMARK_ = new cljs.core.Keyword(null,"fluid","fluid",-1823657759).cljs$core$IFn$_invoke$arity$1(props);
return [cljs.core.str((cljs.core.truth_(fixed_QMARK_)?"container ":null)),cljs.core.str((cljs.core.truth_(fluid_QMARK_)?"container-fluid ":null))].join('');
});
rubix_bootstrap.components.container.container = (function rubix_bootstrap$components$container$container(props){
var this$ = reagent.core.current_component.call(null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.call(null,reagent.core.props.call(null,this$),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),cljsjs.util.trim.call(null,[cljs.core.str(rubix_bootstrap.components.container.gen_classes.call(null,props)),cljs.core.str(" "),cljs.core.str(new cljs.core.Keyword(null,"className","className",-1983287057).cljs$core$IFn$_invoke$arity$1(props))].join(''))], null)),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(props)], null);
});

//# sourceMappingURL=container.js.map