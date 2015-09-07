(ns rubix-bootstrap.components.accordian
  (:require [reagent.core :as r]
            [cljsjs.util :as util]))

(defonce accordians (r/atom {}))

(defn- collapse-pane [accordian-pane-cursor]
  (swap! accordian-pane-cursor assoc :style {:height 0
                                             :padding 0})
  (swap! accordian-pane-cursor assoc :active false))

(defn- expand-pane [accordian-pane-cursor & [should-callback?]]
  (let [on-item-select (:on-item-select @accordian-pane-cursor)
        pane-props (:pane-props @accordian-pane-cursor)]
    (swap! accordian-pane-cursor assoc :style {:height "auto"
                                               :padding ""})
    (swap! accordian-pane-cursor assoc :active true)
    (when should-callback?
      (let [data (dissoc pane-props :on-item-select)
            data (dissoc data :active)
            data (dissoc data :accordian)]
        (on-item-select (clj->js data))))))

(defn- collapse-all-panes [accordian-cursor & [exceptAPID]]
  (let [raw @accordian-cursor]
    (doall
      (for [[aPID v] raw]
        (when (not= aPID exceptAPID)
          (let [accordian-pane-cursor (r/cursor accordian-cursor[aPID])]
            (collapse-pane accordian-pane-cursor)))))))

(defn- toggle-accordian [accordian-pane-cursor & [should-callback?]]
  (let [is-active? (:active @accordian-pane-cursor)]
    (if is-active?
      (collapse-pane accordian-pane-cursor)
      (expand-pane accordian-pane-cursor should-callback?))))

(defn accordian-content [props]
  (util/debug "accordian-content")
  (let [this (r/current-component)
        accordianID (:accordian props)
        accordianPaneID (:accordianPane props)
        accordian-cursor (r/cursor accordians [accordianID])
        accordian-pane-cursor (r/cursor accordian-cursor [accordianPaneID])
        is-active? (:active @accordian-pane-cursor)
        _ (when is-active?
            (collapse-all-panes accordian-cursor)
            (expand-pane accordian-pane-cursor))]
    [:div
      (util/deep-merge
        (r/props this)
        {:class (util/trim (str "accordian-content " (:className props)))
         :style {:overflow "hidden"}})
      [:div.accordian-body {:style (:style @accordian-pane-cursor)}
        (:children props)]]))

(defn accordian-title [props]
  (util/debug "accordian-title")
  (let [this (r/current-component)
        accordianID (:accordian props)
        accordianPaneID (:accordianPane props)
        accordian-cursor (r/cursor accordians [accordianID])
        accordian-pane-cursor (r/cursor accordian-cursor [accordianPaneID])]
    [:a
      (merge
        (r/props this)
        {:href (or (:href props) "#")
         :class (util/trim (str "accordian-title " (:className props)))
         :on-click
           (fn [e]
             (.preventDefault e)
             (collapse-all-panes accordian-cursor accordianPaneID)
             (toggle-accordian accordian-pane-cursor true)
             (when (:onClick props)
               ((:onClick props) e)))})
      (:children props)]))

(defn accordian-pane [props]
  (util/debug "accordian-pane")
  (let [this (r/current-component)
        accordianPaneID (or (:accordianPaneID props)
                            (aget this "accordianPaneID")
                            (aset this "accordianPaneID" (util/gen-id)))
        is-active? (or (:active props) false)
        accordianID (:accordian props)
        on-item-select (:on-item-select props)
        accordian-cursor (r/cursor accordians [accordianID])
        _ (swap! accordian-cursor
                 assoc
                 accordianPaneID
                 {:style {:height 0
                          :padding 0}
                  :active is-active?
                  :pane-props
                     (let [data (dissoc props :children)
                           data (dissoc data :-elem-count)
                           data (assoc data :accordianPaneID accordianPaneID)]
                       data)
                  :on-item-select on-item-select})]
    [:li
      (merge
        (r/props this)
        {:class (util/trim (str "accordian-pane " (:className props)))})
      (util/map-children
        (fn [i c]
          (.cloneElement
            js/React
            c
            #js {:accordian accordianID
                 :accordianPane accordianPaneID
                 :key i})) (:children props))]))

(defn- search-and-select [accordianID k v]
  (let [accordian-cursor (r/cursor accordians [accordianID])
        accordian-data @accordian-cursor]
    (doall
      (for [[aPID data] accordian-data]
        (let [pane-props (:pane-props data)
              value ((keyword k) pane-props)]
          (when (= value v)
            (let [accordian-pane-cursor (r/cursor accordian-cursor [aPID])]
              (collapse-all-panes accordian-cursor)
              (expand-pane accordian-pane-cursor))))))))

(defn- accordian-class [props]
  (util/debug "accordian")
  (let [this (r/current-component)
        accordianID (or (:accordianID props)
                        (aget this "accordianID")
                        (aset this "accordianID" (util/gen-id)))
        on-item-select (:onItemSelect props)
        on-set-select-item (:onSetSelectItem props)
        _ (on-set-select-item
            (fn [k v]
              (search-and-select accordianID k v)))
        _ (swap! accordians assoc accordianID {})]
    [:ul
      (merge
        (r/props this)
        {:class (util/trim (str "accordian " (:className props)))})
      (util/map-children
        (fn [i c]
          (.cloneElement
            js/React
            c
            #js {:accordian accordianID
                 :on-item-select on-item-select
                 :key i})) (:children props))]))

(def accordian
  (with-meta
    accordian-class
    {:component-will-unmount
      (fn [this]
        (swap! accordians dissoc (aget this "accordianID")))}))
