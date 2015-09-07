(ns rubix-bootstrap.components.media
  (:require [reagent.core :as r]
            [cljsjs.util :as util]))

(defn media-body [props]
  (let [this (r/current-component)]
    [:div
      (merge
        (r/props this)
        {:class (util/trim (str "media-body " (:className props)))})
      (:children props)]))

(defn media [props]
  (let [this (r/current-component)]
    [:li
      (merge
        (r/props this)
        {:class (util/trim (str "media " (:className props)))})
      (:children props)]))

(defn media-div [props]
  (let [this (r/current-component)]
    [:div
      (merge
        (r/props this)
        {:class (util/trim (str "media " (:className props)))})
      (:children props)]))

(defn media-list [props]
  (let [this (r/current-component)]
    [:ul
      (merge
        (r/props this)
        {:class (util/trim (str "media-list " (:className props)))})
      (:children props)]))

(defn media-object [props]
  (let [this (r/current-component)]
    [:img
      (merge
        (r/props this)
        {:class (util/trim (str "media-object " (:className props)))})]))

(defn media-heading [props]
  (let [this (r/current-component)]
    [:h4
      (merge
        (r/props this)
        {:class (util/trim (str "media-heading fg-black50 " (:className props)))})
      (:children props)]))
