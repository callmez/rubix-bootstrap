(ns rubix-bootstrap.components.form
  (:require [reagent.core :as r]
            [cljsjs.util :as util]))

(defn- gen-classes [props]
  (let [inline? (:inline props)
        horizontal? (:horizontal props)]
    (str (when inline?
           "form-inline ")
         (when horizontal?
           "form-horizontal "))))

(defn- fakeInputs []
  [:div {:style {:display "none"}}
    [:div.form-group
      [:input {:type "text"}]]
    [:div.form-group
      [:input {:type "email"}]]
    [:div.form-group
      [:input {:type "password"}]]])

(defn form [props]
  (let [this (r/current-component)
        classes (gen-classes props)
        autocomplete? (:allowAutoComplete props)]
    [:form
      (merge
        (r/props this)
        {:role "form"
         :class (util/trim (str classes " " (:className props)))
         :autoComplete (if (not autocomplete?) "off" "on")})
      (when (not autocomplete?)
        [fakeInputs])
      (:children props)]))
