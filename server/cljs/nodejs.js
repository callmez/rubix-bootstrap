// Compiled by ClojureScript 0.0-3269 {:target :nodejs}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__6379__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__6379 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6380__i = 0, G__6380__a = new Array(arguments.length -  0);
while (G__6380__i < G__6380__a.length) {G__6380__a[G__6380__i] = arguments[G__6380__i + 0]; ++G__6380__i;}
  args = new cljs.core.IndexedSeq(G__6380__a,0);
} 
return G__6379__delegate.call(this,args);};
G__6379.cljs$lang$maxFixedArity = 0;
G__6379.cljs$lang$applyTo = (function (arglist__6381){
var args = cljs.core.seq(arglist__6381);
return G__6379__delegate(args);
});
G__6379.cljs$core$IFn$_invoke$arity$variadic = G__6379__delegate;
return G__6379;
})()
;
});

//# sourceMappingURL=nodejs.js.map?rel=1433588512628