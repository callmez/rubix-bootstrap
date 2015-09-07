(ns rubix-bootstrap.components.col
  (:require [reagent.core :as r]
            [cljsjs.util :as util]
            [clojure.string :as s]))

(defn- col-class [k v]
  (str "col-" k "-" v " "))

(defn- loop-col-class [a v]
  (let [func (fn [k] (col-class k v))
        ret (map func @a)]
    (str (s/join ret) " ")))

(defn- visibility [k v]
  (let [func (fn [v] (str k "-" (s/trim v)))
        rep-comma (s/replace v #"," " ")
        rep-whitespace (s/replace rep-comma #"\s+" " ")
        trim-whitespace (s/trim rep-whitespace)
        split-v (s/split trim-whitespace #"\s")
        ret (map func split-v)]
    (str (s/join " " ret) " ")))

(defn- hyphenate [s]
  (let [regexp (js/RegExp. "([a-z])([A-Z])" "g")
        s (.replace s regexp "$1-$2")]
    (.toLowerCase s)))

(defn- hyphenate-col-class [k]
  (str "col-" (hyphenate k) " "))

(defn- hyphenate-col-class-with-value [k v]
  (str (s/trim (hyphenate-col-class k)) "-" v " "))

(defn- remaining-props [props]
  (let [ret (map (fn [[k v]]
              (let [k (name k)
                    is-gutter? (not= (.search k "Gutter") -1)
                    is-collapse? (not= (.search k "Collapse") -1)
                    is-offset? (not= (.search k "Offset") -1)
                    is-push? (not= (.search k "Push") -1)
                    is-pull? (not= (.search k "Pull") -1)]
                (if (or is-gutter? is-collapse?)
                  (hyphenate-col-class k)
                  (when (or is-offset? is-push? is-pull?)
                    (hyphenate-col-class-with-value k v))))) props)]
    (str (s/join ret) " ")))

(defn gen-classes [props]
  (let [xs? (:xs props)
        sm? (:sm props)
        md? (:md props)
        lg? (:lg props)
        sizes (atom #{})
        clearfix? (:clearfix props)
        collapse-top? (:collapseTop props)
        collapse-left? (:collapseLeft props)
        collapse-right? (:collapseRight props)
        collapse-bottom? (:collapseBottom props)
        gutter-top? (:gutterTop props)
        gutter-left? (:gutterLeft props)
        gutter-right? (:gutterRight props)
        gutter-bottom? (:gutterBottom props)
        hidden? (:hidden props)
        visible? (:visible props)]
    (str (when xs?
           (swap! sizes conj "xs")
           (col-class "xs" xs?))
         (when sm?
           (swap! sizes conj "sm")
           (col-class "sm" sm?))
         (when md?
           (swap! sizes conj "md")
           (col-class "md" md?))
         (when lg?
           (swap! sizes conj "lg")
           (col-class "lg" lg?))
         (when clearfix?
           "clearfix ")
         (when collapse-top?
           (loop-col-class sizes "collapse-top"))
         (when collapse-left?
           (loop-col-class sizes "collapse-left"))
         (when collapse-right?
           (loop-col-class sizes "collapse-right"))
         (when collapse-bottom?
           (loop-col-class sizes "collapse-bottom"))
         (when gutter-top?
           (loop-col-class sizes "gutter-top"))
         (when gutter-left?
           (loop-col-class sizes "gutter-left"))
         (when gutter-right?
           (loop-col-class sizes "gutter-right"))
         (when gutter-bottom?
           (loop-col-class sizes "gutter-bottom"))
         (when hidden?
           (visibility "hidden" hidden?))
         (when visible?
           (visibility "visible" visible?))
         (remaining-props props))))

(defn col [props]
  (util/debug "col")
  (let [this (r/current-component)
        classes (gen-classes props)]
    [:div
      (util/deep-merge
        (r/props this)
        {:hidden nil
         :class (util/trim (str classes " " (:className props)))})
      (:children props)]))
