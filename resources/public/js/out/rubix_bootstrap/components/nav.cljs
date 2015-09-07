(ns rubix-bootstrap.components.nav
  (:require [reagent.core :as r]
            [cljsjs.util :as util]
            [rubix-bootstrap.components.form :as form]
            [rubix-bootstrap.components.button :as button]))

(defonce navs (r/atom {}))
(defonce navcontents (r/atom {}))
(defonce zIndex (r/atom 9999999))

(defn reset-globals! []
  (reset! zIndex 9999999))

(defn- getZIndex []
  (swap! zIndex dec))

(defn- nav-mixin-classes [props]
  (let [left? (:left props)
        right? (:right props)]
    (str (when left? "navbar-left ")
         (when right? "navbar-right "))))

(defn- nav-mixin [component props extra-classes & [rchildren]]
  (let [this (r/current-component)
        classes (nav-mixin-classes props)
        use-class-name (:use-class-name props)
        use-class (if use-class-name
                    "className"
                    "class")]
    [component
      (merge
        (r/props this)
        {(keyword use-class) (util/trim
                  (str classes " " extra-classes " " (or (:className props)
                                                         (:class props))))
         :children (or rchildren (:children props))
         :role (:role props)})]))

(defn nav-button [props]
  (util/debug "nav-button")
  [nav-mixin button/button props])

(defn nav-link [props]
  (util/debug "nav-link")
  [nav-mixin :a props "navbar-link"])

(defn nav-text [props]
  (util/debug "nav-text")
  [nav-mixin :p props "navbar-text"])

(defn nav-form [props]
  (util/debug "nav-form")
  (let [this (r/current-component)]
    [nav-mixin
      form/form
      (merge
        (r/props this)
        {:role "search"
         :use-class-name true})
      "navbar-form form-inline"]))

(defn- toggle-navcontents [e target]
  (.preventDefault e)
  (let [navcontents-cursor (r/cursor navcontents [target])
        collapse (not (:collapse @navcontents-cursor))]
    (swap! navcontents-cursor assoc :collapse collapse)))

(defn nav-toggle [props]
  (util/debug "nav-toggle")
  (let [this (r/current-component)
        target (:target props)
        toggle-navcontents-event (fn [e]
                                   (toggle-navcontents e target))
        nchildren [:span
                    [:span.sr-only (:children props)]
                    [:span.icon-bar]
                    [:span.icon-bar]
                    [:span.icon-bar]]]
    (if (nil? target)
      (throw (js/Error. "No \"target\" property set for NavToggle. Please refer to Navbar documentation."))
      [button/button
        (merge
          (r/props this)
          {:className (util/trim
                        (str "navbar-toggle "
                          (:className props)))
           :data-toggle "collapse"
           :on-click toggle-navcontents-event
           :on-touch-end toggle-navcontents-event
           :children nchildren})])))

(defn- deactivate-nav-items [nav-cursor]
  (doall
    (map
      (fn [[id v]]
        (let [nav-item-cursor (r/cursor nav-cursor [id])]
          (swap! nav-item-cursor assoc :active false))) @nav-cursor)))

(defn- activate-nav-item [nav-item-cursor nav-cursor props]
  (deactivate-nav-items nav-cursor)
  (swap! nav-item-cursor assoc :active true)
  (let [on-click (:onClick props)
        on-touch-end (:onTouchEnd props)]
    (when on-click (on-click))
    (when on-touch-end (on-touch-end))))

(defn nav-item-class [props]
  (util/debug "nav-item-class")
  (let [this (r/current-component)
        id (util/get-id this props)
        nav-id (:nav-id props)
        nav-cursor (r/cursor navs [nav-id])
        nav-item-cursor (r/cursor nav-cursor [id])
        active? (:active @nav-item-cursor)
        on-item-select (:on-item-select props)
        _ (swap! nav-item-cursor assoc :active (if (not (nil? active?))
                                                       active?
                                                       (:active props)))
        active? (:active @nav-item-cursor)
        divider? (:divider props)
        dropdown? (:dropdown props)
        on-shown (:onShown props)
        on-hidden (:onHidden props)
        d [:li
            (merge
              (r/props this)
              {:class (util/trim (str "divider " (:className props)))})]]
    (if divider?
      d
      (let [on-shown-event (fn []
                             (swap! nav-item-cursor assoc :active true)
                             (when on-shown (on-shown)))
            on-hidden-event (fn []
                              (swap! nav-item-cursor assoc :active false)
                              (when on-hidden (on-hidden)))
            classes (str (when dropdown? "dropdown ")
                         (when active? "active ")
                         (:className props))
            handle-click-event (fn [e]
                                 (.preventDefault e)
                                 (activate-nav-item nav-item-cursor
                                                    nav-cursor
                                                    props)
                                 (when on-item-select (on-item-select (clj->js props))))
            href (:href props)
            nchildren (if href
                        [:a {:href href
                             :on-click handle-click-event
                             :on-touch-end handle-click-event}
                          (:children props)]
                        (:children props))
            nchildren (if dropdown?
                        (util/map-children
                          (fn [i c]
                            (.cloneElement
                              js/React
                              c
                              #js {:dropdown id
                                   :toggleOnHover (:toggleOnHover props)
                                   :onShown on-shown-event
                                   :onHidden on-hidden-event
                                   :key i})) (:children   props))
                        nchildren)]
        [:li
          (merge
            (r/props this)
            {:class (util/trim classes)})
          nchildren]))))

(def nav-item
  (with-meta
    nav-item-class
    {:component-will-unmount
      (fn [this]
        (let [id (aget this "id")
              props (r/props this)
              nav-id (:nav-id props)
              nav-cursor (r/cursor navs [nav-id])]
          (swap! nav-cursor dissoc id)))}))

(defn nav-class [props]
  (util/debug "nav")
  (let [this (r/current-component)
        id (util/get-id this props)
        _ (swap! navs assoc id {})
        on-item-select (:onItemSelect props)]
    [nav-mixin :ul props "nav navbar-nav"
      (util/map-children
        (fn [i c]
          (when (not (nil? c))
            (.cloneElement
              js/React
              c
              #js {:on-item-select on-item-select
                   :nav-id id}))) (:children props))]))

(def nav
  (with-meta
    nav-class
    {:component-will-unmount
      (fn [this]
        (swap! navs dissoc (aget this "id")))}))

(defn nav-content-class [props]
  (util/debug "nav-content")
  (let [this (r/current-component)
        id (or (:id props)
               (util/get-id this props))]
    (let [navcontents-cursor (r/cursor navcontents [id])
          collapse? (:collapse @navcontents-cursor)
          _ (swap! navcontents-cursor assoc :collapse
                                            (if (not (nil? collapse?))
                                              collapse?
                                              (:collapse props)))
          collapse? (:collapse @navcontents-cursor)
          classes (str "navbar-content "
                    (when collapse? "collapse navbar-collapse "))]
        [:div
          (merge
            (r/props this)
            {:class (util/trim (str classes " " (:className props)))})
          (:children props)])))

(def nav-content
  (with-meta
    nav-content-class
    {:component-will-unmount
      (fn [this]
        (swap! navcontents dissoc (aget this "id")))}))

(defn nav-brand [props]
  (util/debug "nav-brand")
  (let [this (r/current-component)]
    [:a
      (merge
        (r/props this)
        {:href (or (:href props) "#")
         :class (util/trim (str "navbar-brand " (:className props)))})
      (:children props)]))

(defn nav-header [props]
  (util/debug "nav-header")
  (let [this (r/current-component)]
    [:div
      (merge
        (r/props this)
        {:class (util/trim (str "navbar-header " (:className props)))})
      (:children props)]))

(defn- gen-classes [props]
  (let [inverse? (:inverse props)
        fixed-top? (:fixedTop props)
        static-top? (:staticTop props)
        fixed-bottom? (:fixedBottom props)]
    (str "navbar navbar-default "
         (when inverse? "navbar-inverse ")
         (when fixed-top? "navbar-fixed-top ")
         (when static-top? "navbar-static-top ")
         (when fixed-bottom? "navbar-fixed-bottom "))))

(defn navbar [props]
  (util/debug "navbar")
  (let [this (r/current-component)
        classes (gen-classes props)]
    [:nav
      (util/deep-merge
        (r/props this)
        {:class (util/trim (str classes " " (:className props)))
         :role "navigation"
         :style (merge
                  (js->clj (:style props))
                  {:zIndex (getZIndex)})})
      (:children props)]))
