// Compiled by ClojureScript 0.0-3269 {}
goog.provide('rubix_bootstrap.components.col');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljsjs.util');
goog.require('clojure.string');
rubix_bootstrap.components.col.col_class = (function rubix_bootstrap$components$col$col_class(k,v){
return [cljs.core.str("col-"),cljs.core.str(k),cljs.core.str("-"),cljs.core.str(v),cljs.core.str(" ")].join('');
});
rubix_bootstrap.components.col.loop_col_class = (function rubix_bootstrap$components$col$loop_col_class(a,v){
var func = (function (k){
return rubix_bootstrap.components.col.col_class.call(null,k,v);
});
var ret = cljs.core.map.call(null,func,cljs.core.deref.call(null,a));
return [cljs.core.str(clojure.string.join.call(null,ret)),cljs.core.str(" ")].join('');
});
rubix_bootstrap.components.col.visibility = (function rubix_bootstrap$components$col$visibility(k,v){
var func = (function (v__$1){
return [cljs.core.str(k),cljs.core.str("-"),cljs.core.str(clojure.string.trim.call(null,v__$1))].join('');
});
var rep_comma = clojure.string.replace.call(null,v,/,/," ");
var rep_whitespace = clojure.string.replace.call(null,rep_comma,/\s+/," ");
var trim_whitespace = clojure.string.trim.call(null,rep_whitespace);
var split_v = clojure.string.split.call(null,trim_whitespace,/\s/);
var ret = cljs.core.map.call(null,func,split_v);
return [cljs.core.str(clojure.string.join.call(null," ",ret)),cljs.core.str(" ")].join('');
});
rubix_bootstrap.components.col.hyphenate = (function rubix_bootstrap$components$col$hyphenate(s){
var regexp = (new RegExp("([a-z])([A-Z])","g"));
var s__$1 = s.replace(regexp,"$1-$2");
return s__$1.toLowerCase();
});
rubix_bootstrap.components.col.hyphenate_col_class = (function rubix_bootstrap$components$col$hyphenate_col_class(k){
return [cljs.core.str("col-"),cljs.core.str(rubix_bootstrap.components.col.hyphenate.call(null,k)),cljs.core.str(" ")].join('');
});
rubix_bootstrap.components.col.hyphenate_col_class_with_value = (function rubix_bootstrap$components$col$hyphenate_col_class_with_value(k,v){
return [cljs.core.str(clojure.string.trim.call(null,rubix_bootstrap.components.col.hyphenate_col_class.call(null,k))),cljs.core.str("-"),cljs.core.str(v),cljs.core.str(" ")].join('');
});
rubix_bootstrap.components.col.remaining_props = (function rubix_bootstrap$components$col$remaining_props(props){
var ret = cljs.core.map.call(null,(function (p__14567){
var vec__14568 = p__14567;
var k = cljs.core.nth.call(null,vec__14568,(0),null);
var v = cljs.core.nth.call(null,vec__14568,(1),null);
var k__$1 = cljs.core.name.call(null,k);
var is_gutter_QMARK_ = cljs.core.not_EQ_.call(null,k__$1.search("Gutter"),(-1));
var is_collapse_QMARK_ = cljs.core.not_EQ_.call(null,k__$1.search("Collapse"),(-1));
var is_offset_QMARK_ = cljs.core.not_EQ_.call(null,k__$1.search("Offset"),(-1));
var is_push_QMARK_ = cljs.core.not_EQ_.call(null,k__$1.search("Push"),(-1));
var is_pull_QMARK_ = cljs.core.not_EQ_.call(null,k__$1.search("Pull"),(-1));
if((is_gutter_QMARK_) || (is_collapse_QMARK_)){
return rubix_bootstrap.components.col.hyphenate_col_class.call(null,k__$1);
} else {
if((is_offset_QMARK_) || (is_push_QMARK_) || (is_pull_QMARK_)){
return rubix_bootstrap.components.col.hyphenate_col_class_with_value.call(null,k__$1,v);
} else {
return null;
}
}
}),props);
return [cljs.core.str(clojure.string.join.call(null,ret)),cljs.core.str(" ")].join('');
});
rubix_bootstrap.components.col.gen_classes = (function rubix_bootstrap$components$col$gen_classes(props){
var xs_QMARK_ = new cljs.core.Keyword(null,"xs","xs",649443341).cljs$core$IFn$_invoke$arity$1(props);
var sm_QMARK_ = new cljs.core.Keyword(null,"sm","sm",-1402575065).cljs$core$IFn$_invoke$arity$1(props);
var md_QMARK_ = new cljs.core.Keyword(null,"md","md",707286655).cljs$core$IFn$_invoke$arity$1(props);
var lg_QMARK_ = new cljs.core.Keyword(null,"lg","lg",-80787836).cljs$core$IFn$_invoke$arity$1(props);
var sizes = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
var clearfix_QMARK_ = new cljs.core.Keyword(null,"clearfix","clearfix",1896309300).cljs$core$IFn$_invoke$arity$1(props);
var collapse_top_QMARK_ = new cljs.core.Keyword(null,"collapseTop","collapseTop",752647175).cljs$core$IFn$_invoke$arity$1(props);
var collapse_left_QMARK_ = new cljs.core.Keyword(null,"collapseLeft","collapseLeft",1015855587).cljs$core$IFn$_invoke$arity$1(props);
var collapse_right_QMARK_ = new cljs.core.Keyword(null,"collapseRight","collapseRight",-351148612).cljs$core$IFn$_invoke$arity$1(props);
var collapse_bottom_QMARK_ = new cljs.core.Keyword(null,"collapseBottom","collapseBottom",-2079678199).cljs$core$IFn$_invoke$arity$1(props);
var gutter_top_QMARK_ = new cljs.core.Keyword(null,"gutterTop","gutterTop",403173323).cljs$core$IFn$_invoke$arity$1(props);
var gutter_left_QMARK_ = new cljs.core.Keyword(null,"gutterLeft","gutterLeft",-465576057).cljs$core$IFn$_invoke$arity$1(props);
var gutter_right_QMARK_ = new cljs.core.Keyword(null,"gutterRight","gutterRight",2056433450).cljs$core$IFn$_invoke$arity$1(props);
var gutter_bottom_QMARK_ = new cljs.core.Keyword(null,"gutterBottom","gutterBottom",1253263865).cljs$core$IFn$_invoke$arity$1(props);
var hidden_QMARK_ = new cljs.core.Keyword(null,"hidden","hidden",-312506092).cljs$core$IFn$_invoke$arity$1(props);
var visible_QMARK_ = new cljs.core.Keyword(null,"visible","visible",-1024216805).cljs$core$IFn$_invoke$arity$1(props);
return [cljs.core.str((cljs.core.truth_(xs_QMARK_)?(function (){
cljs.core.swap_BANG_.call(null,sizes,cljs.core.conj,"xs");

return rubix_bootstrap.components.col.col_class.call(null,"xs",xs_QMARK_);
})()
:null)),cljs.core.str((cljs.core.truth_(sm_QMARK_)?(function (){
cljs.core.swap_BANG_.call(null,sizes,cljs.core.conj,"sm");

return rubix_bootstrap.components.col.col_class.call(null,"sm",sm_QMARK_);
})()
:null)),cljs.core.str((cljs.core.truth_(md_QMARK_)?(function (){
cljs.core.swap_BANG_.call(null,sizes,cljs.core.conj,"md");

return rubix_bootstrap.components.col.col_class.call(null,"md",md_QMARK_);
})()
:null)),cljs.core.str((cljs.core.truth_(lg_QMARK_)?(function (){
cljs.core.swap_BANG_.call(null,sizes,cljs.core.conj,"lg");

return rubix_bootstrap.components.col.col_class.call(null,"lg",lg_QMARK_);
})()
:null)),cljs.core.str((cljs.core.truth_(clearfix_QMARK_)?"clearfix ":null)),cljs.core.str((cljs.core.truth_(collapse_top_QMARK_)?rubix_bootstrap.components.col.loop_col_class.call(null,sizes,"collapse-top"):null)),cljs.core.str((cljs.core.truth_(collapse_left_QMARK_)?rubix_bootstrap.components.col.loop_col_class.call(null,sizes,"collapse-left"):null)),cljs.core.str((cljs.core.truth_(collapse_right_QMARK_)?rubix_bootstrap.components.col.loop_col_class.call(null,sizes,"collapse-right"):null)),cljs.core.str((cljs.core.truth_(collapse_bottom_QMARK_)?rubix_bootstrap.components.col.loop_col_class.call(null,sizes,"collapse-bottom"):null)),cljs.core.str((cljs.core.truth_(gutter_top_QMARK_)?rubix_bootstrap.components.col.loop_col_class.call(null,sizes,"gutter-top"):null)),cljs.core.str((cljs.core.truth_(gutter_left_QMARK_)?rubix_bootstrap.components.col.loop_col_class.call(null,sizes,"gutter-left"):null)),cljs.core.str((cljs.core.truth_(gutter_right_QMARK_)?rubix_bootstrap.components.col.loop_col_class.call(null,sizes,"gutter-right"):null)),cljs.core.str((cljs.core.truth_(gutter_bottom_QMARK_)?rubix_bootstrap.components.col.loop_col_class.call(null,sizes,"gutter-bottom"):null)),cljs.core.str((cljs.core.truth_(hidden_QMARK_)?rubix_bootstrap.components.col.visibility.call(null,"hidden",hidden_QMARK_):null)),cljs.core.str((cljs.core.truth_(visible_QMARK_)?rubix_bootstrap.components.col.visibility.call(null,"visible",visible_QMARK_):null)),cljs.core.str(rubix_bootstrap.components.col.remaining_props.call(null,props))].join('');
});
rubix_bootstrap.components.col.col = (function rubix_bootstrap$components$col$col(props){
cljsjs.util.debug.call(null,"col");

var this$ = reagent.core.current_component.call(null);
var classes = rubix_bootstrap.components.col.gen_classes.call(null,props);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljsjs.util.deep_merge.call(null,reagent.core.props.call(null,this$),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hidden","hidden",-312506092),null,new cljs.core.Keyword(null,"class","class",-2030961996),cljsjs.util.trim.call(null,[cljs.core.str(classes),cljs.core.str(" "),cljs.core.str(new cljs.core.Keyword(null,"className","className",-1983287057).cljs$core$IFn$_invoke$arity$1(props))].join(''))], null)),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(props)], null);
});

//# sourceMappingURL=col.js.map