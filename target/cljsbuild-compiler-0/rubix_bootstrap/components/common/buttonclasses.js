// Compiled by ClojureScript 0.0-3269 {:static-fns true, :optimize-constants true}
goog.provide('rubix_bootstrap.components.common.buttonclasses');
goog.require('cljs.core');
goog.require('clojure.string');
rubix_bootstrap.components.common.buttonclasses.gen_classes = (function rubix_bootstrap$components$common$buttonclasses$gen_classes(props){
var xs_QMARK_ = cljs.core.constant$keyword$xs.cljs$core$IFn$_invoke$arity$1(props);
var sm_QMARK_ = cljs.core.constant$keyword$sm.cljs$core$IFn$_invoke$arity$1(props);
var lg_QMARK_ = cljs.core.constant$keyword$lg.cljs$core$IFn$_invoke$arity$1(props);
var block_QMARK_ = cljs.core.constant$keyword$block.cljs$core$IFn$_invoke$arity$1(props);
var active_QMARK_ = cljs.core.constant$keyword$active.cljs$core$IFn$_invoke$arity$1(props);
var navbar_QMARK_ = cljs.core.constant$keyword$navbar.cljs$core$IFn$_invoke$arity$1(props);
var retainBackground_QMARK_ = cljs.core.constant$keyword$retainBackground.cljs$core$IFn$_invoke$arity$1(props);
var rounded_QMARK_ = cljs.core.constant$keyword$rounded.cljs$core$IFn$_invoke$arity$1(props);
var onlyOnHover_QMARK_ = cljs.core.constant$keyword$onlyOnHover.cljs$core$IFn$_invoke$arity$1(props);
var inverse_QMARK_ = (function (){var or__4307__auto__ = cljs.core.constant$keyword$inverse.cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(or__4307__auto__)){
return or__4307__auto__;
} else {
return retainBackground_QMARK_;
}
})();
var outlined_QMARK_ = (function (){var or__4307__auto__ = cljs.core.constant$keyword$outlined.cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(or__4307__auto__)){
return or__4307__auto__;
} else {
var or__4307__auto____$1 = onlyOnHover_QMARK_;
if(cljs.core.truth_(or__4307__auto____$1)){
return or__4307__auto____$1;
} else {
var or__4307__auto____$2 = inverse_QMARK_;
if(cljs.core.truth_(or__4307__auto____$2)){
return or__4307__auto____$2;
} else {
return retainBackground_QMARK_;
}
}
}
})();
var bsStyle = ((!((cljs.core.constant$keyword$bsStyle.cljs$core$IFn$_invoke$arity$1(props) == null)))?cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.not_empty,clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$bsStyle.cljs$core$IFn$_invoke$arity$1(props),/\s|,/)):null);
var styles = ((!((bsStyle == null)))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,(function (){var iter__5061__auto__ = ((function (xs_QMARK_,sm_QMARK_,lg_QMARK_,block_QMARK_,active_QMARK_,navbar_QMARK_,retainBackground_QMARK_,rounded_QMARK_,onlyOnHover_QMARK_,inverse_QMARK_,outlined_QMARK_,bsStyle){
return (function rubix_bootstrap$components$common$buttonclasses$gen_classes_$_iter__14443(s__14444){
return (new cljs.core.LazySeq(null,((function (xs_QMARK_,sm_QMARK_,lg_QMARK_,block_QMARK_,active_QMARK_,navbar_QMARK_,retainBackground_QMARK_,rounded_QMARK_,onlyOnHover_QMARK_,inverse_QMARK_,outlined_QMARK_,bsStyle){
return (function (){
var s__14444__$1 = s__14444;
while(true){
var temp__4423__auto__ = cljs.core.seq(s__14444__$1);
if(temp__4423__auto__){
var s__14444__$2 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14444__$2)){
var c__5059__auto__ = cljs.core.chunk_first(s__14444__$2);
var size__5060__auto__ = cljs.core.count(c__5059__auto__);
var b__14446 = cljs.core.chunk_buffer(size__5060__auto__);
if((function (){var i__14445 = (0);
while(true){
if((i__14445 < size__5060__auto__)){
var st = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5059__auto__,i__14445);
cljs.core.chunk_append(b__14446,[cljs.core.str(" btn-"),cljs.core.str(clojure.string.trim(st)),cljs.core.str(" ")].join(''));

var G__14449 = (i__14445 + (1));
i__14445 = G__14449;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14446),rubix_bootstrap$components$common$buttonclasses$gen_classes_$_iter__14443(cljs.core.chunk_rest(s__14444__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14446),null);
}
} else {
var st = cljs.core.first(s__14444__$2);
return cljs.core.cons([cljs.core.str(" btn-"),cljs.core.str(clojure.string.trim(st)),cljs.core.str(" ")].join(''),rubix_bootstrap$components$common$buttonclasses$gen_classes_$_iter__14443(cljs.core.rest(s__14444__$2)));
}
} else {
return null;
}
break;
}
});})(xs_QMARK_,sm_QMARK_,lg_QMARK_,block_QMARK_,active_QMARK_,navbar_QMARK_,retainBackground_QMARK_,rounded_QMARK_,onlyOnHover_QMARK_,inverse_QMARK_,outlined_QMARK_,bsStyle))
,null,null));
});})(xs_QMARK_,sm_QMARK_,lg_QMARK_,block_QMARK_,active_QMARK_,navbar_QMARK_,retainBackground_QMARK_,rounded_QMARK_,onlyOnHover_QMARK_,inverse_QMARK_,outlined_QMARK_,bsStyle))
;
return iter__5061__auto__(bsStyle);
})()):" btn-default ");
return [cljs.core.str("btn "),cljs.core.str((cljs.core.truth_(xs_QMARK_)?" btn-xs ":null)),cljs.core.str((cljs.core.truth_(sm_QMARK_)?" btn-sm ":null)),cljs.core.str((cljs.core.truth_(lg_QMARK_)?" btn-lg ":null)),cljs.core.str((cljs.core.truth_(active_QMARK_)?" active ":null)),cljs.core.str((cljs.core.truth_(block_QMARK_)?" btn-block ":null)),cljs.core.str((cljs.core.truth_(navbar_QMARK_)?" navbar-btn ":null)),cljs.core.str((cljs.core.truth_(inverse_QMARK_)?" btn-inverse ":null)),cljs.core.str((cljs.core.truth_(rounded_QMARK_)?" btn-rounded ":null)),cljs.core.str((cljs.core.truth_(outlined_QMARK_)?" btn-outlined ":null)),cljs.core.str((cljs.core.truth_(onlyOnHover_QMARK_)?" btn-onlyOnHover ":null)),cljs.core.str((cljs.core.truth_(retainBackground_QMARK_)?" btn-retainBg ":null)),cljs.core.str(styles),cljs.core.str(" ")].join('');
});
