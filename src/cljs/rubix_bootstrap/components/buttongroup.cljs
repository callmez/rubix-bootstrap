(ns rubix-bootstrap.components.buttongroup
  (:require [reagent.core :as r]
            [cljsjs.util :as util]))

(defn gen-classes [props]
  (let [is-vertical? (:vertical props)
        btn-group? (not is-vertical?)
        lg? (:lg props)
        sm? (:sm props)
        xs? (:xs props)
        justified? (:justified props)
        dropdown? (:dropdown props)
        dropup? (:dropup props)]
    (str (when btn-group?
           " btn-group ")
         (when is-vertical?
           " btn-group-vertical ")
         (when lg?
           " btn-group-lg ")
         (when sm?
           " btn-group-sm ")
         (when xs?
           " btn-group-xs ")
         (when justified?
           " btn-group-justified ")
         (when dropup?
           " dropup ")
         (when dropdown?
           " dropdown "))))

(defn button-group [props]
  (let [this (r/current-component)
        classes (gen-classes props)
        id (util/get-id this props)
        on-set-select-item (:onSetSelectItem props)]
     [:div
       (merge
         (r/props this)
         {:class (util/trim (str classes " " (:className props)))})
       (util/map-children
         (fn [i c]
           (.cloneElement
             js/React
             c
             #js {:dropdown id ; used if button-group wraps a menu
                  :toggleOnHover (:toggleOnHover props)
                  :onDropdownSetSelectItem on-set-select-item ; ditto ^
                  :key i})) (:children props))]))
