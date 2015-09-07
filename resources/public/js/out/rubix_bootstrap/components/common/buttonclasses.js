// Compiled by ClojureScript 0.0-3269 {}
goog.provide('rubix_bootstrap.components.common.buttonclasses');
goog.require('cljs.core');
goog.require('clojure.string');
rubix_bootstrap.components.common.buttonclasses.gen_classes = (function rubix_bootstrap$components$common$buttonclasses$gen_classes(props){
var xs_QMARK_ = new cljs.core.Keyword(null,"xs","xs",649443341).cljs$core$IFn$_invoke$arity$1(props);
var sm_QMARK_ = new cljs.core.Keyword(null,"sm","sm",-1402575065).cljs$core$IFn$_invoke$arity$1(props);
var lg_QMARK_ = new cljs.core.Keyword(null,"lg","lg",-80787836).cljs$core$IFn$_invoke$arity$1(props);
var block_QMARK_ = new cljs.core.Keyword(null,"block","block",664686210).cljs$core$IFn$_invoke$arity$1(props);
var active_QMARK_ = new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(props);
var navbar_QMARK_ = new cljs.core.Keyword(null,"navbar","navbar",1584396041).cljs$core$IFn$_invoke$arity$1(props);
var retainBackground_QMARK_ = new cljs.core.Keyword(null,"retainBackground","retainBackground",-2092851636).cljs$core$IFn$_invoke$arity$1(props);
var rounded_QMARK_ = new cljs.core.Keyword(null,"rounded","rounded",85415706).cljs$core$IFn$_invoke$arity$1(props);
var onlyOnHover_QMARK_ = new cljs.core.Keyword(null,"onlyOnHover","onlyOnHover",-693392854).cljs$core$IFn$_invoke$arity$1(props);
var inverse_QMARK_ = (function (){var or__4307__auto__ = new cljs.core.Keyword(null,"inverse","inverse",-1623859672).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(or__4307__auto__)){
return or__4307__auto__;
} else {
return retainBackground_QMARK_;
}
})();
var outlined_QMARK_ = (function (){var or__4307__auto__ = new cljs.core.Keyword(null,"outlined","outlined",-69626634).cljs$core$IFn$_invoke$arity$1(props);
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
var bsStyle = ((!((new cljs.core.Keyword(null,"bsStyle","bsStyle",493669071).cljs$core$IFn$_invoke$arity$1(props) == null)))?cljs.core.filter.call(null,cljs.core.not_empty,clojure.string.split.call(null,new cljs.core.Keyword(null,"bsStyle","bsStyle",493669071).cljs$core$IFn$_invoke$arity$1(props),/\s|,/)):null);
var styles = ((!((bsStyle == null)))?cljs.core.apply.call(null,cljs.core.str,(function (){var iter__5061__auto__ = ((function (xs_QMARK_,sm_QMARK_,lg_QMARK_,block_QMARK_,active_QMARK_,navbar_QMARK_,retainBackground_QMARK_,rounded_QMARK_,onlyOnHover_QMARK_,inverse_QMARK_,outlined_QMARK_,bsStyle){
return (function rubix_bootstrap$components$common$buttonclasses$gen_classes_$_iter__14456(s__14457){
return (new cljs.core.LazySeq(null,((function (xs_QMARK_,sm_QMARK_,lg_QMARK_,block_QMARK_,active_QMARK_,navbar_QMARK_,retainBackground_QMARK_,rounded_QMARK_,onlyOnHover_QMARK_,inverse_QMARK_,outlined_QMARK_,bsStyle){
return (function (){
var s__14457__$1 = s__14457;
while(true){
var temp__4423__auto__ = cljs.core.seq.call(null,s__14457__$1);
if(temp__4423__auto__){
var s__14457__$2 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14457__$2)){
var c__5059__auto__ = cljs.core.chunk_first.call(null,s__14457__$2);
var size__5060__auto__ = cljs.core.count.call(null,c__5059__auto__);
var b__14459 = cljs.core.chunk_buffer.call(null,size__5060__auto__);
if((function (){var i__14458 = (0);
while(true){
if((i__14458 < size__5060__auto__)){
var st = cljs.core._nth.call(null,c__5059__auto__,i__14458);
cljs.core.chunk_append.call(null,b__14459,[cljs.core.str(" btn-"),cljs.core.str(clojure.string.trim.call(null,st)),cljs.core.str(" ")].join(''));

var G__14460 = (i__14458 + (1));
i__14458 = G__14460;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14459),rubix_bootstrap$components$common$buttonclasses$gen_classes_$_iter__14456.call(null,cljs.core.chunk_rest.call(null,s__14457__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14459),null);
}
} else {
var st = cljs.core.first.call(null,s__14457__$2);
return cljs.core.cons.call(null,[cljs.core.str(" btn-"),cljs.core.str(clojure.string.trim.call(null,st)),cljs.core.str(" ")].join(''),rubix_bootstrap$components$common$buttonclasses$gen_classes_$_iter__14456.call(null,cljs.core.rest.call(null,s__14457__$2)));
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
return iter__5061__auto__.call(null,bsStyle);
})()):" btn-default ");
return [cljs.core.str("btn "),cljs.core.str((cljs.core.truth_(xs_QMARK_)?" btn-xs ":null)),cljs.core.str((cljs.core.truth_(sm_QMARK_)?" btn-sm ":null)),cljs.core.str((cljs.core.truth_(lg_QMARK_)?" btn-lg ":null)),cljs.core.str((cljs.core.truth_(active_QMARK_)?" active ":null)),cljs.core.str((cljs.core.truth_(block_QMARK_)?" btn-block ":null)),cljs.core.str((cljs.core.truth_(navbar_QMARK_)?" navbar-btn ":null)),cljs.core.str((cljs.core.truth_(inverse_QMARK_)?" btn-inverse ":null)),cljs.core.str((cljs.core.truth_(rounded_QMARK_)?" btn-rounded ":null)),cljs.core.str((cljs.core.truth_(outlined_QMARK_)?" btn-outlined ":null)),cljs.core.str((cljs.core.truth_(onlyOnHover_QMARK_)?" btn-onlyOnHover ":null)),cljs.core.str((cljs.core.truth_(retainBackground_QMARK_)?" btn-retainBg ":null)),cljs.core.str(styles),cljs.core.str(" ")].join('');
});

//# sourceMappingURL=buttonclasses.js.map