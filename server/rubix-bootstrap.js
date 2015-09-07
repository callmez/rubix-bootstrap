var path = require("path");
try {
    require("source-map-support").install();
} catch(err) {
}
require(path.join(path.resolve("."),"./server","goog","bootstrap","nodejs.js"));
require(path.join(path.resolve("."),"./server","cljs_deps.js"));
goog.require("nodejs.core");
goog.require("cljs.nodejscli");
