(ns rubix-bootstrap.components.modal
  (:require [reagent.core :as r]
            [goog.events]
            [goog.dom]
            [goog.style]
            [goog.dom.classes]
            [cljsjs.util :as util]))

(defonce modal-manager (r/atom nil))
(defonce modal-props (r/atom {}))

(defn set_modal_manager [m]
  (reset! modal-manager m))

(defn- common-el [class-name props]
  (let [this (r/current-component)]
    [:div
      (merge
        (r/props this)
        {:class (util/trim (str class-name " " (:className props)))})
      (:children props)]))

(defn modal-footer [props]
  [common-el "modal-footer" props])

(defn modal-body [props]
  [common-el "modal-body" props])

(defn modal-header [props]
  [common-el "modal-header" props])

(defn- gen-classes-md [props]
  (let [sm? (:sm props)
        lg? (:lg props)]
    (str "modal-dialog "
         (when sm? "modal-sm ")
         (when lg? "modal-lg "))))

(defn show-modal []
  (let [p @modal-props
        on-show (:on-show p)
        on-shown (:on-shown p)]
    (on-show)
    (swap! modal-props assoc :in true
                             :style {:display "block"})
    (on-shown)))

(defn hide-modal-backdrop []
  (let [backdrop (.querySelector js/document "body>.modal-backdrop")]
    (goog.dom.classes.remove backdrop "in")
    (goog.dom.classes.add backdrop "out")))

(defn show-modal-backdrop []
  (let [backdrop (.querySelector js/document "body>.modal-backdrop")]
    (goog.dom.classes.remove backdrop "out")
    (goog.dom.classes.add backdrop "in")))

(defn open-modal []
  (show-modal)
  (show-modal-backdrop))

(defn close-modal []
  (let [p @modal-props
        on-hide (:on-hide p)
        on-hidden (:on-hidden p)]
    (on-hide)
    (hide-modal-backdrop)
    (on-hidden)))

(defn modal [props]
  (let [this (r/current-component)
        modal-dialog-classes (gen-classes-md props)
        p @modal-props
        in? (:in p)
        out? (:out p)
        style (:style p)
        on-show (or (:onShow props) (fn []))
        on-shown (or (:onShown props) (fn []))
        on-hide (or (:onHide props) (fn []))
        on-hidden (or (:onHidden props) (fn []))
        disable-auto-close (:disableAutoClose props)
        _ (swap! modal-props assoc :on-show on-show
                                   :on-shown on-shown
                                   :on-hide on-hide
                                   :on-hidden on-hidden)
        close-modal-event (fn [e]
                            (.preventDefault e)
                            (when (not disable-auto-close)
                              (let [container (js/document.getElementById "modal-dialog")]
                                (when (not (nil? container))
                                  (when (not (goog.dom.contains
                                             container
                                             e.target))
                                  (.remove @modal-manager))))))]
    [:div
      (util/deep-merge
        (r/props this)
        {:role "dialog"
         :tabIndex -1
         :style style
         :class (util/trim
                  (str "modal fade  "
                     (when in? "in ")
                     (:className props)))
         :on-click close-modal-event
         :on-touch-end close-modal-event})
      [:div {:id "modal-dialog"
             :class (util/trim (str modal-dialog-classes " " (:className props)))}
        [:div.modal-content
          (:children props)]]]))

(when (.hasOwnProperty js/window "document")
  (let [body js/document.body
        fragment (goog.dom.htmlToDocumentFragment
                   "<div class='modal-backdrop fade out'></div>")]
    (goog.events.listen
      js/window
      goog.events.EventType.LOAD
      (fn []
        (goog.dom.classes.add body "modal-open")
        (goog.dom.append body fragment)))))
