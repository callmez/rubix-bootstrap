(ns rubix-bootstrap.components.img
  (:require [reagent.core :as r]
            [cljsjs.util :as util]))

(defn- gen-classes [props]
  (let [circle? (:circle props)
        rounded? (:rounded props)
        thumbnail? (:thumbnail props)
        responsive? (:responsive props)]
    (str (when circle?
           "img-circle ")
         (when rounded?
           "img-rounded ")
         (when thumbnail?
           "img-thumbnail ")
         (when responsive?
           "img-responsive "))))

(defn img [props]
  (let [this (r/current-component)
        classes (gen-classes props)
        empty-src? (empty? (:src props))
        src (if empty-src? "/imgs/blank.gif" (:src props))]
    [:img
      (util/deep-merge
        (r/props this)
        {:src src
         :class (util/trim (str classes " " (:className props)))
         :style (merge
                  (js->clj (:style props))
                  {:background-color (when empty-src? "#EEEEEE")})})]))
