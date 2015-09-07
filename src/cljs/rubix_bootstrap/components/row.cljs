(ns rubix-bootstrap.components.row
  (:require [reagent.core :as r]
            [cljsjs.util :as util]))

(defn row [props]
  (util/debug "row")
  (let [this (r/current-component)]
    [:div
      (util/deep-merge
        (r/props this)
        {:class (util/trim (str "row " (:className props)))})
      (:children props)]))
