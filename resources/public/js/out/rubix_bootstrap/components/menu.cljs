(ns rubix-bootstrap.components.menu
  (:require [goog.dom.classes]
            [reagent.core :as r]
            [clojure.string :as s]
            [cljsjs.util :as util]
            [cljsjs.dispatcher :as dispatcher]
            [rubix-bootstrap.components.button :as button]))

(defonce dropdowns (r/atom {}))
(defonce menus (r/atom {}))
(defonce menu-items (r/atom {}))
(defonce menu-items-set (r/atom {}))

(defonce zIndex (r/atom 0))

(defn reset-globals! []
  (reset! zIndex 0))

(defn- getZIndex []
  (swap! zIndex inc))

(defn- show-dropdown [e dropdown-id dropdown-cursor]
  (when e (.preventDefault e))
  (let [d @dropdown-cursor
        hidden? (:hidden d)
        on-shown (:on-shown d)]
    (when (and hidden? (not (nil? dropdown-id)))
      (swap! dropdown-cursor assoc :hidden false)
      (when on-shown (on-shown)))))

(defn- hide-dropdown [e dropdown-id dropdown-cursor]
  (when e (.preventDefault e))
  (let [d @dropdown-cursor
        hidden? (:hidden d)
        on-hidden (:on-hidden d)]
    (when (and (not hidden?) (not (nil? dropdown-id)))
      (swap! dropdown-cursor assoc :hidden true)
      (when on-hidden (on-hidden)))))

(defn- force-hide-dropdown []
  (doall
    (map
      (fn [[id v]]
        (let [dropdown-cursor (r/cursor dropdowns [id])]
          (hide-dropdown nil id dropdown-cursor))) @dropdowns)))

(defn- hide-all-dropdowns [e]
  (when e (.preventDefault e))
  (let [target e.target
        is-dropdown (goog.dom.getAncestorByClass
                      target
                      "dropdown")
        is-dropup (goog.dom.getAncestorByClass
                    target
                    "dropup")
        is-dropdown-toggle (goog.dom.getAncestorByClass
                             target
                             "dropdown-toggle")]
    (when (not (or is-dropdown is-dropup is-dropdown-toggle))
      (force-hide-dropdown))))

(defn- toggle-dropdown [e dropdown-id dropdown-cursor]
  (when e (.preventDefault e))
  (let [d @dropdown-cursor
        hidden (:hidden d)]
    (if hidden
      (show-dropdown e dropdown-id dropdown-cursor)
      (hide-dropdown e dropdown-id dropdown-cursor))))

(defn- gen-classes-menu [props]
  (let [props (into {} (map (fn [[k v]] (hash-map (keyword k) v)) props))
        left? (:alignLeft props)
        right? (:alignRight props)
        bsStyle (when (not (nil? (:bsStyle props)))
                  (filter
                    not-empty
                    (s/split (:bsStyle props) #"\s|,")))
        styles (if (not (nil? bsStyle))
                 (apply str
                    (for [st bsStyle]
                       (str " menu-" (s/trim st))))
                 " menu-default")]
    (str "dropdown-menu "
         (when left? "dropdown-menu-left ")
         (when right? "dropdown-menu-right ")
         styles)))

(defn- deactivate-items [menu-cursor]
  (doall
    (map
      (fn [[id v]]
        (let [item-cursor (r/cursor menu-cursor [id])
              this (:this @item-cursor)
              dom-node (r/dom-node this)]
          (when (not (nil? dom-node))
            (aset this "is-active?" false)
            (goog.dom.classes.remove dom-node "active")))) @menu-cursor)))

(defn- activate-item [menu-cursor item-cursor]
  (deactivate-items menu-cursor)
  (let [this (:this @item-cursor)
        dom-node (r/dom-node this)]
    (when (not (nil? dom-node))
      (aset this "is-active?" true)
      (goog.dom.classes.add dom-node "active"))))

(defn- menu-item-click [menu-cursor item-cursor]
  (activate-item menu-cursor item-cursor)
  (let [props (:props @item-cursor)
        on-item-select (:on-item-select props)]
    (when on-item-select (on-item-select (clj->js props)))))

(defn select-item [menu-id k v]
  (let [menu-cursor (r/cursor menus [menu-id])]
    (doall
      (map
        (fn [[id p]]
          (when (= ((keyword k) (:props p)) v)
            (let [item-cursor (r/cursor menu-cursor [id])]
              (activate-item menu-cursor item-cursor)))) @menu-cursor))))

(defn menu-class [props]
  (util/debug "menu")
  (let [this (r/current-component)
        classes (gen-classes-menu props)
        id (util/get-id this props)
        dropdown-id (:dropdown props)
        toggleOnHover (:toggleOnHover props)
        _ (swap! menus assoc id {})
        _ (swap! menu-items-set assoc id #{})
        hidden (:hidden props)
        dropdown-cursor (r/cursor dropdowns [dropdown-id])
        hidden? (:hidden @dropdown-cursor)
        on-shown (:onShown props)
        on-hidden (:onHidden props)
        _ (when (nil? hidden?)
            (swap! dropdown-cursor assoc :hidden (if (not (nil? hidden))
                                                   hidden
                                                   true)
                                         :on-shown on-shown
                                         :on-hidden on-hidden))
        hidden? (:hidden @dropdown-cursor)
        visible? (if hidden? "none" "block")
        menu-items-cursor (r/cursor menu-items [id])
        always-inactive (:alwaysInactive props)
        _ (reset! menu-items-cursor [])
        on-set-select-item (or (:onDropdownSetSelectItem props)
                               (:onSetSelectItem props)
                               (fn []))
        _ (on-set-select-item (fn [k v]
                                (select-item id k v)))
        on-item-select (or (:onItemSelect props) (fn []))]
    [:ul
      (util/deep-merge
        (r/props this)
        {:role "menu"
         :aria-labelledby (:id props)
         :style (merge
                  (js->clj (or (:style (r/props this))
                               (:container-style (r/props this))))
                  {:display visible?})
         :class (util/trim (str classes " " (:className props)))
         :on-mouse-out (fn [e]
                         (when toggleOnHover
                           (hide-dropdown e dropdown-id dropdown-cursor)))
         :on-mouse-over (fn [e]
                          (show-dropdown e dropdown-id dropdown-cursor))})
      (util/map-children
        (fn [i c]
          (.cloneElement
            js/React
            c
            #js {:menu id
                 :dropdown dropdown-id
                 :alwaysInactive always-inactive
                 :on-item-select on-item-select
                 :key i})) (:children props))]))

(def menu
  (with-meta
    menu-class
    {:component-will-unmount
      (fn [this]
        (let [id (aget this "id")]
          (swap! menus dissoc id)
          (swap! menu-items dissoc id)
          (swap! menu-items-set dissoc id)))}))

(defn- gen-classes-menu-item [props]
  (let [disabled? (:disabled props)]
    (str (when disabled? "disabled "))))

(defn- key-down-menu [e menu-cursor menu-items-cursor id]
  (.preventDefault e)
  (if (= (aget e "key") "ArrowDown")
    (let [total (- (count @menu-items-cursor) 1)
          idx (util/indexOf @menu-items-cursor id)
          idx (if (>= idx total) 0 (+ idx 1))
          next-id (get @menu-items-cursor idx)
          item-cursor (r/cursor menu-cursor [next-id])
          this (:this @item-cursor)
          dom-node (r/dom-node this)
          menu-item (.querySelector dom-node "a[role=menuitem]")]
      (deactivate-items menu-cursor)
      (when (not (nil? dom-node))
        (aset this "is-active" true)
        (goog.dom.classes.add dom-node "active"))
      (.focus menu-item))
  (if (= (aget e "key") "ArrowUp")
    (let [total (- (count @menu-items-cursor) 1)
          idx (util/indexOf @menu-items-cursor id)
          idx (if (<= idx 0) total (- idx 1))
          prev-id (get @menu-items-cursor idx)
          item-cursor (r/cursor menu-cursor [prev-id])
          this (:this @item-cursor)
          dom-node (r/dom-node this)
          menu-item (.querySelector dom-node "a[role=menuitem]")]
      (deactivate-items menu-cursor)
      (when (not (nil? dom-node))
        (aset this "is-active" true)
        (goog.dom.classes.add dom-node "active"))
      (.focus menu-item))
  (if (= (aget e "key") "Enter")
    (let [item-cursor (r/cursor menu-cursor [id])]
      (menu-item-click menu-cursor item-cursor))))))

(defn menu-item [props]
  (util/debug "menu-item")
  (let [this (r/current-component)
        id (util/get-id this props)
        menu-id (:menu props)
        dropdown-id (:dropdown props)
        dropdown-cursor (r/cursor dropdowns [dropdown-id])
        menu-cursor (r/cursor menus [menu-id])
        menu-items-set-cursor (r/cursor menu-items-set [menu-id])
        menu-items-cursor (r/cursor menu-items [menu-id])
        item-cursor (r/cursor menu-cursor [id])
        always-inactive (:alwaysInactive props)
        active? (if (not (nil? (aget this "is-active?")))
                  (aget this "is-active?")
                  (:active props))
        active? (if (not (nil? always-inactive))
                  (not always-inactive)
                  active?)
        _ (aset this "is-active?" active?)
        _ (reset! item-cursor {:props props
                               :this this})
        classes (gen-classes-menu-item props)
        header? (:header props)
        h [:li {:role "presentation"
                :class "dropdown-header"}
            (:children props)]
        divider? (:divider props)
        hidden? (:hidden @dropdown-cursor)
        d [:li {:role "presentation"
                :class "divider"}]
        no-hover? (:noHover props)
        final-props (merge
                      (r/props this)
                      {:role "presentation"
                       :class (util/trim
                                (str classes
                                   " "
                                   (:className props)))})
        n [:li final-props
            (:children props)]
        check-if-active (fn [cb]
                          (when (not always-inactive)
                            (cb)))]
    (if header?
      (when (not hidden?) h)
    (if divider?
      (when (not hidden?) d)
    (if no-hover?
      (when (not hidden?) n)
      (let [is-stored? (get @menu-items-set-cursor id)
            final-props (merge
                          final-props
                          {:class (util/trim
                                    (str (when active?
                                         "active ") (:class final-props)))})
            _ (when (nil? is-stored?)
                (swap! menu-items-set-cursor conj id)
                (swap! menu-items-cursor conj id))]
        (when (not hidden?)
          [:li final-props
            [:a {:role "menuitem"
                 :tabIndex "-1"
                 :href (:href props)
                 :on-key-down (fn [e]
                                (check-if-active #(key-down-menu e menu-cursor menu-items-cursor id)))
                 :on-mouse-over (fn [e]
                              (check-if-active #(show-dropdown e dropdown-id dropdown-cursor)))
                 :on-click (fn [e]
                             (.preventDefault e)
                             (check-if-active #(menu-item-click menu-cursor item-cursor)))
                 :on-touch-end (fn [e]
                                 (.preventDefault e)
                                 (check-if-active #(menu-item-click menu-cursor item-cursor)))}
              (:children props)]])))))))

(defn dropdown [props]
  (util/debug "dropdown")
  (let [this (r/current-component)
        id (util/get-id this props)
        on-set-select-item (or (:onSetSelectItem props) (fn []))
        _ (on-set-select-item (fn [k v]
                                (select-item id k v)))]
    [:div
      (merge
        props
        {:class (util/trim (str "dropdown " (:className props)))})
      (util/map-children
        (fn [i c]
          (.cloneElement
            js/React
            c
            #js {:dropdown id
                 :toggleOnHover (:toggleOnHover props)
                 :onDropdownSetSelectItem on-set-select-item
                 :key i})) (:children props))]))

(defn dropdown-button [props]
  (util/debug "dropdown-button")
  (let [this (r/current-component)
        active? (:pressed props)
        tab? (:tab props)
        nav? (:nav props)
        dropdown-id (:dropdown props)
        dropdown-cursor (r/cursor dropdowns [dropdown-id])
        classes (str "dropdown-toggle "
                     (when active? "active "))
        toggle-on-hover? (:toggleOnHover props)
        on-click (or (:onClick props)
                     (:on-click props)
                     (fn []))
        toggle-dropdown-event (fn [e]
                                (force-hide-dropdown)
                                (toggle-dropdown e dropdown-id dropdown-cursor)
                                (when on-click (on-click)))
        show-dropdown-event (fn [e]
                              (show-dropdown e dropdown-id dropdown-cursor))
        hide-dropdown-event (fn [e]
                              (hide-dropdown e dropdown-id dropdown-cursor))]
    (if (or tab? nav?)
      [:a (merge
            props
            {:href "#"
             :class (util/trim classes)
             :hidden nil
             :onDropdownSetSelectItem nil
             :data-toggle "dropdown"
             :on-click toggle-dropdown-event
             :on-mouse-out (when toggle-on-hover? hide-dropdown-event)
             :on-mouse-over (when toggle-on-hover? show-dropdown-event)})
        (:children props)]
      [button/button
        (merge
          props
          {:type "button"
           :className (util/trim classes)
           :hidden nil
           :onDropdownSetSelectItem nil
           :data-toggle "dropdown"
           :on-click toggle-dropdown-event
           :on-mouse-out (when toggle-on-hover? hide-dropdown-event)
           :on-mouse-over (when toggle-on-hover? show-dropdown-event)})])))

(dispatcher/subscribe
  :click-menu
  (fn [{:keys [data]}]
    (hide-all-dropdowns data)))
