// Compiled by ClojureScript 0.0-3269 {}
goog.provide('cljsjs.dispatcher');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljs.core.async');
if(typeof cljsjs.dispatcher.c !== 'undefined'){
} else {
cljsjs.dispatcher.c = cljs.core.async.chan.call(null);
}
if(typeof cljsjs.dispatcher.subscriptions !== 'undefined'){
} else {
cljsjs.dispatcher.subscriptions = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof cljsjs.dispatcher.publication !== 'undefined'){
} else {
cljsjs.dispatcher.publication = cljs.core.async.pub.call(null,cljsjs.dispatcher.c,(function (p1__11623_SHARP_){
return new cljs.core.Keyword(null,"topic","topic",-1960480691).cljs$core$IFn$_invoke$arity$1(p1__11623_SHARP_);
}));
}
cljsjs.dispatcher.notiy_fn = (function cljsjs$dispatcher$notiy_fn(channel,callback){
var c__6667__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6667__auto__){
return (function (){
var f__6668__auto__ = (function (){var switch__6605__auto__ = ((function (c__6667__auto__){
return (function (state_11652){
var state_val_11653 = (state_11652[(1)]);
if((state_val_11653 === (1))){
var state_11652__$1 = state_11652;
var statearr_11654_11664 = state_11652__$1;
(statearr_11654_11664[(2)] = null);

(statearr_11654_11664[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11653 === (2))){
var state_11652__$1 = state_11652;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11652__$1,(4),channel);
} else {
if((state_val_11653 === (3))){
var inst_11650 = (state_11652[(2)]);
var state_11652__$1 = state_11652;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11652__$1,inst_11650);
} else {
if((state_val_11653 === (4))){
var inst_11646 = (state_11652[(2)]);
var inst_11647 = callback.call(null,inst_11646);
var state_11652__$1 = (function (){var statearr_11655 = state_11652;
(statearr_11655[(7)] = inst_11647);

return statearr_11655;
})();
var statearr_11656_11665 = state_11652__$1;
(statearr_11656_11665[(2)] = null);

(statearr_11656_11665[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__6667__auto__))
;
return ((function (switch__6605__auto__,c__6667__auto__){
return (function() {
var cljsjs$dispatcher$notiy_fn_$_state_machine__6606__auto__ = null;
var cljsjs$dispatcher$notiy_fn_$_state_machine__6606__auto____0 = (function (){
var statearr_11660 = [null,null,null,null,null,null,null,null];
(statearr_11660[(0)] = cljsjs$dispatcher$notiy_fn_$_state_machine__6606__auto__);

(statearr_11660[(1)] = (1));

return statearr_11660;
});
var cljsjs$dispatcher$notiy_fn_$_state_machine__6606__auto____1 = (function (state_11652){
while(true){
var ret_value__6607__auto__ = (function (){try{while(true){
var result__6608__auto__ = switch__6605__auto__.call(null,state_11652);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6608__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6608__auto__;
}
break;
}
}catch (e11661){if((e11661 instanceof Object)){
var ex__6609__auto__ = e11661;
var statearr_11662_11666 = state_11652;
(statearr_11662_11666[(5)] = ex__6609__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11652);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11661;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11667 = state_11652;
state_11652 = G__11667;
continue;
} else {
return ret_value__6607__auto__;
}
break;
}
});
cljsjs$dispatcher$notiy_fn_$_state_machine__6606__auto__ = function(state_11652){
switch(arguments.length){
case 0:
return cljsjs$dispatcher$notiy_fn_$_state_machine__6606__auto____0.call(this);
case 1:
return cljsjs$dispatcher$notiy_fn_$_state_machine__6606__auto____1.call(this,state_11652);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljsjs$dispatcher$notiy_fn_$_state_machine__6606__auto__.cljs$core$IFn$_invoke$arity$0 = cljsjs$dispatcher$notiy_fn_$_state_machine__6606__auto____0;
cljsjs$dispatcher$notiy_fn_$_state_machine__6606__auto__.cljs$core$IFn$_invoke$arity$1 = cljsjs$dispatcher$notiy_fn_$_state_machine__6606__auto____1;
return cljsjs$dispatcher$notiy_fn_$_state_machine__6606__auto__;
})()
;})(switch__6605__auto__,c__6667__auto__))
})();
var state__6669__auto__ = (function (){var statearr_11663 = f__6668__auto__.call(null);
(statearr_11663[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6667__auto__);

return statearr_11663;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6669__auto__);
});})(c__6667__auto__))
);

return c__6667__auto__;
});
cljsjs.dispatcher.subscribe = (function cljsjs$dispatcher$subscribe(topic,callback){
var subscription = cljs.core.async.chan.call(null);
cljs.core.async.sub.call(null,cljsjs.dispatcher.publication,topic,subscription);

cljs.core.swap_BANG_.call(null,cljsjs.dispatcher.subscriptions,cljs.core.assoc,topic,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"subscription","subscription",1949009182),subscription], null));

return cljsjs.dispatcher.notiy_fn.call(null,subscription,callback);
});
cljsjs.dispatcher.unsubscribe = (function cljsjs$dispatcher$unsubscribe(topic){
var subscription_cursor = reagent.core.cursor.call(null,cljsjs.dispatcher.subscriptions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [topic], null));
var subscription = new cljs.core.Keyword(null,"subscription","subscription",1949009182).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,subscription_cursor));
cljs.core.async.unsub.call(null,cljsjs.dispatcher.publication,topic,subscription);

return cljs.core.swap_BANG_.call(null,cljsjs.dispatcher.subscriptions,cljs.core.dissoc,topic);
});
cljsjs.dispatcher.publish = (function cljsjs$dispatcher$publish(){
var argseq__5347__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return cljsjs.dispatcher.publish.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5347__auto__);
});

cljsjs.dispatcher.publish.cljs$core$IFn$_invoke$arity$variadic = (function (topic,p__11670){
var vec__11671 = p__11670;
var data = cljs.core.nth.call(null,vec__11671,(0),null);
var c__6667__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6667__auto__,vec__11671,data){
return (function (){
var f__6668__auto__ = (function (){var switch__6605__auto__ = ((function (c__6667__auto__,vec__11671,data){
return (function (state_11678){
var state_val_11679 = (state_11678[(1)]);
if((state_val_11679 === (1))){
var inst_11672 = [new cljs.core.Keyword(null,"topic","topic",-1960480691),new cljs.core.Keyword(null,"data","data",-232669377)];
var inst_11673 = [topic,data];
var inst_11674 = cljs.core.PersistentHashMap.fromArrays(inst_11672,inst_11673);
var state_11678__$1 = state_11678;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11678__$1,(2),cljsjs.dispatcher.c,inst_11674);
} else {
if((state_val_11679 === (2))){
var inst_11676 = (state_11678[(2)]);
var state_11678__$1 = state_11678;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11678__$1,inst_11676);
} else {
return null;
}
}
});})(c__6667__auto__,vec__11671,data))
;
return ((function (switch__6605__auto__,c__6667__auto__,vec__11671,data){
return (function() {
var cljsjs$dispatcher$state_machine__6606__auto__ = null;
var cljsjs$dispatcher$state_machine__6606__auto____0 = (function (){
var statearr_11683 = [null,null,null,null,null,null,null];
(statearr_11683[(0)] = cljsjs$dispatcher$state_machine__6606__auto__);

(statearr_11683[(1)] = (1));

return statearr_11683;
});
var cljsjs$dispatcher$state_machine__6606__auto____1 = (function (state_11678){
while(true){
var ret_value__6607__auto__ = (function (){try{while(true){
var result__6608__auto__ = switch__6605__auto__.call(null,state_11678);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6608__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6608__auto__;
}
break;
}
}catch (e11684){if((e11684 instanceof Object)){
var ex__6609__auto__ = e11684;
var statearr_11685_11687 = state_11678;
(statearr_11685_11687[(5)] = ex__6609__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11678);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11684;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11688 = state_11678;
state_11678 = G__11688;
continue;
} else {
return ret_value__6607__auto__;
}
break;
}
});
cljsjs$dispatcher$state_machine__6606__auto__ = function(state_11678){
switch(arguments.length){
case 0:
return cljsjs$dispatcher$state_machine__6606__auto____0.call(this);
case 1:
return cljsjs$dispatcher$state_machine__6606__auto____1.call(this,state_11678);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljsjs$dispatcher$state_machine__6606__auto__.cljs$core$IFn$_invoke$arity$0 = cljsjs$dispatcher$state_machine__6606__auto____0;
cljsjs$dispatcher$state_machine__6606__auto__.cljs$core$IFn$_invoke$arity$1 = cljsjs$dispatcher$state_machine__6606__auto____1;
return cljsjs$dispatcher$state_machine__6606__auto__;
})()
;})(switch__6605__auto__,c__6667__auto__,vec__11671,data))
})();
var state__6669__auto__ = (function (){var statearr_11686 = f__6668__auto__.call(null);
(statearr_11686[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6667__auto__);

return statearr_11686;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6669__auto__);
});})(c__6667__auto__,vec__11671,data))
);

return c__6667__auto__;
});

cljsjs.dispatcher.publish.cljs$lang$maxFixedArity = (1);

cljsjs.dispatcher.publish.cljs$lang$applyTo = (function (seq11668){
var G__11669 = cljs.core.first.call(null,seq11668);
var seq11668__$1 = cljs.core.next.call(null,seq11668);
return cljsjs.dispatcher.publish.cljs$core$IFn$_invoke$arity$variadic(G__11669,seq11668__$1);
});

//# sourceMappingURL=dispatcher.js.map