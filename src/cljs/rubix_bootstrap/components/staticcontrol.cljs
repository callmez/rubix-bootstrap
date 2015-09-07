(ns rubix-bootstrap.components.staticcontrol
  (:require [reagent.core :as r]
            [cljsjs.util :as util]))

(defn staticcontrol [props]
  (let [this (r/current-component)]
    [:p
      (merge
        (r/props this)
        {:class (util/trim (str "form-control-static " (:className props)))})
      (:children props)]))
