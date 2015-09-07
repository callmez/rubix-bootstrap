(ns rubix-bootstrap.components.jumbotron
  (:require [reagent.core :as r]
            [cljsjs.util :as util]))

(defn jumbotron [props]
  (let [this (r/current-component)]
    [:div
      (merge
        (r/props this)
        {:class (util/trim (str "jumbotron " (:className props)))})
      (:children props)]))
