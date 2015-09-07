(ns rubix-bootstrap.components.listgroup
  (:require [reagent.core :as r]
            [cljsjs.util :as util]
            [clojure.string :as s]))

(defn- common-el [el class-name props]
  (let [this (r/current-component)]
    [el
      (merge
        (r/props this)
        {:class (util/trim (str class-name " " (:className props)))})
      (:children props)]))

(defn list-group [props]
  [common-el :div "list-group" props])

(defn list-group-item-text [props]
  [common-el :p "list-group-item-text" props])

(defn list-group-item-heading [props]
  [common-el :h4 "list-group-item-heading" props])

(defn- gen-classes [props]
  (let [active? (:active props)
        disabled? (:disabled props)
        info? (:info props)
        danger? (:danger props)
        warning? (:warning props)
        success? (:success props)
        bsStyle (when (not (nil? (:bsStyle props)))
                  (filter
                    not-empty
                    (s/split (:bsStyle props) #"\s|,")))
        styles (when (not (nil? bsStyle))
                 (apply str
                    (for [st bsStyle]
                       (str " list-group-" (s/trim st)))))]
    (str "list-group-item "
         (when active?
           "active ")
         (when disabled?
           "disabled ")
         (when info?
           "list-group-item-info ")
         (when danger?
           "list-group-item-danger ")
         (when warning?
           "list-group-item-warning ")
         (when success?
           "list-group-item-success ")
         styles
         " ")))

(defn list-group-item [props]
  (let [this (r/current-component)
        classes (gen-classes props)]
    [:a
      (merge
        (r/props this)
        {:href (or (:href props) "#")
         :class (util/trim (str classes " " (:className props)))})
      (:children props)]))
