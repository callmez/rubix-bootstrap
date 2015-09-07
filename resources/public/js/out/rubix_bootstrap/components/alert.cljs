(ns rubix-bootstrap.components.alert
  (:require [reagent.core :as r]
            [cljsjs.util :as util]
            [rubix-bootstrap.components.button :as button]))

(defn- gen-classes [props]
  (let [info? (:info props)
        danger? (:danger props)
        success? (:success props)
        warning? (:warning props)]
    (str "alert "
         (when info?
           "alert-info ")
         (when danger?
           "alert-danger ")
         (when success?
           "alert-success ")
         (when warning?
           "alert-warning "))))

(defn- handle-alert-close [hidden]
  (reset! hidden "hidden"))

(defn- alert-dismissible [props hidden on-dismiss]
  [:div
    [button/button {:close true
                    :on-click (fn []
                                (handle-alert-close hidden)
                                (when on-dismiss (on-dismiss)))}]
    (:children props)])

(defn alert [props]
  (let [this (r/current-component)
        classes (gen-classes props)
        dismissible? (:dismissible props)
        _ (when (nil? (aget this "hidden"))
            (aset this "hidden" (r/atom "")))
        hidden (aget this "hidden")
        on-dismiss (:onDismiss props)
        collapse-bottom (when (:collapseBottom props) 0)]
    [:div
      (util/deep-merge
        (r/props this)
        {:role "alert"
         :class (util/trim (str classes @hidden " " (:className props)))
         :style {:margin-bottom collapse-bottom}})
      (if dismissible?
        (alert-dismissible props hidden on-dismiss)
        (:children props))]))

(defn alert-link [props]
  (let [this (r/current-component)]
    [:a
      (merge
        (r/props this)
        {:href (or (:href props) "#")
         :class (util/trim (str "alert-link " (:className props)))})
      (:children props)]))
