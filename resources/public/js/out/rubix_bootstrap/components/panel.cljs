(ns rubix-bootstrap.components.panel
  (:require [reagent.core :as r]
            [clojure.string :as s]
            [cljsjs.util :as util]
            [rubix-bootstrap.components.icon :as icon]
            [rubix-bootstrap.components.button :as button]))

(defonce zIndex (r/atom 9999999))

(defn reset-globals! []
  (reset! zIndex 9999999))

(defn- getZIndex []
  (swap! zIndex dec))

(defn- common-panel-el [class-name props]
  (let [this (r/current-component)]
    [:div
      (merge
        props
        {:class (util/trim
                  (str class-name
                     " "
                     (when (:noRadius props) "noRadius ")
                     " "
                     (:className props)))})
      (:children props)]))

(defn panel-right [props]
  (util/debug "panel-right")
  [common-panel-el "rubix-panel-right" props])

(defn panel-left [props]
  (util/debug "panel-left")
  [common-panel-el "rubix-panel-left" props])

(defn panel-footer [props]
  (util/debug "panel-footer")
  [common-panel-el "rubix-panel-footer" props])

(defn panel-header [props]
  (util/debug "panel-header")
  [common-panel-el "rubix-panel-header" props])

(defn panel-body [props]
  (util/debug "panel-body")
  [common-panel-el "rubix-panel-body" props])

(defn panel [props]
  (util/debug "panel")
  (let [this (r/current-component)
        horizontal? (:horizontal props)
        classes (str "rubix-panel "
                     (when horizontal? "horizontal "))]
    [:div
      (merge
        (r/props this)
        {:class (util/trim (str classes " " (:className props)))})
      [:div
        (:children props)]]))

(defn- gen-control-classes [props]
  (let [control-styles? (:controlStyles props)]
    (str "rubix-panel-controls "
         (when control-styles?
           " " control-styles? " "))))

(defn- gen-container-classes [props]
  (let [bordered? (:bordered props)
        no-overflow? (:noOverflow props)
        plain? (:plain props)
        gutter-bottom? (:gutterBottom props)
        collapse-bottom? (:collapseBottom props)
        container-classes? (:containerClasses props)]
    (str "rubix-panel-container "
         (when bordered? " bordered ")
         (when no-overflow? " noOverflow ")
         (when plain? " panel-plain ")
         (when gutter-bottom? " panel-gutter-bottom ")
         (when collapse-bottom? " panel-collapse-bottom ")
         (when container-classes? (str " " container-classes? " ")))))

(defn- toggle-panel [e collapsed?]
  (.preventDefault e)
  (reset! collapsed? (not @collapsed?))
  "")

(defn- remove-panel [e removed?]
  (.preventDefault e)
  (reset! removed? true)
  "")

(defn- construct-no-controls [control-classes collapsed? removed?]
  [:div {:class (util/trim control-classes)}
    [button/button
      {:children
        [icon/icon {:bundle "fontello"
                    :glyph  "loop-alt-1"}]}]
    [button/button
      {:on-click (fn [e] (toggle-panel e collapsed?))
       :on-touch-end (fn [e] (toggle-panel e collapsed?))
       :children
        [icon/icon {:bundle "fontello"
                    :glyph  (if @collapsed? "plus" "minus")}]}]
    [button/button
      {:on-click (fn [e] (remove-panel e removed?))
       :on-touch-end (fn [e] (remove-panel e removed?))
       :children
        [icon/icon {:bundle "fontello"
                    :glyph  "cancel"}]}]])

(defn panel-container [props]
  (util/debug "panel-container")
  (let [this (r/current-component)
        collapsed? (or (aget this "toggled")
                       (aset this "toggled" (r/atom false)))
        removed? (or (aget this "removed")
                       (aset this "removed" (r/atom false)))
        control-classes (gen-control-classes props)
        container-classes (gen-container-classes props)
        plain? (:plain props)
        is-horizontal? (:horizontal props)
        custom-controls? (:customControls props)
        no-controls? plain?
        controls (when (not no-controls?)
                   (construct-no-controls control-classes collapsed? removed?))
        controls (if custom-controls?
                   [:div {:class (util/trim control-classes)} custom-controls?]
                   controls)
        overflow (if @collapsed? "hidden" "")
        display (when is-horizontal?
                   (if @collapsed? "block" "table"))
        height (if @collapsed? "16px" "auto")]
    (if @removed?
      nil
      [:div
        (util/deep-merge
          (r/props this)
          {:class (util/trim
                    (str "rubix-panel-container-with-controls "
                       (when @collapsed?
                         "active ")
                       " " (:className props)))})
        controls
        [:div {:class (util/trim container-classes)
               :style {:zIndex (getZIndex)
                       :overflow overflow
                       :display (or display "block")
                       :height height}}
          (:children props)]])))
