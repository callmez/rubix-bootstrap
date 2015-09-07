(ns rubix-bootstrap.components.select
  (:require [reagent.core :as r]
            [cljsjs.util :as util]))

(defn- gen-classes [props]
  (let [sm? (:sm props)
        lg? (:lg props)]
    (str "form-control "
         (when sm? "input-sm ")
         (when lg? "input-lg "))))

(defn select [props]
  (let [this (r/current-component)
        classes (gen-classes props)]
    [:select
      (merge
        (r/props this)
        {:class (util/trim (str classes " " (:className props)))})
      (:children props)]))
