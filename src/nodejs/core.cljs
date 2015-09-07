(ns nodejs.core
  (:require [cljs.nodejs :as node]
            [cljs.reader :refer [read-string]]))

; modules
; -------
(defonce fs (node/require "fs"))
(defonce express (node/require "express"))

; app
; ---
(defonce app (express))

; static routes
; -------------
(defonce app-html (.toString (.readFileSync fs "./resources/public/index.html")))
(.use app (.static express "./resources/public"))

(.get app "*" (fn [req res]
  (.send res app-html)))

; main
; ----
(defn -main [& args]
  (.listen app 5000))

(set! *main-cli-fn* -main)
