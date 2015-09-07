(ns rubix-bootstrap.components.icon
  (:require [reagent.core :as r]
            [cljsjs.util :as util]))

(defn- gen-classes [props]
  (let [feedback? (:feedback props)
        bundle? (:bundle props)
        glyph? (:glyph props)]
    (str "rubix-icon "
         (when feedback?
           "form-control-feedback ")
         (if bundle?
           (str bundle? " "
                "icon-" bundle? "-" glyph?)
           glyph?))))

(defn icon [props]
  (let [this (r/current-component)
        classes (gen-classes props)]
    [:span
      (merge
        (r/props this)
        {:class (util/trim (str classes " " (:className props)))})]))
