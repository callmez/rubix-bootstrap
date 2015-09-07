(ns rubix-bootstrap.components.pagination
  (:require [reagent.core :as r]
            [cljsjs.util :as util]))

(defn- gen-classes-page [props]
  (let [next? (:next props)
        active? (:active props)
        disabled? (:disabled props)
        previous? (:previous props)]
    (str (when next? "next ")
         (when active? "active ")
         (when disabled? "disabled ")
         (when previous? "previous "))))

(defn- render-page-el [props]
  (let [begin? (:begin props)
        end? (:end props)
        next? (:next props)
        previous? (:previous props)
        active? (:active props)
        rchildren (:children props)]
    (if begin?
      "«"
    (if end?
      "»"
    (if next?
      [:span rchildren " →"]
    (if previous?
      [:span "← " rchildren]
    (if active?
      [:span
        rchildren
        [:span.sr-only "(current)"]]
      rchildren)))))))

(defn page [props]
  (let [this (r/current-component)
        classes (gen-classes-page props)
        child (render-page-el props)]
    [:li
      (merge
        (r/props this)
        {:href nil
         :class (util/trim (str classes " " (:className props)))})
      [:a {:href (or (:href props) "#")}
        child]]))

(defn- gen-classes-pagination [props]
  (let [sm? (:sm props)
        lg? (:lg props)]
    (str "pagination "
         (when sm? "pagination-sm ")
         (when lg? "pagination-lg "))))

(defn pagination [props]
  (let [this (r/current-component)
        classes (gen-classes-pagination props)]
    [:ul
      (merge
        (r/props this)
        {:class (util/trim (str classes " " (:className props)))})
      (:children props)]))

(defn pager [props]
  (let [this (r/current-component)]
    [:ul
      (merge
        (r/props this)
        {:class (util/trim (str "pager " (:className props)))})
      (:children props)]))
