// Compiled by ClojureScript 0.0-3269 {}
goog.provide('rubix_bootstrap.components.buttongroup');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljsjs.util');
rubix_bootstrap.components.buttongroup.gen_classes = (function rubix_bootstrap$components$buttongroup$gen_classes(props){
var is_vertical_QMARK_ = new cljs.core.Keyword(null,"vertical","vertical",718696748).cljs$core$IFn$_invoke$arity$1(props);
var btn_group_QMARK_ = cljs.core.not.call(null,is_vertical_QMARK_);
var lg_QMARK_ = new cljs.core.Keyword(null,"lg","lg",-80787836).cljs$core$IFn$_invoke$arity$1(props);
var sm_QMARK_ = new cljs.core.Keyword(null,"sm","sm",-1402575065).cljs$core$IFn$_invoke$arity$1(props);
var xs_QMARK_ = new cljs.core.Keyword(null,"xs","xs",649443341).cljs$core$IFn$_invoke$arity$1(props);
var justified_QMARK_ = new cljs.core.Keyword(null,"justified","justified",-547284074).cljs$core$IFn$_invoke$arity$1(props);
var dropdown_QMARK_ = new cljs.core.Keyword(null,"dropdown","dropdown",1343185805).cljs$core$IFn$_invoke$arity$1(props);
var dropup_QMARK_ = new cljs.core.Keyword(null,"dropup","dropup",-1031053231).cljs$core$IFn$_invoke$arity$1(props);
return [cljs.core.str(((btn_group_QMARK_)?" btn-group ":null)),cljs.core.str((cljs.core.truth_(is_vertical_QMARK_)?" btn-group-vertical ":null)),cljs.core.str((cljs.core.truth_(lg_QMARK_)?" btn-group-lg ":null)),cljs.core.str((cljs.core.truth_(sm_QMARK_)?" btn-group-sm ":null)),cljs.core.str((cljs.core.truth_(xs_QMARK_)?" btn-group-xs ":null)),cljs.core.str((cljs.core.truth_(justified_QMARK_)?" btn-group-justified ":null)),cljs.core.str((cljs.core.truth_(dropup_QMARK_)?" dropup ":null)),cljs.core.str((cljs.core.truth_(dropdown_QMARK_)?" dropdown ":null))].join('');
});
rubix_bootstrap.components.buttongroup.button_group = (function rubix_bootstrap$components$buttongroup$button_group(props){
var this$ = reagent.core.current_component.call(null);
var classes = rubix_bootstrap.components.buttongroup.gen_classes.call(null,props);
var id = cljsjs.util.get_id.call(null,this$,props);
var on_set_select_item = new cljs.core.Keyword(null,"onSetSelectItem","onSetSelectItem",1129790476).cljs$core$IFn$_invoke$arity$1(props);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.call(null,reagent.core.props.call(null,this$),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),cljsjs.util.trim.call(null,[cljs.core.str(classes),cljs.core.str(" "),cljs.core.str(new cljs.core.Keyword(null,"className","className",-1983287057).cljs$core$IFn$_invoke$arity$1(props))].join(''))], null)),cljsjs.util.map_children.call(null,((function (this$,classes,id,on_set_select_item){
return (function (i,c){
return React.cloneElement(c,{"dropdown": id, "toggleOnHover": new cljs.core.Keyword(null,"toggleOnHover","toggleOnHover",1782310243).cljs$core$IFn$_invoke$arity$1(props), "onDropdownSetSelectItem": on_set_select_item, "key": i});
});})(this$,classes,id,on_set_select_item))
,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(props))], null);
});

//# sourceMappingURL=buttongroup.js.map