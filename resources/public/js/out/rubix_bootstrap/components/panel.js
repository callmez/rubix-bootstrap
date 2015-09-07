// Compiled by ClojureScript 0.0-3269 {}
goog.provide('rubix_bootstrap.components.panel');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('rubix_bootstrap.components.button');
goog.require('cljsjs.util');
goog.require('rubix_bootstrap.components.icon');
goog.require('clojure.string');
if(typeof rubix_bootstrap.components.panel.zIndex !== 'undefined'){
} else {
rubix_bootstrap.components.panel.zIndex = reagent.core.atom.call(null,(9999999));
}
rubix_bootstrap.components.panel.reset_globals_BANG_ = (function rubix_bootstrap$components$panel$reset_globals_BANG_(){
return cljs.core.reset_BANG_.call(null,rubix_bootstrap.components.panel.zIndex,(9999999));
});
rubix_bootstrap.components.panel.getZIndex = (function rubix_bootstrap$components$panel$getZIndex(){
return cljs.core.swap_BANG_.call(null,rubix_bootstrap.components.panel.zIndex,cljs.core.dec);
});
rubix_bootstrap.components.panel.common_panel_el = (function rubix_bootstrap$components$panel$common_panel_el(class_name,props){
var this$ = reagent.core.current_component.call(null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),cljsjs.util.trim.call(null,[cljs.core.str(class_name),cljs.core.str(" "),cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"noRadius","noRadius",1319948162).cljs$core$IFn$_invoke$arity$1(props))?"noRadius ":null)),cljs.core.str(" "),cljs.core.str(new cljs.core.Keyword(null,"className","className",-1983287057).cljs$core$IFn$_invoke$arity$1(props))].join(''))], null)),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(props)], null);
});
rubix_bootstrap.components.panel.panel_right = (function rubix_bootstrap$components$panel$panel_right(props){
cljsjs.util.debug.call(null,"panel-right");

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rubix_bootstrap.components.panel.common_panel_el,"rubix-panel-right",props], null);
});
rubix_bootstrap.components.panel.panel_left = (function rubix_bootstrap$components$panel$panel_left(props){
cljsjs.util.debug.call(null,"panel-left");

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rubix_bootstrap.components.panel.common_panel_el,"rubix-panel-left",props], null);
});
rubix_bootstrap.components.panel.panel_footer = (function rubix_bootstrap$components$panel$panel_footer(props){
cljsjs.util.debug.call(null,"panel-footer");

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rubix_bootstrap.components.panel.common_panel_el,"rubix-panel-footer",props], null);
});
rubix_bootstrap.components.panel.panel_header = (function rubix_bootstrap$components$panel$panel_header(props){
cljsjs.util.debug.call(null,"panel-header");

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rubix_bootstrap.components.panel.common_panel_el,"rubix-panel-header",props], null);
});
rubix_bootstrap.components.panel.panel_body = (function rubix_bootstrap$components$panel$panel_body(props){
cljsjs.util.debug.call(null,"panel-body");

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rubix_bootstrap.components.panel.common_panel_el,"rubix-panel-body",props], null);
});
rubix_bootstrap.components.panel.panel = (function rubix_bootstrap$components$panel$panel(props){
cljsjs.util.debug.call(null,"panel");

var this$ = reagent.core.current_component.call(null);
var horizontal_QMARK_ = new cljs.core.Keyword(null,"horizontal","horizontal",2062109475).cljs$core$IFn$_invoke$arity$1(props);
var classes = [cljs.core.str("rubix-panel "),cljs.core.str((cljs.core.truth_(horizontal_QMARK_)?"horizontal ":null))].join('');
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.call(null,reagent.core.props.call(null,this$),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),cljsjs.util.trim.call(null,[cljs.core.str(classes),cljs.core.str(" "),cljs.core.str(new cljs.core.Keyword(null,"className","className",-1983287057).cljs$core$IFn$_invoke$arity$1(props))].join(''))], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(props)], null)], null);
});
rubix_bootstrap.components.panel.gen_control_classes = (function rubix_bootstrap$components$panel$gen_control_classes(props){
var control_styles_QMARK_ = new cljs.core.Keyword(null,"controlStyles","controlStyles",-689692485).cljs$core$IFn$_invoke$arity$1(props);
return [cljs.core.str("rubix-panel-controls "),cljs.core.str((cljs.core.truth_(control_styles_QMARK_)?(function (){


return " ";
})()
:null))].join('');
});
rubix_bootstrap.components.panel.gen_container_classes = (function rubix_bootstrap$components$panel$gen_container_classes(props){
var bordered_QMARK_ = new cljs.core.Keyword(null,"bordered","bordered",-832486681).cljs$core$IFn$_invoke$arity$1(props);
var no_overflow_QMARK_ = new cljs.core.Keyword(null,"noOverflow","noOverflow",1469790339).cljs$core$IFn$_invoke$arity$1(props);
var plain_QMARK_ = new cljs.core.Keyword(null,"plain","plain",1368629269).cljs$core$IFn$_invoke$arity$1(props);
var gutter_bottom_QMARK_ = new cljs.core.Keyword(null,"gutterBottom","gutterBottom",1253263865).cljs$core$IFn$_invoke$arity$1(props);
var collapse_bottom_QMARK_ = new cljs.core.Keyword(null,"collapseBottom","collapseBottom",-2079678199).cljs$core$IFn$_invoke$arity$1(props);
var container_classes_QMARK_ = new cljs.core.Keyword(null,"containerClasses","containerClasses",-543850089).cljs$core$IFn$_invoke$arity$1(props);
return [cljs.core.str("rubix-panel-container "),cljs.core.str((cljs.core.truth_(bordered_QMARK_)?" bordered ":null)),cljs.core.str((cljs.core.truth_(no_overflow_QMARK_)?" noOverflow ":null)),cljs.core.str((cljs.core.truth_(plain_QMARK_)?" panel-plain ":null)),cljs.core.str((cljs.core.truth_(gutter_bottom_QMARK_)?" panel-gutter-bottom ":null)),cljs.core.str((cljs.core.truth_(collapse_bottom_QMARK_)?" panel-collapse-bottom ":null)),cljs.core.str((cljs.core.truth_(container_classes_QMARK_)?[cljs.core.str(" "),cljs.core.str(container_classes_QMARK_),cljs.core.str(" ")].join(''):null))].join('');
});
rubix_bootstrap.components.panel.toggle_panel = (function rubix_bootstrap$components$panel$toggle_panel(e,collapsed_QMARK_){
e.preventDefault();

cljs.core.reset_BANG_.call(null,collapsed_QMARK_,cljs.core.not.call(null,cljs.core.deref.call(null,collapsed_QMARK_)));

return "";
});
rubix_bootstrap.components.panel.remove_panel = (function rubix_bootstrap$components$panel$remove_panel(e,removed_QMARK_){
e.preventDefault();

cljs.core.reset_BANG_.call(null,removed_QMARK_,true);

return "";
});
rubix_bootstrap.components.panel.construct_no_controls = (function rubix_bootstrap$components$panel$construct_no_controls(control_classes,collapsed_QMARK_,removed_QMARK_){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),cljsjs.util.trim.call(null,control_classes)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rubix_bootstrap.components.button.button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rubix_bootstrap.components.icon.icon,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bundle","bundle",-1741503734),"fontello",new cljs.core.Keyword(null,"glyph","glyph",2119448117),"loop-alt-1"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rubix_bootstrap.components.button.button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
return rubix_bootstrap.components.panel.toggle_panel.call(null,e,collapsed_QMARK_);
}),new cljs.core.Keyword(null,"on-touch-end","on-touch-end",1515667389),(function (e){
return rubix_bootstrap.components.panel.toggle_panel.call(null,e,collapsed_QMARK_);
}),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rubix_bootstrap.components.icon.icon,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bundle","bundle",-1741503734),"fontello",new cljs.core.Keyword(null,"glyph","glyph",2119448117),(cljs.core.truth_(cljs.core.deref.call(null,collapsed_QMARK_))?"plus":"minus")], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rubix_bootstrap.components.button.button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
return rubix_bootstrap.components.panel.remove_panel.call(null,e,removed_QMARK_);
}),new cljs.core.Keyword(null,"on-touch-end","on-touch-end",1515667389),(function (e){
return rubix_bootstrap.components.panel.remove_panel.call(null,e,removed_QMARK_);
}),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rubix_bootstrap.components.icon.icon,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bundle","bundle",-1741503734),"fontello",new cljs.core.Keyword(null,"glyph","glyph",2119448117),"cancel"], null)], null)], null)], null)], null);
});
rubix_bootstrap.components.panel.panel_container = (function rubix_bootstrap$components$panel$panel_container(props){
cljsjs.util.debug.call(null,"panel-container");

var this$ = reagent.core.current_component.call(null);
var collapsed_QMARK_ = (function (){var or__4307__auto__ = (this$["toggled"]);
if(cljs.core.truth_(or__4307__auto__)){
return or__4307__auto__;
} else {
return (this$["toggled"] = reagent.core.atom.call(null,false));
}
})();
var removed_QMARK_ = (function (){var or__4307__auto__ = (this$["removed"]);
if(cljs.core.truth_(or__4307__auto__)){
return or__4307__auto__;
} else {
return (this$["removed"] = reagent.core.atom.call(null,false));
}
})();
var control_classes = rubix_bootstrap.components.panel.gen_control_classes.call(null,props);
var container_classes = rubix_bootstrap.components.panel.gen_container_classes.call(null,props);
var plain_QMARK_ = new cljs.core.Keyword(null,"plain","plain",1368629269).cljs$core$IFn$_invoke$arity$1(props);
var is_horizontal_QMARK_ = new cljs.core.Keyword(null,"horizontal","horizontal",2062109475).cljs$core$IFn$_invoke$arity$1(props);
var custom_controls_QMARK_ = new cljs.core.Keyword(null,"customControls","customControls",-1659504626).cljs$core$IFn$_invoke$arity$1(props);
var no_controls_QMARK_ = plain_QMARK_;
var controls = ((cljs.core.not.call(null,no_controls_QMARK_))?rubix_bootstrap.components.panel.construct_no_controls.call(null,control_classes,collapsed_QMARK_,removed_QMARK_):null);
var controls__$1 = (cljs.core.truth_(custom_controls_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),cljsjs.util.trim.call(null,control_classes)], null),custom_controls_QMARK_], null):controls);
var overflow = (cljs.core.truth_(cljs.core.deref.call(null,collapsed_QMARK_))?"hidden":"");
var display = (cljs.core.truth_(is_horizontal_QMARK_)?(cljs.core.truth_(cljs.core.deref.call(null,collapsed_QMARK_))?"block":"table"):null);
var height = (cljs.core.truth_(cljs.core.deref.call(null,collapsed_QMARK_))?"16px":"auto");
if(cljs.core.truth_(cljs.core.deref.call(null,removed_QMARK_))){
return null;
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljsjs.util.deep_merge.call(null,reagent.core.props.call(null,this$),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),cljsjs.util.trim.call(null,[cljs.core.str("rubix-panel-container-with-controls "),cljs.core.str((cljs.core.truth_(cljs.core.deref.call(null,collapsed_QMARK_))?"active ":null)),cljs.core.str(" "),cljs.core.str(new cljs.core.Keyword(null,"className","className",-1983287057).cljs$core$IFn$_invoke$arity$1(props))].join(''))], null)),controls__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),cljsjs.util.trim.call(null,container_classes),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"zIndex","zIndex",-1588341609),rubix_bootstrap.components.panel.getZIndex.call(null),new cljs.core.Keyword(null,"overflow","overflow",2058931880),overflow,new cljs.core.Keyword(null,"display","display",242065432),(function (){var or__4307__auto__ = display;
if(cljs.core.truth_(or__4307__auto__)){
return or__4307__auto__;
} else {
return "block";
}
})(),new cljs.core.Keyword(null,"height","height",1025178622),height], null)], null),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(props)], null)], null);
}
});

//# sourceMappingURL=panel.js.map