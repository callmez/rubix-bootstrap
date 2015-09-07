// Compiled by ClojureScript 0.0-3269 {:static-fns true, :optimize-constants true}
goog.provide('rubix_bootstrap.components.progress');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljsjs.util');
rubix_bootstrap.components.progress.gen_classes_pg = (function rubix_bootstrap$components$progress$gen_classes_pg(props){
var collapse_bottom_QMARK_ = cljs.core.constant$keyword$collapseBottom.cljs$core$IFn$_invoke$arity$1(props);
return [cljs.core.str("progress "),cljs.core.str((cljs.core.truth_(collapse_bottom_QMARK_)?"progress-collapse-bottom ":null))].join('');
});
rubix_bootstrap.components.progress.progress_group_construct = (function rubix_bootstrap$components$progress$progress_group_construct(){
var argseq__5347__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return rubix_bootstrap.components.progress.progress_group_construct.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5347__auto__);
});

rubix_bootstrap.components.progress.progress_group_construct.cljs$core$IFn$_invoke$arity$variadic = (function (props,p__14467){
var vec__14468 = p__14467;
var child = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14468,(0),null);
var this$ = reagent.core.current_component();
var classes = rubix_bootstrap.components.progress.gen_classes_pg(props);
var rchildren = (function (){var or__4307__auto__ = child;
if(cljs.core.truth_(or__4307__auto__)){
return or__4307__auto__;
} else {
return cljs.core.constant$keyword$children.cljs$core$IFn$_invoke$arity$1(props);
}
})();
var background = cljs.core.constant$keyword$background.cljs$core$IFn$_invoke$arity$1(props);
var children_count = (cljs.core.truth_(child)?(1):cljs.core.count(rchildren));
var props__$1 = cljsjs.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([reagent.core.props(this$),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$class,cljsjs.util.trim([cljs.core.str(classes),cljs.core.str(" "),cljs.core.str(cljs.core.constant$keyword$className.cljs$core$IFn$_invoke$arity$1(props))].join('')),cljs.core.constant$keyword$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$background,background], null)], null)], 0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),children_count)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div,props__$1,rchildren], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div,props__$1,cljsjs.util.map_children(((function (this$,classes,rchildren,background,children_count,props__$1,vec__14468,child){
return (function (i,c){
return React.cloneElement(c,{"stack": true, "key": i});
});})(this$,classes,rchildren,background,children_count,props__$1,vec__14468,child))
,rchildren)], null);
}
});

rubix_bootstrap.components.progress.progress_group_construct.cljs$lang$maxFixedArity = (1);

rubix_bootstrap.components.progress.progress_group_construct.cljs$lang$applyTo = (function (seq14465){
var G__14466 = cljs.core.first(seq14465);
var seq14465__$1 = cljs.core.next(seq14465);
return rubix_bootstrap.components.progress.progress_group_construct.cljs$core$IFn$_invoke$arity$variadic(G__14466,seq14465__$1);
});
rubix_bootstrap.components.progress.progress_group = (function rubix_bootstrap$components$progress$progress_group(props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rubix_bootstrap.components.progress.progress_group_construct,props], null);
});
rubix_bootstrap.components.progress.gen_classes = (function rubix_bootstrap$components$progress$gen_classes(props){
var active_QMARK_ = cljs.core.constant$keyword$active.cljs$core$IFn$_invoke$arity$1(props);
var info_QMARK_ = cljs.core.constant$keyword$info.cljs$core$IFn$_invoke$arity$1(props);
var danger_QMARK_ = cljs.core.constant$keyword$danger.cljs$core$IFn$_invoke$arity$1(props);
var success_QMARK_ = cljs.core.constant$keyword$success.cljs$core$IFn$_invoke$arity$1(props);
var warning_QMARK_ = cljs.core.constant$keyword$warning.cljs$core$IFn$_invoke$arity$1(props);
var striped_QMARK_ = cljs.core.constant$keyword$striped.cljs$core$IFn$_invoke$arity$1(props);
var collapse_bottom_QMARK_ = (function (){var and__4295__auto__ = cljs.core.constant$keyword$collapseBottom.cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(and__4295__auto__)){
return cljs.core.constant$keyword$stack.cljs$core$IFn$_invoke$arity$1(props);
} else {
return and__4295__auto__;
}
})();
return [cljs.core.str("progress-bar "),cljs.core.str((cljs.core.truth_(active_QMARK_)?"active ":null)),cljs.core.str((cljs.core.truth_(info_QMARK_)?"progress-bar-info ":null)),cljs.core.str((cljs.core.truth_(danger_QMARK_)?"progress-bar-danger ":null)),cljs.core.str((cljs.core.truth_(success_QMARK_)?"progress-bar-success ":null)),cljs.core.str((cljs.core.truth_(warning_QMARK_)?"progress-bar-warning ":null)),cljs.core.str((cljs.core.truth_(striped_QMARK_)?"progress-bar-striped ":null)),cljs.core.str((cljs.core.truth_(collapse_bottom_QMARK_)?"progress-collapse-bottom ":null))].join('');
});
rubix_bootstrap.components.progress.progress = (function rubix_bootstrap$components$progress$progress(props){
var this$ = reagent.core.current_component();
var classes = rubix_bootstrap.components.progress.gen_classes(props);
var info_QMARK_ = cljs.core.constant$keyword$info.cljs$core$IFn$_invoke$arity$1(props);
var danger_QMARK_ = cljs.core.constant$keyword$danger.cljs$core$IFn$_invoke$arity$1(props);
var success_QMARK_ = cljs.core.constant$keyword$success.cljs$core$IFn$_invoke$arity$1(props);
var warning_QMARK_ = cljs.core.constant$keyword$warning.cljs$core$IFn$_invoke$arity$1(props);
var suffix = [cljs.core.str(" ("),cljs.core.str((cljs.core.truth_(info_QMARK_)?"info":null)),cljs.core.str((cljs.core.truth_(danger_QMARK_)?"danger":null)),cljs.core.str((cljs.core.truth_(success_QMARK_)?"success":null)),cljs.core.str((cljs.core.truth_(warning_QMARK_)?"warning":null)),cljs.core.str(")")].join('');
var value = cljs.core.constant$keyword$value.cljs$core$IFn$_invoke$arity$1(props);
var color = cljs.core.constant$keyword$color.cljs$core$IFn$_invoke$arity$1(props);
var min_value = cljs.core.constant$keyword$min.cljs$core$IFn$_invoke$arity$1(props);
var max_value = cljs.core.constant$keyword$max.cljs$core$IFn$_invoke$arity$1(props);
var is_stack_QMARK_ = cljs.core.constant$keyword$stack.cljs$core$IFn$_invoke$arity$1(props);
var fg_color = cljs.core.constant$keyword$fgColor.cljs$core$IFn$_invoke$arity$1(props);
var min_width = cljs.core.constant$keyword$minWidth.cljs$core$IFn$_invoke$arity$1(props);
var with_label = cljs.core.constant$keyword$withLabel.cljs$core$IFn$_invoke$arity$1(props);
var child = (cljs.core.truth_(with_label)?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.type(with_label),String))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$color,fg_color], null)], null),with_label], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$color,fg_color], null)], null),[cljs.core.str(value),cljs.core.str("%")].join('')], null)):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$span$sr_DASH_only,[cljs.core.str(value),cljs.core.str("% Complete"),cljs.core.str(suffix)].join('')], null));
if(cljs.core.truth_(is_stack_QMARK_)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div,cljsjs.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([reagent.core.props(this$),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$class,cljsjs.util.trim([cljs.core.str(classes),cljs.core.str(" "),cljs.core.str(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$className,props], null))].join('')),cljs.core.constant$keyword$role,"progressbar",cljs.core.constant$keyword$aria_DASH_valuenow,value,cljs.core.constant$keyword$aria_DASH_valuemin,min_value,cljs.core.constant$keyword$aria_DASH_valuemax,max_value,cljs.core.constant$keyword$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$width,[cljs.core.str(value),cljs.core.str("%")].join(''),cljs.core.constant$keyword$background,color,cljs.core.constant$keyword$min_DASH_width,min_width], null)], null)], 0)),child], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rubix_bootstrap.components.progress.progress_group_construct,props,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$class,cljsjs.util.trim(classes),cljs.core.constant$keyword$role,"progressbar",cljs.core.constant$keyword$aria_DASH_valuenow,value,cljs.core.constant$keyword$aria_DASH_valuemin,min_value,cljs.core.constant$keyword$aria_DASH_valuemax,max_value,cljs.core.constant$keyword$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$width,[cljs.core.str(value),cljs.core.str("%")].join(''),cljs.core.constant$keyword$background,color,cljs.core.constant$keyword$min_DASH_width,min_width], null)], null),child], null)], null);
}
});
