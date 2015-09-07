// Compiled by ClojureScript 0.0-3269 {}
goog.provide('rubix_bootstrap.components.icon');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljsjs.util');
rubix_bootstrap.components.icon.gen_classes = (function rubix_bootstrap$components$icon$gen_classes(props){
var feedback_QMARK_ = new cljs.core.Keyword(null,"feedback","feedback",1624587107).cljs$core$IFn$_invoke$arity$1(props);
var bundle_QMARK_ = new cljs.core.Keyword(null,"bundle","bundle",-1741503734).cljs$core$IFn$_invoke$arity$1(props);
var glyph_QMARK_ = new cljs.core.Keyword(null,"glyph","glyph",2119448117).cljs$core$IFn$_invoke$arity$1(props);
return [cljs.core.str("rubix-icon "),cljs.core.str((cljs.core.truth_(feedback_QMARK_)?"form-control-feedback ":null)),cljs.core.str((cljs.core.truth_(bundle_QMARK_)?[cljs.core.str(bundle_QMARK_),cljs.core.str(" "),cljs.core.str("icon-"),cljs.core.str(bundle_QMARK_),cljs.core.str("-"),cljs.core.str(glyph_QMARK_)].join(''):glyph_QMARK_))].join('');
});
rubix_bootstrap.components.icon.icon = (function rubix_bootstrap$components$icon$icon(props){
var this$ = reagent.core.current_component.call(null);
var classes = rubix_bootstrap.components.icon.gen_classes.call(null,props);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),cljs.core.merge.call(null,reagent.core.props.call(null,this$),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),cljsjs.util.trim.call(null,[cljs.core.str(classes),cljs.core.str(" "),cljs.core.str(new cljs.core.Keyword(null,"className","className",-1983287057).cljs$core$IFn$_invoke$arity$1(props))].join(''))], null))], null);
});

//# sourceMappingURL=icon.js.map