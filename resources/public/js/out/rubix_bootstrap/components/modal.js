// Compiled by ClojureScript 0.0-3269 {}
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
rubix_bootstrap.components.modal.modal_manager = reagent.core.atom.call(null,null);
}
if(typeof rubix_bootstrap.components.modal.modal_props !== 'undefined'){
} else {
rubix_bootstrap.components.modal.modal_props = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
rubix_bootstrap.components.modal.set_modal_manager = (function rubix_bootstrap$components$modal$set_modal_manager(m){
return cljs.core.reset_BANG_.call(null,rubix_bootstrap.components.modal.modal_manager,m);
});
rubix_bootstrap.components.modal.common_el = (function rubix_bootstrap$components$modal$common_el(class_name,props){
var this$ = reagent.core.current_component.call(null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.call(null,reagent.core.props.call(null,this$),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),cljsjs.util.trim.call(null,[cljs.core.str(class_name),cljs.core.str(" "),cljs.core.str(new cljs.core.Keyword(null,"className","className",-1983287057).cljs$core$IFn$_invoke$arity$1(props))].join(''))], null)),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(props)], null);
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
var sm_QMARK_ = new cljs.core.Keyword(null,"sm","sm",-1402575065).cljs$core$IFn$_invoke$arity$1(props);
var lg_QMARK_ = new cljs.core.Keyword(null,"lg","lg",-80787836).cljs$core$IFn$_invoke$arity$1(props);
return [cljs.core.str("modal-dialog "),cljs.core.str((cljs.core.truth_(sm_QMARK_)?"modal-sm ":null)),cljs.core.str((cljs.core.truth_(lg_QMARK_)?"modal-lg ":null))].join('');
});
rubix_bootstrap.components.modal.show_modal = (function rubix_bootstrap$components$modal$show_modal(){
var p = cljs.core.deref.call(null,rubix_bootstrap.components.modal.modal_props);
var on_show = new cljs.core.Keyword(null,"on-show","on-show",-1100796727).cljs$core$IFn$_invoke$arity$1(p);
var on_shown = new cljs.core.Keyword(null,"on-shown","on-shown",-1181773287).cljs$core$IFn$_invoke$arity$1(p);
on_show.call(null);

cljs.core.swap_BANG_.call(null,rubix_bootstrap.components.modal.modal_props,cljs.core.assoc,new cljs.core.Keyword(null,"in","in",-1531184865),true,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"block"], null));

return on_shown.call(null);
});
rubix_bootstrap.components.modal.hide_modal_backdrop = (function rubix_bootstrap$components$modal$hide_modal_backdrop(){
var backdrop = document.querySelector("body>.modal-backdrop");
goog.dom.classes.remove(backdrop,"in");

return goog.dom.classes.add(backdrop,"out");
});
rubix_bootstrap.components.modal.show_modal_backdrop = (function rubix_bootstrap$components$modal$show_modal_backdrop(){
var backdrop = document.querySelector("body>.modal-backdrop");
goog.dom.classes.remove(backdrop,"out");

return goog.dom.classes.add(backdrop,"in");
});
rubix_bootstrap.components.modal.open_modal = (function rubix_bootstrap$components$modal$open_modal(){
rubix_bootstrap.components.modal.show_modal.call(null);

return rubix_bootstrap.components.modal.show_modal_backdrop.call(null);
});
rubix_bootstrap.components.modal.close_modal = (function rubix_bootstrap$components$modal$close_modal(){
var p = cljs.core.deref.call(null,rubix_bootstrap.components.modal.modal_props);
var on_hide = new cljs.core.Keyword(null,"on-hide","on-hide",1263105709).cljs$core$IFn$_invoke$arity$1(p);
var on_hidden = new cljs.core.Keyword(null,"on-hidden","on-hidden",-622634910).cljs$core$IFn$_invoke$arity$1(p);
on_hide.call(null);

rubix_bootstrap.components.modal.hide_modal_backdrop.call(null);

return on_hidden.call(null);
});
rubix_bootstrap.components.modal.modal = (function rubix_bootstrap$components$modal$modal(props){
var this$ = reagent.core.current_component.call(null);
var modal_dialog_classes = rubix_bootstrap.components.modal.gen_classes_md.call(null,props);
var p = cljs.core.deref.call(null,rubix_bootstrap.components.modal.modal_props);
var in_QMARK_ = new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(p);
var out_QMARK_ = new cljs.core.Keyword(null,"out","out",-910545517).cljs$core$IFn$_invoke$arity$1(p);
var style = new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(p);
var on_show = (function (){var or__4307__auto__ = new cljs.core.Keyword(null,"onShow","onShow",-897525328).cljs$core$IFn$_invoke$arity$1(props);
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
var on_shown = (function (){var or__4307__auto__ = new cljs.core.Keyword(null,"onShown","onShown",-788063648).cljs$core$IFn$_invoke$arity$1(props);
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
var on_hide = (function (){var or__4307__auto__ = new cljs.core.Keyword(null,"onHide","onHide",-394246948).cljs$core$IFn$_invoke$arity$1(props);
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
var on_hidden = (function (){var or__4307__auto__ = new cljs.core.Keyword(null,"onHidden","onHidden",-441246357).cljs$core$IFn$_invoke$arity$1(props);
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
var disable_auto_close = new cljs.core.Keyword(null,"disableAutoClose","disableAutoClose",-59111881).cljs$core$IFn$_invoke$arity$1(props);
var _ = cljs.core.swap_BANG_.call(null,rubix_bootstrap.components.modal.modal_props,cljs.core.assoc,new cljs.core.Keyword(null,"on-show","on-show",-1100796727),on_show,new cljs.core.Keyword(null,"on-shown","on-shown",-1181773287),on_shown,new cljs.core.Keyword(null,"on-hide","on-hide",1263105709),on_hide,new cljs.core.Keyword(null,"on-hidden","on-hidden",-622634910),on_hidden);
var close_modal_event = ((function (this$,modal_dialog_classes,p,in_QMARK_,out_QMARK_,style,on_show,on_shown,on_hide,on_hidden,disable_auto_close,_){
return (function (e){
e.preventDefault();

if(cljs.core.not.call(null,disable_auto_close)){
var container = document.getElementById("modal-dialog");
if(!((container == null))){
if(cljs.core.not.call(null,goog.dom.contains(container,e.target))){
return cljs.core.deref.call(null,rubix_bootstrap.components.modal.modal_manager).remove();
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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljsjs.util.deep_merge.call(null,reagent.core.props.call(null,this$),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"role","role",-736691072),"dialog",new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),(-1),new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"class","class",-2030961996),cljsjs.util.trim.call(null,[cljs.core.str("modal fade  "),cljs.core.str((cljs.core.truth_(in_QMARK_)?"in ":null)),cljs.core.str(new cljs.core.Keyword(null,"className","className",-1983287057).cljs$core$IFn$_invoke$arity$1(props))].join('')),new cljs.core.Keyword(null,"on-click","on-click",1632826543),close_modal_event,new cljs.core.Keyword(null,"on-touch-end","on-touch-end",1515667389),close_modal_event], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"modal-dialog",new cljs.core.Keyword(null,"class","class",-2030961996),cljsjs.util.trim.call(null,[cljs.core.str(modal_dialog_classes),cljs.core.str(" "),cljs.core.str(new cljs.core.Keyword(null,"className","className",-1983287057).cljs$core$IFn$_invoke$arity$1(props))].join(''))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-content","div.modal-content",-83470844),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(props)], null)], null)], null);
});
if(cljs.core.truth_(window.hasOwnProperty("document"))){
var body_14426 = document.body;
var fragment_14427 = goog.dom.htmlToDocumentFragment("<div class='modal-backdrop fade out'></div>");
goog.events.listen(window,goog.events.EventType.LOAD,((function (body_14426,fragment_14427){
return (function (){
goog.dom.classes.add(body_14426,"modal-open");

return goog.dom.append(body_14426,fragment_14427);
});})(body_14426,fragment_14427))
);
} else {
}

//# sourceMappingURL=modal.js.map