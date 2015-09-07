(ns rubix-bootstrap.components.tab
  (:require [goog.dom]
            [goog.dom.classes]
            [reagent.core :as r]
            [clojure.string :as s]
            [cljsjs.util :as util]
            [rubix-bootstrap.components.menu :as menu]
            [rubix-bootstrap.components.caret :as caret]))

(defonce tab-containers (r/atom {}))
(defonce tab-panes (r/atom {}))
(defonce tabs (r/atom {}))

(defn create-tab-container-cursor [id]
  (let [c (r/cursor tab-containers [id])]
    (when (nil? @c)
      (swap! tab-containers assoc id {:tab-list []
                                      :tab-pane []}))
    c))

(defn- gen-classes-t [props]
  (let [dropdown? (:dropdown props)
        disabled? (:disabled props)]
    (str "b-tab "
         (when dropdown? "dropdown ")
         (when disabled? "disabled "))))

(defn- deactivate-all-tabs [tab-container-id]
  (let [tab-container-cursor (r/cursor tab-containers [tab-container-id])
        tab-list-cursor (r/cursor tab-container-cursor [:tab-list])
        tab-pane-cursor (r/cursor tab-container-cursor [:tab-pane])]
    (doall
      (map
        (fn [id]
          (let [tpc (r/cursor tab-panes [id])]
            (reset! tpc {:active false}))) @tab-pane-cursor))
    (doall
      (map
        (fn [id]
          (let [tbc (r/cursor tabs [id])]
            (reset! tbc {:active false}))) @tab-list-cursor))))

(defn- activate-tab [id tab-container-id]
  (let [tab-container-cursor (r/cursor tab-containers [tab-container-id])
        tab-list-cursor (r/cursor tab-container-cursor [:tab-list])
        tab-pane-cursor (r/cursor tab-container-cursor [:tab-pane])
        idx (util/indexOf (vec @tab-list-cursor) id)
        tab-pane-id (get @tab-pane-cursor idx)
        tpc (r/cursor tab-panes [tab-pane-id])
        active? (:active @tpc)]
    (when (not active?)
      (reset! tpc {:active true}))))

(defn- tab-click [e id tab-container-id]
  (when e (.preventDefault e))
  (let [tbc (r/cursor tabs [id])]
    (deactivate-all-tabs tab-container-id)
    (activate-tab id tab-container-id)
    (reset! tbc {:active true})))

(defn tab-class [props]
  (let [this (r/current-component)
        id (util/get-id this props)
        active? (:active props)
        dropdown? (:dropdown props)
        classes (gen-classes-t props)
        tab-container-id (:tab-container-id props)
        tab-container-cursor (r/cursor tab-containers [tab-container-id])
        tab-list-cursor (r/cursor tab-container-cursor [:tab-list])
        idx (util/indexOf (vec @tab-list-cursor) id)
        _ (when (nil? idx)
            (swap! tab-list-cursor conj id))
        tbc (r/cursor tabs [id])
        _ (swap! tbc assoc :active (if (not (nil? (:active @tbc)))
                                     (:active @tbc)
                                     active?))
        on-tab-select (:on-tab-select props)
        tab-click-event (fn [e]
                          (tab-click e id tab-container-id)
                          (on-tab-select (clj->js props)))]
    (if dropdown?
      [:div
        (merge
          (r/props this)
          {:class (util/trim (str "div-b-tab " (:className props)))
           :on-click tab-click-event
           :on-touch-end tab-click-event})
        (:children props)]
      (let [active? (:active @tbc)]
        [:li
          (merge
            (r/props this)
            {:class (util/trim
                      (str classes
                         (when active? "active ") " " (:className props)))
             :active nil})
          [:a {:href "#" :role "tab" :data-toggle "tab"
               :on-click tab-click-event
               :on-touch-end tab-click-event}
            (:children props)]]))))

(def tab
  (with-meta
    tab-class
    {:component-did-mount
      (fn [this]
        (let [props (r/props this)
              id (util/get-id this props)
              tbc (r/cursor tabs [id])
              tab-container-id (:tab-container-id props)
              active? (:active @tbc)
              _ (when active?
                  (activate-tab id tab-container-id))]))}))

(defn tab-dropdown [props]
  (let [this (r/current-component)
        id (util/get-id this props)
        title (:title props)
        no-caret? (:noCaret props)
        tab-container-id (:tab-container-id props)
        on-tab-select (:on-tab-select props)]
    [:li
      (merge
        (r/props this)
        {:class (util/trim
                  (str "b-tab dropdown "
                    (:className props)))
         :title nil})
      [menu/dropdown-button
        {:tab true
         :dropdown id
         :on-click (fn [e]
                     (let [dd (r/dom-node this)]
                       (goog.dom.classes.add dd "active"))
                     "")
         :children [:span
                     [:span title]
                     (when (not no-caret?)
                       [caret/caret])]}]
      [menu/menu
        (merge
          (js->clj (:menu-props props))
          {:dropdown id
           :onHidden (fn []
                       (let [dd (r/dom-node this)]
                         (goog.dom.classes.remove dd "active"))
                       "")
           :children
            (util/map-children
              (fn [i c]
                (r/as-element
                  [menu/menu-item
                    {:href "#"
                     :key i
                     :children
                       (.cloneElement
                         js/React
                         c
                         #js {:tab-container-id tab-container-id
                              :on-tab-select on-tab-select
                              :dropdown true})}])) (:children props))})]]))

(defn tab-pane-class [props]
  (let [this (r/current-component)
        id (util/get-id this props)
        active? (:active props)
        tab-container-id (:tab-container-id props)
        tab-container-cursor (r/cursor tab-containers [tab-container-id])
        tab-pane-cursor (r/cursor tab-container-cursor [:tab-pane])
        idx (util/indexOf (vec @tab-pane-cursor) id)
        _ (when (nil? idx)
            (swap! tab-pane-cursor conj id))
        tpc (r/cursor tab-panes [id])
        _ (swap! tpc assoc :active (if (not (nil? (:active @tpc)))
                                     (:active @tpc)
                                     active?))
        active? (:active @tpc)]
    (when active?
      [:div
        (merge
          (r/props this)
          {:class (util/trim
                    (str " tab-pane active "
                         (:className props)))
           :active nil})
        (:children props)])))

(def tab-pane
  (with-meta
    tab-pane-class
    {:component-will-unmount
      (fn [this]
        (let [id (aget this "id")]
          (swap! tab-panes dissoc id)))}))

(defn- gen-classes-tl [props]
  (let [pills? (:pills props)
        stacked? (:stacked props)
        stacked? (if stacked?
                   (if pills? true false)
                   false)
        justified? (:justified props)
        bsStyle (when (not (nil? (:bsStyle props)))
                  (filter
                    not-empty
                    (s/split (:bsStyle props) #"\s|,")))
        styles (if (not (nil? bsStyle))
                 (apply str
                    (for [st bsStyle]
                       (str " nav-" (s/trim st))))
                 " nav-default")]
    (str "nav "
         (when (not pills?) "nav-tabs ")
         (when pills? "nav-pills ")
         (when stacked? "nav-stacked ")
         (when justified? "nav-justified ")
         styles)))

(defn tab-list-class [props]
  (let [this (r/current-component)
        pills? (:pills props)
        tablist (if pills? "" "tablist")
        classes (gen-classes-tl props)
        tab-container-id (or (:tabContainerID props)
                             (:tab-container-id props))
        _ (aset this "tabContainerID" tab-container-id)
        tab-container-cursor (r/cursor tab-containers [tab-container-id])
        _ (when (nil? (:tabContinuation props))
            (create-tab-container-cursor tab-container-id))
        on-tab-select (or (:onTabSelect props)
                          (:on-tab-select props)
                          (fn []))]
    (if (nil? tab-container-id)
      (throw (js/Error. "tabContainerID required!"))
      [:ul
        (merge
          (r/props this)
          {:class (util/trim (str classes " " (:className props)))
           :role tablist})
        (util/map-children
          (fn [i c]
            (.cloneElement
              js/React
              c
              #js {:tab-container-id tab-container-id
                   :on-tab-select on-tab-select
                   :key i})) (:children props))])))

(def tab-list
  (with-meta
    tab-list-class
    {:component-will-unmount
      (fn [this]
        (let [id (aget this "tabContainerID")]
          (swap! tab-containers dissoc id)))}))

(defn tab-content [props]
  (let [this (r/current-component)
        tab-container-id (or (:tabContainerID props)
                             (:tab-container-id props))
        on-tab-select (:on-tab-select props)
        _ (create-tab-container-cursor tab-container-id)]
    (if (nil? tab-container-id)
      (throw (js/Error. "tabContainerID required!"))
      [:div
        (merge
          (r/props this)
          {:class (util/trim (str "tab-content " (:className props)))})
        (util/map-children
          (fn [i c]
            (.cloneElement
              js/React
              c
              #js {:tab-container-id tab-container-id
                   :on-tab-select on-tab-select
                    :key i})) (:children props))])))

(defn tab-container-class [props]
  (let [this (r/current-component)
        id (util/get-id this props)
        on-tab-select (or (:onTabSelect props) (fn []))
        _ (create-tab-container-cursor id)]
    [:div
      (merge
        (r/props this)
        {:class (util/trim (str "tab-container " (:className props)))})
      (util/map-children
        (fn [i c]
          (.cloneElement
            js/React
            c
            #js {:tab-container-id id
                 :on-tab-select on-tab-select
                 :key i})) (:children props))]))

(def tab-container
  (with-meta
    tab-container-class
    {:component-will-unmount
      (fn [this]
        (let [id (aget this "id")]
          (swap! tab-containers dissoc id)))}))
