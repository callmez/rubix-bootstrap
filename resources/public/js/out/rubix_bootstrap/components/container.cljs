(ns rubix-bootstrap.components.container
  (:require [reagent.core :as r]
            [cljsjs.util :as util]))

(defn- gen-classes [props]
  (let [fixed? (:fixed props)
        fluid? (:fluid props)]
    (str (when fixed?
           "container ")
         (when fluid?
           "container-fluid "))))

(defn container [props]
  (let [this (r/current-component)]
    [:div
      (merge
        (r/props this)
        {:class (util/trim (str (gen-classes props) " " (:className props)))})
      (:children props)]))
