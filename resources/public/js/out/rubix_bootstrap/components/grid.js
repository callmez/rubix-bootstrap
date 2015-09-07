// Compiled by ClojureScript 0.0-3269 {}
goog.provide('rubix_bootstrap.components.grid');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('clojure.string');
goog.require('cljsjs.util');
if(typeof rubix_bootstrap.components.grid.zIndex !== 'undefined'){
} else {
rubix_bootstrap.components.grid.zIndex = reagent.core.atom.call(null,(9999999));
}
rubix_bootstrap.components.grid.reset_globals_BANG_ = (function rubix_bootstrap$components$grid$reset_globals_BANG_(){
return cljs.core.reset_BANG_.call(null,rubix_bootstrap.components.grid.zIndex,(9999999));
});
rubix_bootstrap.components.grid.getZIndex = (function rubix_bootstrap$components$grid$getZIndex(){
return cljs.core.swap_BANG_.call(null,rubix_bootstrap.components.grid.zIndex,cljs.core.dec);
});
rubix_bootstrap.components.grid.construct_class = (function rubix_bootstrap$components$grid$construct_class(k,props){
if(cljs.core.truth_(k.call(null,props))){
return [cljs.core.str("grid-gutter-"),cljs.core.str(clojure.string.replace.call(null,cljs.core.name.call(null,k),/gutter/,"").toLowerCase()),cljs.core.str(" ")].join('');
} else {
return "";
}
});
rubix_bootstrap.components.grid.gen_classes = (function rubix_bootstrap$components$grid$gen_classes(props){
var fixed_QMARK_ = new cljs.core.Keyword(null,"fixed","fixed",-562004358).cljs$core$IFn$_invoke$arity$1(props);
var fluid_QMARK_ = cljs.core.not.call(null,fixed_QMARK_);
var gutter_QMARK_ = new cljs.core.Keyword(null,"gutter","gutter",1047805662).cljs$core$IFn$_invoke$arity$1(props);
var collapse_QMARK_ = new cljs.core.Keyword(null,"collapse","collapse",-1218136136).cljs$core$IFn$_invoke$arity$1(props);
var gutter_top_QMARK_ = rubix_bootstrap.components.grid.construct_class.call(null,new cljs.core.Keyword(null,"gutterTop","gutterTop",403173323),props);
var gutter_left_QMARK_ = rubix_bootstrap.components.grid.construct_class.call(null,new cljs.core.Keyword(null,"gutterLeft","gutterLeft",-465576057),props);
var gutter_right_QMARK_ = rubix_bootstrap.components.grid.construct_class.call(null,new cljs.core.Keyword(null,"gutterRight","gutterRight",2056433450),props);
var gutter_bottom_QMARK_ = rubix_bootstrap.components.grid.construct_class.call(null,new cljs.core.Keyword(null,"gutterBottom","gutterBottom",1253263865),props);
return [cljs.core.str("rubix-grid "),cljs.core.str((cljs.core.truth_(fixed_QMARK_)?"container ":null)),cljs.core.str(((fluid_QMARK_)?"container-fluid ":null)),cljs.core.str((cljs.core.truth_(gutter_QMARK_)?"grid-gutter ":null)),cljs.core.str((cljs.core.truth_(collapse_QMARK_)?"grid-collapse ":null)),cljs.core.str(gutter_top_QMARK_),cljs.core.str(gutter_left_QMARK_),cljs.core.str(gutter_right_QMARK_),cljs.core.str(gutter_bottom_QMARK_)].join('');
});
rubix_bootstrap.components.grid.grid = (function rubix_bootstrap$components$grid$grid(props){
cljsjs.util.debug.call(null,"grid");

var this$ = reagent.core.current_component.call(null);
var classes = rubix_bootstrap.components.grid.gen_classes.call(null,props);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljsjs.util.deep_merge.call(null,reagent.core.props.call(null,this$),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),cljsjs.util.trim.call(null,[cljs.core.str(classes),cljs.core.str(" "),cljs.core.str(new cljs.core.Keyword(null,"className","className",-1983287057).cljs$core$IFn$_invoke$arity$1(props))].join('')),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(props)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"zIndex","zIndex",-1588341609),rubix_bootstrap.components.grid.getZIndex.call(null)], null))], null)),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(props)], null);
});

//# sourceMappingURL=grid.js.map