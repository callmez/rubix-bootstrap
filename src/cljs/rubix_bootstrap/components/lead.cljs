(ns rubix-bootstrap.components.lead
  (:require [reagent.core :as r]
            [cljsjs.util :as util]))

(defn lead [props]
  (let [this (r/current-component)]
    [:p
      (merge
        (r/props this)
        {:class (util/trim (str "lead " (:className props)))})
      (:children props)]))
