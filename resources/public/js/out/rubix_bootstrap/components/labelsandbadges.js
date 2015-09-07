// Compiled by ClojureScript 0.0-3269 {}
goog.provide('rubix_bootstrap.components.labelsandbadges');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljsjs.util');
goog.require('clojure.string');
rubix_bootstrap.components.labelsandbadges.gen_classes = (function rubix_bootstrap$components$labelsandbadges$gen_classes(type,props){
var bs_style = (function (){var or__4307__auto__ = new cljs.core.Keyword(null,"bsStyle","bsStyle",493669071).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(or__4307__auto__)){
return or__4307__auto__;
} else {
return "default";
}
})();
var styles = bs_style.split(",");
var func = ((function (bs_style,styles){
return (function (st){
return [cljs.core.str(type),cljs.core.str("-"),cljs.core.str(clojure.string.trim.call(null,st))].join('');
});})(bs_style,styles))
;
var ret = cljs.core.map.call(null,func,styles);
return [cljs.core.str(type),cljs.core.str(" "),cljs.core.str(clojure.string.join.call(null," ",ret)),cljs.core.str(" ")].join('');
});
rubix_bootstrap.components.labelsandbadges.b_mixin = (function rubix_bootstrap$components$labelsandbadges$b_mixin(type,props){
var this$ = reagent.core.current_component.call(null);
var classes = rubix_bootstrap.components.labelsandbadges.gen_classes.call(null,type,props);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),cljs.core.merge.call(null,reagent.core.props.call(null,this$),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),cljsjs.util.trim.call(null,[cljs.core.str(classes),cljs.core.str(" "),cljs.core.str(new cljs.core.Keyword(null,"className","className",-1983287057).cljs$core$IFn$_invoke$arity$1(props))].join(''))], null)),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(props)], null);
});
rubix_bootstrap.components.labelsandbadges.badge = (function rubix_bootstrap$components$labelsandbadges$badge(props){
return rubix_bootstrap.components.labelsandbadges.b_mixin.call(null,"badge",props);
});
rubix_bootstrap.components.labelsandbadges.label = (function rubix_bootstrap$components$labelsandbadges$label(props){
return rubix_bootstrap.components.labelsandbadges.b_mixin.call(null,"label",props);
});

//# sourceMappingURL=labelsandbadges.js.map