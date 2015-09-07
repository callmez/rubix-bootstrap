(ns rubix-bootstrap.components.breadcrumb
  (:require [reagent.core :as r]
            [cljsjs.util :as util]))

(defn- b-link-li [props classes child]
  [:li (merge props {:href nil
                     :class (util/trim classes)})
    child])

(defn b-link [props]
  (let [this (r/current-component)
        active (if (:active props) "active" "")
        active? (= active "active")
        classes (str active " " (:className props))]
    (if active?
      [b-link-li (r/props this) classes (:children props)]
      [b-link-li (r/props this) classes
        [:a {:href (or (:href props) "#")}
          [:span (:children props)]
          [:span " "]]])))

(defn breadcrumb [props]
  (let [this (r/current-component)]
    [:ol
      (merge
        (r/props this)
        {:class (util/trim (str "breadcrumb " (:className props)))})
      (:children props)]))
