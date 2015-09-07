(ns rubix-bootstrap.components.buttontoolbar
  (:require [reagent.core :as r]
            [cljsjs.util :as util]))

(defn button-toolbar [props]
  (let [this (r/current-component)]
    [:div
      (merge
        (r/props this)
        {:role "toolbar"
         :class (util/trim (str "btn-toolbar " (:className props)))})
      (:children props)]))
