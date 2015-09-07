(defproject rubix-bootstrap "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :source-paths ["src/clj" "src/cljs"]

  :dependencies [[org.clojure/clojure "1.7.0-beta3"]
                 [reagent "0.5.0" :exclusions [cljsjs/react]]
                 [reagent-forms "0.4.9"]
                 [reagent-utils "0.1.4"]
                 [org.clojure/clojurescript "0.0-3269" :scope "provided"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]]

  :node-dependencies [[execSync "1.0.2"]
                      [express "4.12.3"]
                      [mdi "1.0.62-beta"]
                      [chokidar "1.0.1"]
                      [node-sass "2.1.1"]
                      [autoprefixer-core "5.1.11"]
                      [node-uuid "1.4.3"]]

  :plugins [[lein-cljsbuild "1.0.5"]
            [lein-environ "1.0.0"]
            [lein-ring "0.9.1"]
            [lein-asset-minifier "0.2.2"]
            [lein-npm "0.5.0"]]

  :ring {:handler rubix-bootstrap.handler/app
         :uberwar-name "rubix-bootstrap.war"}

  :min-lein-version "2.5.0"

  :uberjar-name "rubix-bootstrap.jar"

  :main rubix-bootstrap.server

  :clean-targets ^{:protect true} ["resources/public/js"]

  :minify-assets
  {:assets
    {"resources/public/css/site.min.css" "resources/public/css/site.css"}}

  :cljsbuild {:builds {:app {:source-paths ["src/cljs"]
                             :compiler {:output-to     "resources/public/js/app.js"
                                        :output-dir    "resources/public/js/out"
                                        :asset-path   "/js/out"
                                        :libs ["src/js"]
                                        :language-in   :ecmascript5
                                        :optimizations :none
                                        :pretty-print  true}}}}

  :profiles {:dev {:repl-options {:init-ns rubix-bootstrap.repl
                                  :nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}

                   :dependencies [[leiningen "2.5.1"]
                                  [weasel "0.6.0"]
                                  [com.cemerick/piggieback "0.2.0"]
                                  [org.clojure/tools.nrepl "0.2.10"]]

                   :source-paths ["env/dev/clj"]

                   :env {:dev? true}

                   :cljsbuild {:builds {:app {:source-paths ["env/dev/cljs"]
                                              :compiler {:main "rubix-bootstrap.dev"
                                                         :source-map true}}}}}

             :development {:cljsbuild {:builds {:prod {:source-paths ["src/cljs"]
                                                :compiler {:output-to "resources/public/js/app.js"
                                                           :asset-path "/js/out"
                                                           :libs ["src/js"]
                                                           :optimizations :none
                                                           :source-map true
                                                           :pretty-print false}}}}}

             :prod {:cljsbuild {:builds {:prod {:source-paths ["src/cljs"]
                                                :compiler {:output-to "resources/public/js/app.min.js"
                                                           :asset-path "/js/out"
                                                           :libs ["src/js"]
                                                           :externs ["externs/uuid.js",
                                                                     "externs/react.js"]
                                                           :optimizations :advanced
                                                           :language-in   :ecmascript5
                                                           :pretty-print false}}}}}

             :nodejs {:cljsbuild {:builds {:nodejs {:source-paths ["./src/nodejs"]
                                                    :compiler {:output-to "./server/rubix-bootstrap.js"
                                                               :output-dir "./server"
                                                               :main nodejs.core
                                                               :target :nodejs
                                                               :optimizations :none
                                                               :language-in   :ecmascript5
                                                               :cache-analysis false
                                                               :source-map true
                                                               :source-map-timestamp true
                                                               :pretty-print true}}}}}
             })
