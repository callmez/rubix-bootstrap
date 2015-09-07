// Compiled by ClojureScript 0.0-3269 {:static-fns true, :optimize-constants true}
goog.provide('cljsjs.dispatcher');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljs.core.async');
if(typeof cljsjs.dispatcher.c !== 'undefined'){
} else {
cljsjs.dispatcher.c = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
}
if(typeof cljsjs.dispatcher.subscriptions !== 'undefined'){
} else {
cljsjs.dispatcher.subscriptions = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof cljsjs.dispatcher.publication !== 'undefined'){
} else {
cljsjs.dispatcher.publication = cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2(cljsjs.dispatcher.c,(function (p1__13907_SHARP_){
return cljs.core.constant$keyword$topic.cljs$core$IFn$_invoke$arity$1(p1__13907_SHARP_);
}));
}
cljsjs.dispatcher.notiy_fn = (function cljsjs$dispatcher$notiy_fn(channel,callback){
var c__11604__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11604__auto__){
return (function (){
var f__11605__auto__ = (function (){var switch__11526__auto__ = ((function (c__11604__auto__){
return (function (state_13937){
var state_val_13938 = (state_13937[(1)]);
if((state_val_13938 === (1))){
var state_13937__$1 = state_13937;
var statearr_13939_13950 = state_13937__$1;
(statearr_13939_13950[(2)] = null);

(statearr_13939_13950[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_13938 === (2))){
var state_13937__$1 = state_13937;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13937__$1,(4),channel);
} else {
if((state_val_13938 === (3))){
var inst_13935 = (state_13937[(2)]);
var state_13937__$1 = state_13937;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13937__$1,inst_13935);
} else {
if((state_val_13938 === (4))){
var inst_13931 = (state_13937[(2)]);
var inst_13932 = (function (){var G__13940 = inst_13931;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__13940) : callback.call(null,G__13940));
})();
var state_13937__$1 = (function (){var statearr_13941 = state_13937;
(statearr_13941[(7)] = inst_13932);

return statearr_13941;
})();
var statearr_13942_13951 = state_13937__$1;
(statearr_13942_13951[(2)] = null);

(statearr_13942_13951[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
return null;
}
}
}
}
});})(c__11604__auto__))
;
return ((function (switch__11526__auto__,c__11604__auto__){
return (function() {
var cljsjs$dispatcher$notiy_fn_$_state_machine__11527__auto__ = null;
var cljsjs$dispatcher$notiy_fn_$_state_machine__11527__auto____0 = (function (){
var statearr_13946 = [null,null,null,null,null,null,null,null];
(statearr_13946[(0)] = cljsjs$dispatcher$notiy_fn_$_state_machine__11527__auto__);

(statearr_13946[(1)] = (1));

return statearr_13946;
});
var cljsjs$dispatcher$notiy_fn_$_state_machine__11527__auto____1 = (function (state_13937){
while(true){
var ret_value__11528__auto__ = (function (){try{while(true){
var result__11529__auto__ = switch__11526__auto__(state_13937);
if(cljs.core.keyword_identical_QMARK_(result__11529__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__11529__auto__;
}
break;
}
}catch (e13947){if((e13947 instanceof Object)){
var ex__11530__auto__ = e13947;
var statearr_13948_13952 = state_13937;
(statearr_13948_13952[(5)] = ex__11530__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13937);

return cljs.core.constant$keyword$recur;
} else {
throw e13947;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11528__auto__,cljs.core.constant$keyword$recur)){
var G__13953 = state_13937;
state_13937 = G__13953;
continue;
} else {
return ret_value__11528__auto__;
}
break;
}
});
cljsjs$dispatcher$notiy_fn_$_state_machine__11527__auto__ = function(state_13937){
switch(arguments.length){
case 0:
return cljsjs$dispatcher$notiy_fn_$_state_machine__11527__auto____0.call(this);
case 1:
return cljsjs$dispatcher$notiy_fn_$_state_machine__11527__auto____1.call(this,state_13937);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljsjs$dispatcher$notiy_fn_$_state_machine__11527__auto__.cljs$core$IFn$_invoke$arity$0 = cljsjs$dispatcher$notiy_fn_$_state_machine__11527__auto____0;
cljsjs$dispatcher$notiy_fn_$_state_machine__11527__auto__.cljs$core$IFn$_invoke$arity$1 = cljsjs$dispatcher$notiy_fn_$_state_machine__11527__auto____1;
return cljsjs$dispatcher$notiy_fn_$_state_machine__11527__auto__;
})()
;})(switch__11526__auto__,c__11604__auto__))
})();
var state__11606__auto__ = (function (){var statearr_13949 = (function (){return (f__11605__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11605__auto__.cljs$core$IFn$_invoke$arity$0() : f__11605__auto__.call(null));
})();
(statearr_13949[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11604__auto__);

return statearr_13949;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11606__auto__);
});})(c__11604__auto__))
);

return c__11604__auto__;
});
cljsjs.dispatcher.subscribe = (function cljsjs$dispatcher$subscribe(topic,callback){
var subscription = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3(cljsjs.dispatcher.publication,topic,subscription);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljsjs.dispatcher.subscriptions,cljs.core.assoc,topic,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$subscription,subscription], null));

return cljsjs.dispatcher.notiy_fn(subscription,callback);
});
cljsjs.dispatcher.unsubscribe = (function cljsjs$dispatcher$unsubscribe(topic){
var subscription_cursor = reagent.core.cursor(cljsjs.dispatcher.subscriptions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [topic], null));
var subscription = cljs.core.constant$keyword$subscription.cljs$core$IFn$_invoke$arity$1((function (){var G__13955 = subscription_cursor;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__13955) : cljs.core.deref.call(null,G__13955));
})());
cljs.core.async.unsub(cljsjs.dispatcher.publication,topic,subscription);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljsjs.dispatcher.subscriptions,cljs.core.dissoc,topic);
});
cljsjs.dispatcher.publish = (function cljsjs$dispatcher$publish(){
var argseq__5347__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return cljsjs.dispatcher.publish.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5347__auto__);
});

cljsjs.dispatcher.publish.cljs$core$IFn$_invoke$arity$variadic = (function (topic,p__13958){
var vec__13959 = p__13958;
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13959,(0),null);
var c__11604__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11604__auto__,vec__13959,data){
return (function (){
var f__11605__auto__ = (function (){var switch__11526__auto__ = ((function (c__11604__auto__,vec__13959,data){
return (function (state_13966){
var state_val_13967 = (state_13966[(1)]);
if((state_val_13967 === (1))){
var inst_13960 = [cljs.core.constant$keyword$topic,cljs.core.constant$keyword$data];
var inst_13961 = [topic,data];
var inst_13962 = cljs.core.PersistentHashMap.fromArrays(inst_13960,inst_13961);
var state_13966__$1 = state_13966;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13966__$1,(2),cljsjs.dispatcher.c,inst_13962);
} else {
if((state_val_13967 === (2))){
var inst_13964 = (state_13966[(2)]);
var state_13966__$1 = state_13966;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13966__$1,inst_13964);
} else {
return null;
}
}
});})(c__11604__auto__,vec__13959,data))
;
return ((function (switch__11526__auto__,c__11604__auto__,vec__13959,data){
return (function() {
var cljsjs$dispatcher$state_machine__11527__auto__ = null;
var cljsjs$dispatcher$state_machine__11527__auto____0 = (function (){
var statearr_13971 = [null,null,null,null,null,null,null];
(statearr_13971[(0)] = cljsjs$dispatcher$state_machine__11527__auto__);

(statearr_13971[(1)] = (1));

return statearr_13971;
});
var cljsjs$dispatcher$state_machine__11527__auto____1 = (function (state_13966){
while(true){
var ret_value__11528__auto__ = (function (){try{while(true){
var result__11529__auto__ = switch__11526__auto__(state_13966);
if(cljs.core.keyword_identical_QMARK_(result__11529__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__11529__auto__;
}
break;
}
}catch (e13972){if((e13972 instanceof Object)){
var ex__11530__auto__ = e13972;
var statearr_13973_13975 = state_13966;
(statearr_13973_13975[(5)] = ex__11530__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13966);

return cljs.core.constant$keyword$recur;
} else {
throw e13972;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11528__auto__,cljs.core.constant$keyword$recur)){
var G__13976 = state_13966;
state_13966 = G__13976;
continue;
} else {
return ret_value__11528__auto__;
}
break;
}
});
cljsjs$dispatcher$state_machine__11527__auto__ = function(state_13966){
switch(arguments.length){
case 0:
return cljsjs$dispatcher$state_machine__11527__auto____0.call(this);
case 1:
return cljsjs$dispatcher$state_machine__11527__auto____1.call(this,state_13966);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljsjs$dispatcher$state_machine__11527__auto__.cljs$core$IFn$_invoke$arity$0 = cljsjs$dispatcher$state_machine__11527__auto____0;
cljsjs$dispatcher$state_machine__11527__auto__.cljs$core$IFn$_invoke$arity$1 = cljsjs$dispatcher$state_machine__11527__auto____1;
return cljsjs$dispatcher$state_machine__11527__auto__;
})()
;})(switch__11526__auto__,c__11604__auto__,vec__13959,data))
})();
var state__11606__auto__ = (function (){var statearr_13974 = (function (){return (f__11605__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11605__auto__.cljs$core$IFn$_invoke$arity$0() : f__11605__auto__.call(null));
})();
(statearr_13974[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11604__auto__);

return statearr_13974;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11606__auto__);
});})(c__11604__auto__,vec__13959,data))
);

return c__11604__auto__;
});

cljsjs.dispatcher.publish.cljs$lang$maxFixedArity = (1);

cljsjs.dispatcher.publish.cljs$lang$applyTo = (function (seq13956){
var G__13957 = cljs.core.first(seq13956);
var seq13956__$1 = cljs.core.next(seq13956);
return cljsjs.dispatcher.publish.cljs$core$IFn$_invoke$arity$variadic(G__13957,seq13956__$1);
});
