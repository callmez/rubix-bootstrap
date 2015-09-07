// Compiled by ClojureScript 0.0-3269 {}
goog.provide('rubix_bootstrap.components.checkboxradio');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljsjs.util');
goog.require('rubix_bootstrap.components.label');
goog.require('rubix_bootstrap.components.input');
rubix_bootstrap.components.checkboxradio.gen_classes = (function rubix_bootstrap$components$checkboxradio$gen_classes(t,props){
var disabled_QMARK_ = new cljs.core.Keyword(null,"disabled","disabled",-1529784218).cljs$core$IFn$_invoke$arity$1(props);
return [cljs.core.str(t),cljs.core.str(" "),cljs.core.str((cljs.core.truth_(disabled_QMARK_)?"disabled":null))].join('');
});
rubix_bootstrap.components.checkboxradio.checkboxradio = (function rubix_bootstrap$components$checkboxradio$checkboxradio(t,props){
var this$ = reagent.core.current_component.call(null);
var classes = rubix_bootstrap.components.checkboxradio.gen_classes.call(null,t,props);
var native_QMARK_ = new cljs.core.Keyword(null,"native","native",-613060878).cljs$core$IFn$_invoke$arity$1(props);
var inline_QMARK_ = new cljs.core.Keyword(null,"inline","inline",1399884222).cljs$core$IFn$_invoke$arity$1(props);
var input_props = cljs.core.merge.call(null,props,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),t,new cljs.core.Keyword(null,"children","children",-940561982),null], null));
var i = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rubix_bootstrap.components.input.input,input_props], null);
var combined = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),i,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(props)], null)], null);
var label_props = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"className","className",-1983287057),cljsjs.util.trim.call(null,[cljs.core.str(t),cljs.core.str("-inline "),cljs.core.str(new cljs.core.Keyword(null,"className","className",-1983287057).cljs$core$IFn$_invoke$arity$1(props))].join('')),new cljs.core.Keyword(null,"inline","inline",1399884222),null,new cljs.core.Keyword(null,"children","children",-940561982),combined], null);
var l = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rubix_bootstrap.components.label.label,label_props], null);
var r = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),cljsjs.util.trim.call(null,classes)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rubix_bootstrap.components.label.label,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),combined], null)], null)], null);
if(cljs.core.truth_(native_QMARK_)){
return i;
} else {
if(cljs.core.truth_(inline_QMARK_)){
return l;
} else {
return r;
}
}
});
rubix_bootstrap.components.checkboxradio.checkbox = (function rubix_bootstrap$components$checkboxradio$checkbox(props){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rubix_bootstrap.components.checkboxradio.checkboxradio,"checkbox",props], null);
});
rubix_bootstrap.components.checkboxradio.radio = (function rubix_bootstrap$components$checkboxradio$radio(props){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rubix_bootstrap.components.checkboxradio.checkboxradio,"radio",props], null);
});

//# sourceMappingURL=checkboxradio.js.map