// Compiled by ClojureScript 0.0-3269 {}
goog.provide('rubix_bootstrap.components.img');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljsjs.util');
rubix_bootstrap.components.img.gen_classes = (function rubix_bootstrap$components$img$gen_classes(props){
var circle_QMARK_ = new cljs.core.Keyword(null,"circle","circle",1903212362).cljs$core$IFn$_invoke$arity$1(props);
var rounded_QMARK_ = new cljs.core.Keyword(null,"rounded","rounded",85415706).cljs$core$IFn$_invoke$arity$1(props);
var thumbnail_QMARK_ = new cljs.core.Keyword(null,"thumbnail","thumbnail",-867906798).cljs$core$IFn$_invoke$arity$1(props);
var responsive_QMARK_ = new cljs.core.Keyword(null,"responsive","responsive",-1606632318).cljs$core$IFn$_invoke$arity$1(props);
return [cljs.core.str((cljs.core.truth_(circle_QMARK_)?"img-circle ":null)),cljs.core.str((cljs.core.truth_(rounded_QMARK_)?"img-rounded ":null)),cljs.core.str((cljs.core.truth_(thumbnail_QMARK_)?"img-thumbnail ":null)),cljs.core.str((cljs.core.truth_(responsive_QMARK_)?"img-responsive ":null))].join('');
});
rubix_bootstrap.components.img.img = (function rubix_bootstrap$components$img$img(props){
var this$ = reagent.core.current_component.call(null);
var classes = rubix_bootstrap.components.img.gen_classes.call(null,props);
var empty_src_QMARK_ = cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"src","src",-1651076051).cljs$core$IFn$_invoke$arity$1(props));
var src = ((empty_src_QMARK_)?"/imgs/blank.gif":new cljs.core.Keyword(null,"src","src",-1651076051).cljs$core$IFn$_invoke$arity$1(props));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),cljsjs.util.deep_merge.call(null,reagent.core.props.call(null,this$),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),src,new cljs.core.Keyword(null,"class","class",-2030961996),cljsjs.util.trim.call(null,[cljs.core.str(classes),cljs.core.str(" "),cljs.core.str(new cljs.core.Keyword(null,"className","className",-1983287057).cljs$core$IFn$_invoke$arity$1(props))].join('')),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(props)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),((empty_src_QMARK_)?"#EEEEEE":null)], null))], null))], null);
});

//# sourceMappingURL=img.js.map