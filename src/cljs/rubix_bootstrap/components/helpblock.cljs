(ns rubix-bootstrap.components.helpblock
  (:require [reagent.core :as r]
            [cljsjs.util :as util]))

(defn helpblock [props]
  (let [this (r/current-component)]
    [:p
      (merge
        (r/props this)
        {:class (util/trim (str "help-block " (:className props)))})
      (:children props)]))
