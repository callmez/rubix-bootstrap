// Compiled by ClojureScript 0.0-3269 {:target :nodejs}
goog.provide('nodejs.core');
goog.require('cljs.core');
goog.require('cljs.nodejs');
goog.require('cljs.reader');
if(typeof nodejs.core.fs !== 'undefined'){
} else {
nodejs.core.fs = cljs.nodejs.require.call(null,"fs");
}
if(typeof nodejs.core.express !== 'undefined'){
} else {
nodejs.core.express = cljs.nodejs.require.call(null,"express");
}
if(typeof nodejs.core.app !== 'undefined'){
} else {
nodejs.core.app = nodejs.core.express.call(null);
}
if(typeof nodejs.core.app_html !== 'undefined'){
} else {
nodejs.core.app_html = nodejs.core.fs.readFileSync("./resources/public/index.html").toString();
}
nodejs.core.app.use(nodejs.core.express.static("./resources/public"));
nodejs.core.app.get("*",(function (req,res){
return res.send(nodejs.core.app_html);
}));
nodejs.core._main = (function nodejs$core$_main(){
var argseq__5347__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return nodejs.core._main.cljs$core$IFn$_invoke$arity$variadic(argseq__5347__auto__);
});

nodejs.core._main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return nodejs.core.app.listen((5000));
});

nodejs.core._main.cljs$lang$maxFixedArity = (0);

nodejs.core._main.cljs$lang$applyTo = (function (seq6371){
return nodejs.core._main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq6371));
});
cljs.core._STAR_main_cli_fn_STAR_ = nodejs.core._main;

//# sourceMappingURL=core.js.map?rel=1433588512558