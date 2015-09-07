// Compiled by ClojureScript 0.0-3269 {:static-fns true, :optimize-constants true}
goog.provide('rubix_bootstrap.components.panel');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('rubix_bootstrap.components.button');
goog.require('cljsjs.util');
goog.require('rubix_bootstrap.components.icon');
goog.require('clojure.string');
if(typeof rubix_bootstrap.components.panel.zIndex !== 'undefined'){
} else {
rubix_bootstrap.components.panel.zIndex = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((9999999));
}
rubix_bootstrap.components.panel.reset_globals_BANG_ = (function rubix_bootstrap$components$panel$reset_globals_BANG_(){
var G__14066 = rubix_bootstrap.components.panel.zIndex;
var G__14067 = (9999999);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__14066,G__14067) : cljs.core.reset_BANG_.call(null,G__14066,G__14067));
});
rubix_bootstrap.components.panel.getZIndex = (function rubix_bootstrap$components$panel$getZIndex(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(rubix_bootstrap.components.panel.zIndex,cljs.core.dec);
});
rubix_bootstrap.components.panel.common_panel_el = (function rubix_bootstrap$components$panel$common_panel_el(class_name,props){
var this$ = reagent.core.current_component();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([props,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$class,cljsjs.util.trim([cljs.core.str(class_name),cljs.core.str(" "),cljs.core.str((cljs.core.truth_(cljs.core.constant$keyword$noRadius.cljs$core$IFn$_invoke$arity$1(props))?"noRadius ":null)),cljs.core.str(" "),cljs.core.str(cljs.core.constant$keyword$className.cljs$core$IFn$_invoke$arity$1(props))].join(''))], null)], 0)),cljs.core.constant$keyword$children.cljs$core$IFn$_invoke$arity$1(props)], null);
});
rubix_bootstrap.components.panel.panel_right = (function rubix_bootstrap$components$panel$panel_right(props){
cljsjs.util.debug.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["panel-right"], 0));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rubix_bootstrap.components.panel.common_panel_el,"rubix-panel-right",props], null);
});
rubix_bootstrap.components.panel.panel_left = (function rubix_bootstrap$components$panel$panel_left(props){
cljsjs.util.debug.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["panel-left"], 0));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rubix_bootstrap.components.panel.common_panel_el,"rubix-panel-left",props], null);
});
rubix_bootstrap.components.panel.panel_footer = (function rubix_bootstrap$components$panel$panel_footer(props){
cljsjs.util.debug.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["panel-footer"], 0));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rubix_bootstrap.components.panel.common_panel_el,"rubix-panel-footer",props], null);
});
rubix_bootstrap.components.panel.panel_header = (function rubix_bootstrap$components$panel$panel_header(props){
cljsjs.util.debug.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["panel-header"], 0));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rubix_bootstrap.components.panel.common_panel_el,"rubix-panel-header",props], null);
});
rubix_bootstrap.components.panel.panel_body = (function rubix_bootstrap$components$panel$panel_body(props){
cljsjs.util.debug.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["panel-body"], 0));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rubix_bootstrap.components.panel.common_panel_el,"rubix-panel-body",props], null);
});
rubix_bootstrap.components.panel.panel = (function rubix_bootstrap$components$panel$panel(props){
cljsjs.util.debug.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["panel"], 0));

var this$ = reagent.core.current_component();
var horizontal_QMARK_ = cljs.core.constant$keyword$horizontal.cljs$core$IFn$_invoke$arity$1(props);
var classes = [cljs.core.str("rubix-panel "),cljs.core.str((cljs.core.truth_(horizontal_QMARK_)?"horizontal ":null))].join('');
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([reagent.core.props(this$),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$class,cljsjs.util.trim([cljs.core.str(classes),cljs.core.str(" "),cljs.core.str(cljs.core.constant$keyword$className.cljs$core$IFn$_invoke$arity$1(props))].join(''))], null)], 0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div,cljs.core.constant$keyword$children.cljs$core$IFn$_invoke$arity$1(props)], null)], null);
});
rubix_bootstrap.components.panel.gen_control_classes = (function rubix_bootstrap$components$panel$gen_control_classes(props){
var control_styles_QMARK_ = cljs.core.constant$keyword$controlStyles.cljs$core$IFn$_invoke$arity$1(props);
return [cljs.core.str("rubix-panel-controls "),cljs.core.str((cljs.core.truth_(control_styles_QMARK_)?(function (){


return " ";
})()
:null))].join('');
});
rubix_bootstrap.components.panel.gen_container_classes = (function rubix_bootstrap$components$panel$gen_container_classes(props){
var bordered_QMARK_ = cljs.core.constant$keyword$bordered.cljs$core$IFn$_invoke$arity$1(props);
var no_overflow_QMARK_ = cljs.core.constant$keyword$noOverflow.cljs$core$IFn$_invoke$arity$1(props);
var plain_QMARK_ = cljs.core.constant$keyword$plain.cljs$core$IFn$_invoke$arity$1(props);
var gutter_bottom_QMARK_ = cljs.core.constant$keyword$gutterBottom.cljs$core$IFn$_invoke$arity$1(props);
var collapse_bottom_QMARK_ = cljs.core.constant$keyword$collapseBottom.cljs$core$IFn$_invoke$arity$1(props);
var container_classes_QMARK_ = cljs.core.constant$keyword$containerClasses.cljs$core$IFn$_invoke$arity$1(props);
return [cljs.core.str("rubix-panel-container "),cljs.core.str((cljs.core.truth_(bordered_QMARK_)?" bordered ":null)),cljs.core.str((cljs.core.truth_(no_overflow_QMARK_)?" noOverflow ":null)),cljs.core.str((cljs.core.truth_(plain_QMARK_)?" panel-plain ":null)),cljs.core.str((cljs.core.truth_(gutter_bottom_QMARK_)?" panel-gutter-bottom ":null)),cljs.core.str((cljs.core.truth_(collapse_bottom_QMARK_)?" panel-collapse-bottom ":null)),cljs.core.str((cljs.core.truth_(container_classes_QMARK_)?[cljs.core.str(" "),cljs.core.str(container_classes_QMARK_),cljs.core.str(" ")].join(''):null))].join('');
});
rubix_bootstrap.components.panel.toggle_panel = (function rubix_bootstrap$components$panel$toggle_panel(e,collapsed_QMARK_){
e.preventDefault();

var G__14071_14074 = collapsed_QMARK_;
var G__14072_14075 = cljs.core.not((function (){var G__14073 = collapsed_QMARK_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14073) : cljs.core.deref.call(null,G__14073));
})());
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__14071_14074,G__14072_14075) : cljs.core.reset_BANG_.call(null,G__14071_14074,G__14072_14075));

return "";
});
rubix_bootstrap.components.panel.remove_panel = (function rubix_bootstrap$components$panel$remove_panel(e,removed_QMARK_){
e.preventDefault();

var G__14078_14080 = removed_QMARK_;
var G__14079_14081 = true;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__14078_14080,G__14079_14081) : cljs.core.reset_BANG_.call(null,G__14078_14080,G__14079_14081));

return "";
});
rubix_bootstrap.components.panel.construct_no_controls = (function rubix_bootstrap$components$panel$construct_no_controls(control_classes,collapsed_QMARK_,removed_QMARK_){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$class,cljsjs.util.trim(control_classes)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rubix_bootstrap.components.button.button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rubix_bootstrap.components.icon.icon,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$bundle,"fontello",cljs.core.constant$keyword$glyph,"loop-alt-1"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rubix_bootstrap.components.button.button,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$on_DASH_click,(function (e){
return rubix_bootstrap.components.panel.toggle_panel(e,collapsed_QMARK_);
}),cljs.core.constant$keyword$on_DASH_touch_DASH_end,(function (e){
return rubix_bootstrap.components.panel.toggle_panel(e,collapsed_QMARK_);
}),cljs.core.constant$keyword$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rubix_bootstrap.components.icon.icon,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$bundle,"fontello",cljs.core.constant$keyword$glyph,(cljs.core.truth_((function (){var G__14083 = collapsed_QMARK_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14083) : cljs.core.deref.call(null,G__14083));
})())?"plus":"minus")], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rubix_bootstrap.components.button.button,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$on_DASH_click,(function (e){
return rubix_bootstrap.components.panel.remove_panel(e,removed_QMARK_);
}),cljs.core.constant$keyword$on_DASH_touch_DASH_end,(function (e){
return rubix_bootstrap.components.panel.remove_panel(e,removed_QMARK_);
}),cljs.core.constant$keyword$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rubix_bootstrap.components.icon.icon,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$bundle,"fontello",cljs.core.constant$keyword$glyph,"cancel"], null)], null)], null)], null)], null);
});
rubix_bootstrap.components.panel.panel_container = (function rubix_bootstrap$components$panel$panel_container(props){
cljsjs.util.debug.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["panel-container"], 0));

var this$ = reagent.core.current_component();
var collapsed_QMARK_ = (function (){var or__4307__auto__ = (this$["toggled"]);
if(cljs.core.truth_(or__4307__auto__)){
return or__4307__auto__;
} else {
return (this$["toggled"] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false));
}
})();
var removed_QMARK_ = (function (){var or__4307__auto__ = (this$["removed"]);
if(cljs.core.truth_(or__4307__auto__)){
return or__4307__auto__;
} else {
return (this$["removed"] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false));
}
})();
var control_classes = rubix_bootstrap.components.panel.gen_control_classes(props);
var container_classes = rubix_bootstrap.components.panel.gen_container_classes(props);
var plain_QMARK_ = cljs.core.constant$keyword$plain.cljs$core$IFn$_invoke$arity$1(props);
var is_horizontal_QMARK_ = cljs.core.constant$keyword$horizontal.cljs$core$IFn$_invoke$arity$1(props);
var custom_controls_QMARK_ = cljs.core.constant$keyword$customControls.cljs$core$IFn$_invoke$arity$1(props);
var no_controls_QMARK_ = plain_QMARK_;
var controls = ((cljs.core.not(no_controls_QMARK_))?rubix_bootstrap.components.panel.construct_no_controls(control_classes,collapsed_QMARK_,removed_QMARK_):null);
var controls__$1 = (cljs.core.truth_(custom_controls_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$class,cljsjs.util.trim(control_classes)], null),custom_controls_QMARK_], null):controls);
var overflow = (cljs.core.truth_((function (){var G__14089 = collapsed_QMARK_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14089) : cljs.core.deref.call(null,G__14089));
})())?"hidden":"");
var display = (cljs.core.truth_(is_horizontal_QMARK_)?(cljs.core.truth_((function (){var G__14090 = collapsed_QMARK_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14090) : cljs.core.deref.call(null,G__14090));
})())?"block":"table"):null);
var height = (cljs.core.truth_((function (){var G__14091 = collapsed_QMARK_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14091) : cljs.core.deref.call(null,G__14091));
})())?"16px":"auto");
if(cljs.core.truth_((function (){var G__14092 = removed_QMARK_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14092) : cljs.core.deref.call(null,G__14092));
})())){
return null;
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div,cljsjs.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([reagent.core.props(this$),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$class,cljsjs.util.trim([cljs.core.str("rubix-panel-container-with-controls "),cljs.core.str((cljs.core.truth_((function (){var G__14093 = collapsed_QMARK_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14093) : cljs.core.deref.call(null,G__14093));
})())?"active ":null)),cljs.core.str(" "),cljs.core.str(cljs.core.constant$keyword$className.cljs$core$IFn$_invoke$arity$1(props))].join(''))], null)], 0)),controls__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$class,cljsjs.util.trim(container_classes),cljs.core.constant$keyword$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$zIndex,rubix_bootstrap.components.panel.getZIndex(),cljs.core.constant$keyword$overflow,overflow,cljs.core.constant$keyword$display,(function (){var or__4307__auto__ = display;
if(cljs.core.truth_(or__4307__auto__)){
return or__4307__auto__;
} else {
return "block";
}
})(),cljs.core.constant$keyword$height,height], null)], null),cljs.core.constant$keyword$children.cljs$core$IFn$_invoke$arity$1(props)], null)], null);
}
});
