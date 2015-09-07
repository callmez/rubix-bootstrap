(ns rubix-bootstrap.components.button
  (:require [reagent.core :as r]
            [cljsjs.util :as util]
            [rubix-bootstrap.components.common.buttonclasses :as buttonclasses]))

(defn- close-component []
  [:span
    [:span {:aria-hidden true} (js/String.fromCharCode 215)]
    [:span {:class "sr-only"} "Close"]])

(defn button [props]
  (let [this (r/current-component)
        react-component (:componentClass props)
        componentClass (or (when (not (nil? react-component))
                             (r/adapt-react-class react-component))
                           :button)
        type (or (:type props) "button")
        close? (:close props)
        classes (if close?
                  "close"
                  (buttonclasses/gen-classes props))
        rchildren (if close?
                    [close-component]
                    (:children props))]
         [componentClass
           (merge
             (r/props this)
             {:role "button"
              :type type
              :class (util/trim (str classes " " (:className props)))})
           rchildren]))
