(ns rubix-bootstrap.components.inputgroup
  (:require [reagent.core :as r]
            [cljsjs.util :as util]))

(defn- gen-classes-ig [props]
  (let [sm? (:sm props)
        lg? (:lg props)]
    (str "input-group "
         (when sm?
           "input-group-sm ")
         (when lg?
           "input-group-lg "))))

(defn- gen-classes [props]
  (let [dropdown? (:dropdown props)
        dropup? (:dropup props)]
    (str "input-group-btn "
         (when dropdown?
           "dropdown ")
         (when dropup?
           "dropup "))))

(defn inputgroup [props]
  (let [this (r/current-component)
        classes (gen-classes-ig props)]
    [:div
      (merge
        (r/props this)
        {:class (util/trim (str classes " " (:className props)))})
      (:children props)]))

(defn inputgroupaddon [props]
  (let [this (r/current-component)]
    [:div
     (merge
       (r/props this)
       {:class (util/trim (str "input-group-addon " (:className props)))})
     (:children props)]))

(defn inputgroupbutton [props]
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
             #js {:dropdown id ; used if input-group-button wraps a menu
                  :toggleOnHover (:toggleOnHover props)
                  :onDropdownSetSelectItem on-set-select-item ; ditto ^
                  :key i})) (:children props))]))
