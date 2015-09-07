// Compiled by ClojureScript 0.0-3269 {:static-fns true, :optimize-constants true}
goog.provide('rubix_bootstrap.components.modal');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('goog.events');
goog.require('goog.dom');
goog.require('goog.style');
goog.require('goog.dom.classes');
goog.require('cljsjs.util');
if(typeof rubix_bootstrap.components.modal.modal_manager !== 'undefined'){
} else {
rubix_bootstrap.components.modal.modal_manager = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if(typeof rubix_bootstrap.components.modal.modal_props !== 'undefined'){
} else {
rubix_bootstrap.components.modal.modal_props = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
rubix_bootstrap.components.modal.set_modal_manager = (function rubix_bootstrap$components$modal$set_modal_manager(m){
var G__14136 = rubix_bootstrap.components.modal.modal_manager;
var G__14137 = m;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__14136,G__14137) : cljs.core.reset_BANG_.call(null,G__14136,G__14137));
});
rubix_bootstrap.components.modal.common_el = (function rubix_bootstrap$components$modal$common_el(class_name,props){
var this$ = reagent.core.current_component();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([reagent.core.props(this$),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$class,cljsjs.util.trim([cljs.core.str(class_name),cljs.core.str(" "),cljs.core.str(cljs.core.constant$keyword$className.cljs$core$IFn$_invoke$arity$1(props))].join(''))], null)], 0)),cljs.core.constant$keyword$children.cljs$core$IFn$_invoke$arity$1(props)], null);
});
rubix_bootstrap.components.modal.modal_footer = (function rubix_bootstrap$components$modal$modal_footer(props){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rubix_bootstrap.components.modal.common_el,"modal-footer",props], null);
});
rubix_bootstrap.components.modal.modal_body = (function rubix_bootstrap$components$modal$modal_body(props){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rubix_bootstrap.components.modal.common_el,"modal-body",props], null);
});
rubix_bootstrap.components.modal.modal_header = (function rubix_bootstrap$components$modal$modal_header(props){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rubix_bootstrap.components.modal.common_el,"modal-header",props], null);
});
rubix_bootstrap.components.modal.gen_classes_md = (function rubix_bootstrap$components$modal$gen_classes_md(props){
var sm_QMARK_ = cljs.core.constant$keyword$sm.cljs$core$IFn$_invoke$arity$1(props);
var lg_QMARK_ = cljs.core.constant$keyword$lg.cljs$core$IFn$_invoke$arity$1(props);
return [cljs.core.str("modal-dialog "),cljs.core.str((cljs.core.truth_(sm_QMARK_)?"modal-sm ":null)),cljs.core.str((cljs.core.truth_(lg_QMARK_)?"modal-lg ":null))].join('');
});
rubix_bootstrap.components.modal.show_modal = (function rubix_bootstrap$components$modal$show_modal(){
var p = (function (){var G__14139 = rubix_bootstrap.components.modal.modal_props;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14139) : cljs.core.deref.call(null,G__14139));
})();
var on_show = cljs.core.constant$keyword$on_DASH_show.cljs$core$IFn$_invoke$arity$1(p);
var on_shown = cljs.core.constant$keyword$on_DASH_shown.cljs$core$IFn$_invoke$arity$1(p);
(on_show.cljs$core$IFn$_invoke$arity$0 ? on_show.cljs$core$IFn$_invoke$arity$0() : on_show.call(null));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(rubix_bootstrap.components.modal.modal_props,cljs.core.assoc,cljs.core.constant$keyword$in,true,cljs.core.array_seq([cljs.core.constant$keyword$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$display,"block"], null)], 0));

return (on_shown.cljs$core$IFn$_invoke$arity$0 ? on_shown.cljs$core$IFn$_invoke$arity$0() : on_shown.call(null));
});
rubix_bootstrap.components.modal.hide_modal_backdrop = (function rubix_bootstrap$components$modal$hide_modal_backdrop(){
var backdrop = document.querySelector("body>.modal-backdrop");
var G__14144_14148 = backdrop;
var G__14145_14149 = "in";
goog.dom.classes.remove(G__14144_14148,G__14145_14149);

var G__14146 = backdrop;
var G__14147 = "out";
return goog.dom.classes.add(G__14146,G__14147);
});
rubix_bootstrap.components.modal.show_modal_backdrop = (function rubix_bootstrap$components$modal$show_modal_backdrop(){
var backdrop = document.querySelector("body>.modal-backdrop");
var G__14154_14158 = backdrop;
var G__14155_14159 = "out";
goog.dom.classes.remove(G__14154_14158,G__14155_14159);

var G__14156 = backdrop;
var G__14157 = "in";
return goog.dom.classes.add(G__14156,G__14157);
});
rubix_bootstrap.components.modal.open_modal = (function rubix_bootstrap$components$modal$open_modal(){
rubix_bootstrap.components.modal.show_modal();

return rubix_bootstrap.components.modal.show_modal_backdrop();
});
rubix_bootstrap.components.modal.close_modal = (function rubix_bootstrap$components$modal$close_modal(){
var p = (function (){var G__14161 = rubix_bootstrap.components.modal.modal_props;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14161) : cljs.core.deref.call(null,G__14161));
})();
var on_hide = cljs.core.constant$keyword$on_DASH_hide.cljs$core$IFn$_invoke$arity$1(p);
var on_hidden = cljs.core.constant$keyword$on_DASH_hidden.cljs$core$IFn$_invoke$arity$1(p);
(on_hide.cljs$core$IFn$_invoke$arity$0 ? on_hide.cljs$core$IFn$_invoke$arity$0() : on_hide.call(null));

rubix_bootstrap.components.modal.hide_modal_backdrop();

return (on_hidden.cljs$core$IFn$_invoke$arity$0 ? on_hidden.cljs$core$IFn$_invoke$arity$0() : on_hidden.call(null));
});
rubix_bootstrap.components.modal.modal = (function rubix_bootstrap$components$modal$modal(props){
var this$ = reagent.core.current_component();
var modal_dialog_classes = rubix_bootstrap.components.modal.gen_classes_md(props);
var p = (function (){var G__14167 = rubix_bootstrap.components.modal.modal_props;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14167) : cljs.core.deref.call(null,G__14167));
})();
var in_QMARK_ = cljs.core.constant$keyword$in.cljs$core$IFn$_invoke$arity$1(p);
var out_QMARK_ = cljs.core.constant$keyword$out.cljs$core$IFn$_invoke$arity$1(p);
var style = cljs.core.constant$keyword$style.cljs$core$IFn$_invoke$arity$1(p);
var on_show = (function (){var or__4307__auto__ = cljs.core.constant$keyword$onShow.cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(or__4307__auto__)){
return or__4307__auto__;
} else {
return ((function (or__4307__auto__,this$,modal_dialog_classes,p,in_QMARK_,out_QMARK_,style){
return (function (){
return null;
});
;})(or__4307__auto__,this$,modal_dialog_classes,p,in_QMARK_,out_QMARK_,style))
}
})();
var on_shown = (function (){var or__4307__auto__ = cljs.core.constant$keyword$onShown.cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(or__4307__auto__)){
return or__4307__auto__;
} else {
return ((function (or__4307__auto__,this$,modal_dialog_classes,p,in_QMARK_,out_QMARK_,style,on_show){
return (function (){
return null;
});
;})(or__4307__auto__,this$,modal_dialog_classes,p,in_QMARK_,out_QMARK_,style,on_show))
}
})();
var on_hide = (function (){var or__4307__auto__ = cljs.core.constant$keyword$onHide.cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(or__4307__auto__)){
return or__4307__auto__;
} else {
return ((function (or__4307__auto__,this$,modal_dialog_classes,p,in_QMARK_,out_QMARK_,style,on_show,on_shown){
return (function (){
return null;
});
;})(or__4307__auto__,this$,modal_dialog_classes,p,in_QMARK_,out_QMARK_,style,on_show,on_shown))
}
})();
var on_hidden = (function (){var or__4307__auto__ = cljs.core.constant$keyword$onHidden.cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(or__4307__auto__)){
return or__4307__auto__;
} else {
return ((function (or__4307__auto__,this$,modal_dialog_classes,p,in_QMARK_,out_QMARK_,style,on_show,on_shown,on_hide){
return (function (){
return null;
});
;})(or__4307__auto__,this$,modal_dialog_classes,p,in_QMARK_,out_QMARK_,style,on_show,on_shown,on_hide))
}
})();
var disable_auto_close = cljs.core.constant$keyword$disableAutoClose.cljs$core$IFn$_invoke$arity$1(props);
var _ = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(rubix_bootstrap.components.modal.modal_props,cljs.core.assoc,cljs.core.constant$keyword$on_DASH_show,on_show,cljs.core.array_seq([cljs.core.constant$keyword$on_DASH_shown,on_shown,cljs.core.constant$keyword$on_DASH_hide,on_hide,cljs.core.constant$keyword$on_DASH_hidden,on_hidden], 0));
var close_modal_event = ((function (this$,modal_dialog_classes,p,in_QMARK_,out_QMARK_,style,on_show,on_shown,on_hide,on_hidden,disable_auto_close,_){
return (function (e){
e.preventDefault();

if(cljs.core.not(disable_auto_close)){
var container = (function (){var G__14168 = "modal-dialog";
return document.getElementById(G__14168);
})();
if(!((container == null))){
if(cljs.core.not((function (){var G__14169 = container;
var G__14170 = e.target;
return goog.dom.contains(G__14169,G__14170);
})())){
return (function (){var G__14171 = rubix_bootstrap.components.modal.modal_manager;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14171) : cljs.core.deref.call(null,G__14171));
})().remove();
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});})(this$,modal_dialog_classes,p,in_QMARK_,out_QMARK_,style,on_show,on_shown,on_hide,on_hidden,disable_auto_close,_))
;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div,cljsjs.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([reagent.core.props(this$),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$role,"dialog",cljs.core.constant$keyword$tabIndex,(-1),cljs.core.constant$keyword$style,style,cljs.core.constant$keyword$class,cljsjs.util.trim([cljs.core.str("modal fade  "),cljs.core.str((cljs.core.truth_(in_QMARK_)?"in ":null)),cljs.core.str(cljs.core.constant$keyword$className.cljs$core$IFn$_invoke$arity$1(props))].join('')),cljs.core.constant$keyword$on_DASH_click,close_modal_event,cljs.core.constant$keyword$on_DASH_touch_DASH_end,close_modal_event], null)], 0)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$id,"modal-dialog",cljs.core.constant$keyword$class,cljsjs.util.trim([cljs.core.str(modal_dialog_classes),cljs.core.str(" "),cljs.core.str(cljs.core.constant$keyword$className.cljs$core$IFn$_invoke$arity$1(props))].join(''))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$modal_DASH_content,cljs.core.constant$keyword$children.cljs$core$IFn$_invoke$arity$1(props)], null)], null)], null);
});
if(cljs.core.truth_(window.hasOwnProperty("document"))){
var body_14180 = document.body;
var fragment_14181 = (function (){var G__14172 = "<div class='modal-backdrop fade out'></div>";
return goog.dom.htmlToDocumentFragment(G__14172);
})();
var G__14173_14182 = window;
var G__14174_14183 = goog.events.EventType.LOAD;
var G__14175_14184 = ((function (G__14173_14182,G__14174_14183,body_14180,fragment_14181){
return (function (){
var G__14176_14185 = body_14180;
var G__14177_14186 = "modal-open";
goog.dom.classes.add(G__14176_14185,G__14177_14186);

var G__14178 = body_14180;
var G__14179 = fragment_14181;
return goog.dom.append(G__14178,G__14179);
});})(G__14173_14182,G__14174_14183,body_14180,fragment_14181))
;
goog.events.listen(G__14173_14182,G__14174_14183,G__14175_14184);
} else {
}
