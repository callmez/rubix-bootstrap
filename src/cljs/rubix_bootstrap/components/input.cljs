(ns rubix-bootstrap.components.input
  (:require [reagent.core :as r]
            [cljsjs.util :as util]
            [rubix-bootstrap.components.common.buttonclasses :as buttonclasses]))

(defonce form-control-types #{"tel" "url" "date" "time" "week" "text"
                              "color" "month" "email" "number" "search"
                              "password" "datetime" "datetime-local"})

(defonce button-types #{"button" "reset" "submit"})

(defn- is-form-control? [t]
  (contains? form-control-types t))

(defn- is-button? [t]
  (contains? button-types t))

(defn- gen-classes [props]
  (let [sm? (:sm props)
        lg? (:lg props)
        t (:type props)
        form-control? (is-form-control? t)]
    (str (when sm?
           "input-sm ")
         (when lg?
           "input-lg ")
         (when form-control?
           "form-control"))))

(defn input [props]
  (let [this (r/current-component)
        input-atom (r/atom {})
        classes (if (is-button? (:type props))
                  (buttonclasses/gen-classes props)
                  (gen-classes props))]
    [:input
     (merge
       (r/props this)
       {:ref "input"
        :class (util/trim (str classes " " (:className props)))})]))
