(ns rubix-bootstrap.components.formgroup
  (:require [reagent.core :as r]
            [cljsjs.util :as util]))

(defn- gen-classes [props]
  (let [sm? (:sm props)
        lg? (:lg props)
        error? (:error props)
        success? (:success props)
        warning? (:warning props)
        feedback? (:feedback props)]
    (str "form-group "
         (when sm?
           "form-group-sm ")
         (when lg?
           "form-group-lg ")
         (when error?
           "has-error ")
         (when success?
           "has-success ")
         (when warning?
           "has-warning ")
         (when feedback?
           "feedback "))))

(defn formgroup [props]
  (let [this (r/current-component)
        classes (gen-classes props)]
    [:div
      (merge
        (r/props this)
        {:class (util/trim (str classes " " (:className props)))})
      (:children props)]))
