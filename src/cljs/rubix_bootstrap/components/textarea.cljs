(ns rubix-bootstrap.components.textarea
  (:require [reagent.core :as r]
            [cljsjs.util :as util]))

(defn textarea [props]
  (let [this (r/current-component)]
    [:textarea
      (merge
        (r/props this)
        {:class (util/trim (str "form-control " (:className props)))
         :defaultValue (:children props)
         :children nil})]))
