(ns rubix-bootstrap.components.caret
  (:require [reagent.core :as r]
            [cljsjs.util :as util]))

(defn caret [props]
  (let [this (r/current-component)]
    [:span
      (merge
        (r/props this)
        {:class (util/trim (str "caret " (:className props)))})]))
