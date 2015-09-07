(ns rubix-bootstrap.components.label
  (:require [reagent.core :as r]
            [cljsjs.util :as util]
            [rubix-bootstrap.components.col :as col]))

(defn- gen-classes [props]
  (let [inline? (:inline props)
        control? (:control props)]
    (str (when inline?
           "inline ")
         (when control?
           "control-label "))))

(defn label [props]
  (let [this (r/current-component)
        classes (gen-classes props)
        classes (str classes (col/gen-classes props))]
    [:label
      (merge
        (r/props this)
        {:class (util/trim (str classes " " (:className props)))})
      (:children props)]))
