(ns rubix-bootstrap.components.grid
  (:require [reagent.core :as r]
            [clojure.string :as s]
            [cljsjs.util :as util]))

(defonce zIndex (r/atom 9999999))

(defn reset-globals! []
  (reset! zIndex 9999999))

(defn- getZIndex []
  (swap! zIndex dec))

(defn- construct-class [k props]
  (if (k props)
    (str "grid-gutter-"
         (.toLowerCase
           (s/replace (name k) #"gutter" ""))
         " ")
    ""))

(defn- gen-classes [props]
  (let [fixed? (:fixed props)
        fluid? (not fixed?)
        gutter? (:gutter props)
        collapse? (:collapse props)
        gutter-top? (construct-class :gutterTop props)
        gutter-left? (construct-class :gutterLeft props)
        gutter-right? (construct-class :gutterRight props)
        gutter-bottom? (construct-class :gutterBottom props)]
    (str "rubix-grid "
         (when fixed?
           "container ")
         (when fluid?
           "container-fluid ")
         (when gutter?
           "grid-gutter ")
         (when collapse?
           "grid-collapse ")
         gutter-top? gutter-left?
         gutter-right? gutter-bottom?)))

(defn grid [props]
  (util/debug "grid")
  (let [this (r/current-component)
        classes (gen-classes props)]
    [:div
      (util/deep-merge
        (r/props this)
        {:class (util/trim (str classes " " (:className props)))
         :style (merge
                  (js->clj (:style props))
                  {:zIndex (getZIndex)})})
      (:children props)]))
