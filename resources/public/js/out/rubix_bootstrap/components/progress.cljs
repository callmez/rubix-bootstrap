(ns rubix-bootstrap.components.progress
  (:require [reagent.core :as r]
            [cljsjs.util :as util]))

(defn- gen-classes-pg [props]
  (let [collapse-bottom? (:collapseBottom props)]
    (str "progress "
         (when collapse-bottom? "progress-collapse-bottom "))))

(defn- progress-group-construct [props & [child]]
  (let [this (r/current-component)
        classes (gen-classes-pg props)
        rchildren (or child (:children props))
        background (:background props)
        children-count (if child
                         1
                         (count rchildren))
        props (util/deep-merge
                (r/props this)
                {:class (util/trim (str classes " " (:className props)))
                 :style {:background background}})]
    (if (= 1 children-count)
      [:div
        props
        rchildren]
      [:div
        props
        (util/map-children
          (fn [i c]
            (.cloneElement
              js/React
              c
              #js {:stack true
                   :key i})) rchildren)])))

(defn progress-group [props]
  [progress-group-construct props])

(defn- gen-classes [props]
  (let [active? (:active props)
        info? (:info props)
        danger? (:danger props)
        success? (:success props)
        warning? (:warning props)
        striped? (:striped props)
        collapse-bottom? (and (:collapseBottom props)
                              (:stack props))]
    (str "progress-bar "
         (when active?
           "active ")
         (when info?
           "progress-bar-info ")
         (when danger?
           "progress-bar-danger ")
         (when success?
           "progress-bar-success ")
         (when warning?
           "progress-bar-warning ")
         (when striped?
           "progress-bar-striped ")
         (when collapse-bottom?
           "progress-collapse-bottom "))))

(defn progress [props]
  (let [this (r/current-component)
        classes (gen-classes props)
        info? (:info props)
        danger? (:danger props)
        success? (:success props)
        warning? (:warning props)
        suffix (str " (" (when info? "info")
                         (when danger? "danger")
                         (when success? "success")
                         (when warning? "warning") ")")
        value (:value props)
        color (:color props)
        min-value (:min props)
        max-value (:max props)
        is-stack? (:stack props)
        fg-color (:fgColor props)
        min-width (:minWidth props)
        with-label (:withLabel props)
        child (if with-label
                (if (= (type with-label) js/String)
                  [:span {:style {:color fg-color}} with-label]
                  [:span {:style {:color fg-color}} (str value "%")])
                [:span.sr-only
                    (str value "% Complete" suffix)])]
    (if is-stack?
      [:div
        (util/deep-merge
          (r/props this)
          {:class (util/trim (str classes " " {:className props}))
           :role "progressbar"
           :aria-valuenow value
           :aria-valuemin min-value
           :aria-valuemax max-value
           :style {:width (str value "%")
                   :background color
                   :min-width min-width}}) child]

      [progress-group-construct
        props
        [:div {:class (util/trim classes)
               :role "progressbar"
               :aria-valuenow value
               :aria-valuemin min-value
               :aria-valuemax max-value
               :style {:width (str value "%")
                       :background color
                       :min-width min-width}} child]])))
