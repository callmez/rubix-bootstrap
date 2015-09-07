// Compiled by ClojureScript 0.0-3269 {}
goog.provide('rubix_bootstrap.components.table');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljsjs.util');
rubix_bootstrap.components.table.gen_classes = (function rubix_bootstrap$components$table$gen_classes(props){
var hover_QMARK_ = new cljs.core.Keyword(null,"hover","hover",-341141711).cljs$core$IFn$_invoke$arity$1(props);
var striped_QMARK_ = new cljs.core.Keyword(null,"striped","striped",-628686784).cljs$core$IFn$_invoke$arity$1(props);
var bordered_QMARK_ = new cljs.core.Keyword(null,"bordered","bordered",-832486681).cljs$core$IFn$_invoke$arity$1(props);
var collapsed_QMARK_ = new cljs.core.Keyword(null,"collapsed","collapsed",-628494523).cljs$core$IFn$_invoke$arity$1(props);
var condensed_QMARK_ = new cljs.core.Keyword(null,"condensed","condensed",1524918140).cljs$core$IFn$_invoke$arity$1(props);
var align_top_QMARK_ = new cljs.core.Keyword(null,"alignTop","alignTop",-313086221).cljs$core$IFn$_invoke$arity$1(props);
var align_middle_QMARK_ = new cljs.core.Keyword(null,"alignMiddle","alignMiddle",788190156).cljs$core$IFn$_invoke$arity$1(props);
var align_bottom_QMARK_ = new cljs.core.Keyword(null,"alignBottom","alignBottom",1154026777).cljs$core$IFn$_invoke$arity$1(props);
return [cljs.core.str("table "),cljs.core.str((cljs.core.truth_(hover_QMARK_)?"table-hover ":null)),cljs.core.str((cljs.core.truth_(striped_QMARK_)?"table-striped ":null)),cljs.core.str((cljs.core.truth_(bordered_QMARK_)?"table-bordered ":null)),cljs.core.str((cljs.core.truth_(collapsed_QMARK_)?"table-collapsed ":null)),cljs.core.str((cljs.core.truth_(condensed_QMARK_)?"table-condensed ":null)),cljs.core.str((cljs.core.truth_(align_top_QMARK_)?"table-top-align ":null)),cljs.core.str((cljs.core.truth_(align_middle_QMARK_)?"table-middle-align ":null)),cljs.core.str((cljs.core.truth_(align_bottom_QMARK_)?"table-bottom-align ":null))].join('');
});
rubix_bootstrap.components.table.table_construct = (function rubix_bootstrap$components$table$table_construct(props,classes){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),cljs.core.merge.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),cljsjs.util.trim.call(null,[cljs.core.str(classes),cljs.core.str(" "),cljs.core.str(new cljs.core.Keyword(null,"className","className",-1983287057).cljs$core$IFn$_invoke$arity$1(props))].join(''))], null)),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(props)], null);
});
rubix_bootstrap.components.table.table = (function rubix_bootstrap$components$table$table(props){
var this$ = reagent.core.current_component.call(null);
var classes = rubix_bootstrap.components.table.gen_classes.call(null,props);
var responsive_QMARK_ = new cljs.core.Keyword(null,"responsive","responsive",-1606632318).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(responsive_QMARK_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.table-responsive","div.table-responsive",-16203823),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rubix_bootstrap.components.table.table_construct,props,classes], null)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rubix_bootstrap.components.table.table_construct,props,classes], null);
}
});

//# sourceMappingURL=table.js.map