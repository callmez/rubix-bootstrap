(ns rubix-bootstrap.components.labelsandbadges
  (:require [reagent.core :as r]
            [cljsjs.util :as util]
            [clojure.string :as s]))

(defn- gen-classes [type props]
  (let [bs-style (or (:bsStyle props) "default")
        styles (.split bs-style ",")
        func (fn [st] (str type "-" (s/trim st)))
        ret (map func styles)]
    (str type " " (s/join " " ret) " ")))

(defn- b-mixin [type props]
  (let [this (r/current-component)
        classes (gen-classes type props)]
    [:span
      (merge
        (r/props this)
        {:class (util/trim (str classes " " (:className props)))})
      (:children props)]))

(defn badge [props] (b-mixin "badge" props))
(defn label [props] (b-mixin "label" props))
