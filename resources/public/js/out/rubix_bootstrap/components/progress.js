// Compiled by ClojureScript 0.0-3269 {}
goog.provide('rubix_bootstrap.components.progress');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljsjs.util');
rubix_bootstrap.components.progress.gen_classes_pg = (function rubix_bootstrap$components$progress$gen_classes_pg(props){
var collapse_bottom_QMARK_ = new cljs.core.Keyword(null,"collapseBottom","collapseBottom",-2079678199).cljs$core$IFn$_invoke$arity$1(props);
return [cljs.core.str("progress "),cljs.core.str((cljs.core.truth_(collapse_bottom_QMARK_)?"progress-collapse-bottom ":null))].join('');
});
rubix_bootstrap.components.progress.progress_group_construct = (function rubix_bootstrap$components$progress$progress_group_construct(){
var argseq__5347__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return rubix_bootstrap.components.progress.progress_group_construct.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5347__auto__);
});

rubix_bootstrap.components.progress.progress_group_construct.cljs$core$IFn$_invoke$arity$variadic = (function (props,p__14696){
var vec__14697 = p__14696;
var child = cljs.core.nth.call(null,vec__14697,(0),null);
var this$ = reagent.core.current_component.call(null);
var classes = rubix_bootstrap.components.progress.gen_classes_pg.call(null,props);
var rchildren = (function (){var or__4307__auto__ = child;
if(cljs.core.truth_(or__4307__auto__)){
return or__4307__auto__;
} else {
return new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(props);
}
})();
var background = new cljs.core.Keyword(null,"background","background",-863952629).cljs$core$IFn$_invoke$arity$1(props);
var children_count = (cljs.core.truth_(child)?(1):cljs.core.count.call(null,rchildren));
var props__$1 = cljsjs.util.deep_merge.call(null,reagent.core.props.call(null,this$),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),cljsjs.util.trim.call(null,[cljs.core.str(classes),cljs.core.str(" "),cljs.core.str(new cljs.core.Keyword(null,"className","className",-1983287057).cljs$core$IFn$_invoke$arity$1(props))].join('')),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),background], null)], null));
if(cljs.core._EQ_.call(null,(1),children_count)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),props__$1,rchildren], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),props__$1,cljsjs.util.map_children.call(null,((function (this$,classes,rchildren,background,children_count,props__$1,vec__14697,child){
return (function (i,c){
return React.cloneElement(c,{"stack": true, "key": i});
});})(this$,classes,rchildren,background,children_count,props__$1,vec__14697,child))
,rchildren)], null);
}
});

rubix_bootstrap.components.progress.progress_group_construct.cljs$lang$maxFixedArity = (1);

rubix_bootstrap.components.progress.progress_group_construct.cljs$lang$applyTo = (function (seq14694){
var G__14695 = cljs.core.first.call(null,seq14694);
var seq14694__$1 = cljs.core.next.call(null,seq14694);
return rubix_bootstrap.components.progress.progress_group_construct.cljs$core$IFn$_invoke$arity$variadic(G__14695,seq14694__$1);
});
rubix_bootstrap.components.progress.progress_group = (function rubix_bootstrap$components$progress$progress_group(props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rubix_bootstrap.components.progress.progress_group_construct,props], null);
});
rubix_bootstrap.components.progress.gen_classes = (function rubix_bootstrap$components$progress$gen_classes(props){
var active_QMARK_ = new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(props);
var info_QMARK_ = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(props);
var danger_QMARK_ = new cljs.core.Keyword(null,"danger","danger",-624338030).cljs$core$IFn$_invoke$arity$1(props);
var success_QMARK_ = new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(props);
var warning_QMARK_ = new cljs.core.Keyword(null,"warning","warning",-1685650671).cljs$core$IFn$_invoke$arity$1(props);
var striped_QMARK_ = new cljs.core.Keyword(null,"striped","striped",-628686784).cljs$core$IFn$_invoke$arity$1(props);
var collapse_bottom_QMARK_ = (function (){var and__4295__auto__ = new cljs.core.Keyword(null,"collapseBottom","collapseBottom",-2079678199).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(and__4295__auto__)){
return new cljs.core.Keyword(null,"stack","stack",-793405930).cljs$core$IFn$_invoke$arity$1(props);
} else {
return and__4295__auto__;
}
})();
return [cljs.core.str("progress-bar "),cljs.core.str((cljs.core.truth_(active_QMARK_)?"active ":null)),cljs.core.str((cljs.core.truth_(info_QMARK_)?"progress-bar-info ":null)),cljs.core.str((cljs.core.truth_(danger_QMARK_)?"progress-bar-danger ":null)),cljs.core.str((cljs.core.truth_(success_QMARK_)?"progress-bar-success ":null)),cljs.core.str((cljs.core.truth_(warning_QMARK_)?"progress-bar-warning ":null)),cljs.core.str((cljs.core.truth_(striped_QMARK_)?"progress-bar-striped ":null)),cljs.core.str((cljs.core.truth_(collapse_bottom_QMARK_)?"progress-collapse-bottom ":null))].join('');
});
rubix_bootstrap.components.progress.progress = (function rubix_bootstrap$components$progress$progress(props){
var this$ = reagent.core.current_component.call(null);
var classes = rubix_bootstrap.components.progress.gen_classes.call(null,props);
var info_QMARK_ = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(props);
var danger_QMARK_ = new cljs.core.Keyword(null,"danger","danger",-624338030).cljs$core$IFn$_invoke$arity$1(props);
var success_QMARK_ = new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(props);
var warning_QMARK_ = new cljs.core.Keyword(null,"warning","warning",-1685650671).cljs$core$IFn$_invoke$arity$1(props);
var suffix = [cljs.core.str(" ("),cljs.core.str((cljs.core.truth_(info_QMARK_)?"info":null)),cljs.core.str((cljs.core.truth_(danger_QMARK_)?"danger":null)),cljs.core.str((cljs.core.truth_(success_QMARK_)?"success":null)),cljs.core.str((cljs.core.truth_(warning_QMARK_)?"warning":null)),cljs.core.str(")")].join('');
var value = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(props);
var color = new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(props);
var min_value = new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(props);
var max_value = new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(props);
var is_stack_QMARK_ = new cljs.core.Keyword(null,"stack","stack",-793405930).cljs$core$IFn$_invoke$arity$1(props);
var fg_color = new cljs.core.Keyword(null,"fgColor","fgColor",-532889143).cljs$core$IFn$_invoke$arity$1(props);
var min_width = new cljs.core.Keyword(null,"minWidth","minWidth",-204293526).cljs$core$IFn$_invoke$arity$1(props);
var with_label = new cljs.core.Keyword(null,"withLabel","withLabel",1582486683).cljs$core$IFn$_invoke$arity$1(props);
var child = (cljs.core.truth_(with_label)?((cljs.core._EQ_.call(null,cljs.core.type.call(null,with_label),String))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),fg_color], null)], null),with_label], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),fg_color], null)], null),[cljs.core.str(value),cljs.core.str("%")].join('')], null)):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.sr-only","span.sr-only",2081743235),[cljs.core.str(value),cljs.core.str("% Complete"),cljs.core.str(suffix)].join('')], null));
if(cljs.core.truth_(is_stack_QMARK_)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljsjs.util.deep_merge.call(null,reagent.core.props.call(null,this$),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"class","class",-2030961996),cljsjs.util.trim.call(null,[cljs.core.str(classes),cljs.core.str(" "),cljs.core.str(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),props], null))].join('')),new cljs.core.Keyword(null,"role","role",-736691072),"progressbar",new cljs.core.Keyword(null,"aria-valuenow","aria-valuenow",-773142658),value,new cljs.core.Keyword(null,"aria-valuemin","aria-valuemin",138532158),min_value,new cljs.core.Keyword(null,"aria-valuemax","aria-valuemax",-1167670164),max_value,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str(value),cljs.core.str("%")].join(''),new cljs.core.Keyword(null,"background","background",-863952629),color,new cljs.core.Keyword(null,"min-width","min-width",1926193728),min_width], null)], null)),child], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rubix_bootstrap.components.progress.progress_group_construct,props,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"class","class",-2030961996),cljsjs.util.trim.call(null,classes),new cljs.core.Keyword(null,"role","role",-736691072),"progressbar",new cljs.core.Keyword(null,"aria-valuenow","aria-valuenow",-773142658),value,new cljs.core.Keyword(null,"aria-valuemin","aria-valuemin",138532158),min_value,new cljs.core.Keyword(null,"aria-valuemax","aria-valuemax",-1167670164),max_value,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str(value),cljs.core.str("%")].join(''),new cljs.core.Keyword(null,"background","background",-863952629),color,new cljs.core.Keyword(null,"min-width","min-width",1926193728),min_width], null)], null),child], null)], null);
}
});

//# sourceMappingURL=progress.js.map