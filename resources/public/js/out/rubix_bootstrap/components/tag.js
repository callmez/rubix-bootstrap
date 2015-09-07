// Compiled by ClojureScript 0.0-3269 {}
goog.provide('rubix_bootstrap.components.tag');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljsjs.util');
rubix_bootstrap.components.tag.tag = (function rubix_bootstrap$components$tag$tag(props){
var this$ = reagent.core.current_component.call(null);
var href = (function (){var or__4307__auto__ = new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(or__4307__auto__)){
return or__4307__auto__;
} else {
return "#";
}
})();
var color = (function (){var or__4307__auto__ = new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(or__4307__auto__)){
return or__4307__auto__;
} else {
return "darkgreen45";
}
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),cljs.core.merge.call(null,reagent.core.props.call(null,this$),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),href,new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"class","class",-2030961996),cljsjs.util.trim.call(null,[cljs.core.str("left-tag "),cljs.core.str("border-hover-"),cljs.core.str(color),cljs.core.str(" "),cljs.core.str("bg-hover-"),cljs.core.str(color),cljs.core.str(" "),cljs.core.str("fg-hover-white bg-lightgray50 "),cljs.core.str("border-lightgray50 fg-text "),cljs.core.str(new cljs.core.Keyword(null,"className","className",-1983287057).cljs$core$IFn$_invoke$arity$1(props))].join(''))], null)),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(props)], null);
});

//# sourceMappingURL=tag.js.map