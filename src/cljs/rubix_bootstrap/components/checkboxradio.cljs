(ns rubix-bootstrap.components.checkboxradio
  (:require [reagent.core :as r]
            [cljsjs.util :as util]
            [rubix-bootstrap.components.label :as label]
            [rubix-bootstrap.components.input :as input]))

(defn- gen-classes [t props]
  (let [disabled? (:disabled props)]
    (str t " "
         (when disabled? "disabled"))))

(defn- checkboxradio [t props]
  (let [this (r/current-component)
        classes (gen-classes t props)
        native? (:native props)
        inline? (:inline props)
        input-props (merge
                      props
                      {:type t
                       :children nil})
        i [input/input input-props]
        combined [:div
                   i
                   [:span (:children props)]]

        label-props {:className (util/trim
                                  (str t "-inline " (:className props)))
                     :inline nil
                     :children combined}
        l [label/label label-props]
        r [:div {:class (util/trim classes)}
            [label/label {:children combined}]]]
    (if native?
      i
    (if inline?
      l
      r))))

(defn checkbox [props]
  [checkboxradio "checkbox" props])

(defn radio [props]
  [checkboxradio "radio" props])
