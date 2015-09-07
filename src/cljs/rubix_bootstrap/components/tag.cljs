(ns rubix-bootstrap.components.tag
  (:require [reagent.core :as r]
            [cljsjs.util :as util]))

(defn tag [props]
  (let [this (r/current-component)
        href (or (:href props) "#")
        color (or (:color props) "darkgreen45")]
    [:a
      (merge
        (r/props this)
        {:href href
         :color color
         :class (util/trim
                  (str "left-tag "
                     "border-hover-" color
                     " "
                     "bg-hover-" color
                     " "
                     "fg-hover-white bg-lightgray50 "
                     "border-lightgray50 fg-text "
                     (:className props)))})
      (:children props)]))
