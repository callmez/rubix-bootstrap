(ns rubix-bootstrap.core
    (:require [reagent.core :as r :refer [atom]]
              [reagent.session :as session]
              [cljsjs.util :as util]
              [cljsjs.react :as react]
              [cljsjs.dispatcher :as dispatcher]

              [rubix-bootstrap.components.grid :as grid]
              [rubix-bootstrap.components.container :as container]
              [rubix-bootstrap.components.row :as row]
              [rubix-bootstrap.components.col :as col]
              [rubix-bootstrap.components.panel :as panel]

              [rubix-bootstrap.components.button :as button]
              [rubix-bootstrap.components.buttongroup :as button-group]
              [rubix-bootstrap.components.buttontoolbar :as button-toolbar]

              [rubix-bootstrap.components.img :as img]
              [rubix-bootstrap.components.tag :as tag]
              [rubix-bootstrap.components.icon :as icon]
              [rubix-bootstrap.components.alert :as alert]
              [rubix-bootstrap.components.caret :as caret]
              [rubix-bootstrap.components.progress :as progress]
              [rubix-bootstrap.components.pagination :as pagination]
              [rubix-bootstrap.components.breadcrumb :as breadcrumb]
              [rubix-bootstrap.components.labelsandbadges :as labelsandbadges]

              [rubix-bootstrap.components.form :as form]
              [rubix-bootstrap.components.formgroup :as formgroup]

              [rubix-bootstrap.components.table :as table]

              [rubix-bootstrap.components.nav :as nav]
              [rubix-bootstrap.components.tab :as tab]
              [rubix-bootstrap.components.menu :as menu]
              [rubix-bootstrap.components.media :as media]
              [rubix-bootstrap.components.listgroup :as listgroup]
              [rubix-bootstrap.components.input :as input]
              [rubix-bootstrap.components.inputgroup :as inputgroup]
              [rubix-bootstrap.components.checkboxradio :as checkboxradio]
              [rubix-bootstrap.components.select :as select]
              [rubix-bootstrap.components.label :as label]
              [rubix-bootstrap.components.textarea :as textarea]
              [rubix-bootstrap.components.lead :as lead]
              [rubix-bootstrap.components.staticcontrol :as staticcontrol]
              [rubix-bootstrap.components.helpblock :as helpblock]
              [rubix-bootstrap.components.jumbotron :as jumbotron]
              [rubix-bootstrap.components.modal :as modal]

              [rubix-bootstrap.components.accordian :as accordian]))

(defn ^:export reset-globals! []
  (util/reset-counter!)
  (grid/reset-globals!)
  (panel/reset-globals!)
  (menu/reset-globals!)
  (nav/reset-globals!))

(when (.hasOwnProperty js/window "document")
  (goog.events.listen
    js/window
    goog.events.EventType.CLICK
    (fn [e]
      (dispatcher/publish :click-menu e))))

(defn exported [props]
  (let [this (r/current-component)]
    [container/container
      {:fixed true
       :style {:margin-bottom 25}
       :children
         [:div
           [:div
             [:h3 (:name props)]]
           (:children props)]}]))

(def ^:export reactified-grid (r/reactify-component grid/grid))
(def ^:export reactified-container (r/reactify-component container/container))
(def ^:export reactified-row (r/reactify-component row/row))
(def ^:export reactified-col (r/reactify-component col/col))
(def ^:export reactified-panel (r/reactify-component panel/panel))
(def ^:export reactified-panel-body (r/reactify-component panel/panel-body))
(def ^:export reactified-panel-left (r/reactify-component panel/panel-left))
(def ^:export reactified-panel-right (r/reactify-component panel/panel-right))
(def ^:export reactified-panel-header (r/reactify-component panel/panel-header))
(def ^:export reactified-panel-footer (r/reactify-component panel/panel-footer))
(def ^:export reactified-panel-container (r/reactify-component panel/panel-container))

(def ^:export reactified-button (r/reactify-component button/button))
(def ^:export reactified-button-group (r/reactify-component button-group/button-group))
(def ^:export reactified-button-toolbar (r/reactify-component button-toolbar/button-toolbar))

(def ^:export reactified-img (r/reactify-component img/img))
(def ^:export reactified-tag (r/reactify-component tag/tag))
(def ^:export reactified-icon (r/reactify-component icon/icon))
(def ^:export reactified-alert (r/reactify-component alert/alert))
(def ^:export reactified-alert-link (r/reactify-component alert/alert-link))
(def ^:export reactified-caret (r/reactify-component caret/caret))
(def ^:export reactified-progress (r/reactify-component progress/progress))
(def ^:export reactified-progress-group (r/reactify-component progress/progress-group))
(def ^:export reactified-page (r/reactify-component pagination/page))
(def ^:export reactified-pager (r/reactify-component pagination/pager))
(def ^:export reactified-pagination (r/reactify-component pagination/pagination))
(def ^:export reactified-b-link (r/reactify-component breadcrumb/b-link))
(def ^:export reactified-breadcrumb (r/reactify-component breadcrumb/breadcrumb))
(def ^:export reactified-badge (r/reactify-component labelsandbadges/badge))
(def ^:export reactified-blabel (r/reactify-component labelsandbadges/label))

(def ^:export reactified-form (r/reactify-component form/form))
(def ^:export reactified-formgroup (r/reactify-component formgroup/formgroup))

(def ^:export reactified-table (r/reactify-component table/table))

(def ^:export reactified-nav (r/reactify-component nav/nav))
(def ^:export reactified-navbar (r/reactify-component nav/navbar))
(def ^:export reactified-nav-item (r/reactify-component nav/nav-item))
(def ^:export reactified-nav-text (r/reactify-component nav/nav-text))
(def ^:export reactified-nav-link (r/reactify-component nav/nav-link))
(def ^:export reactified-nav-form (r/reactify-component nav/nav-form))
(def ^:export reactified-nav-brand (r/reactify-component nav/nav-brand))
(def ^:export reactified-nav-header (r/reactify-component nav/nav-header))
(def ^:export reactified-nav-button (r/reactify-component nav/nav-button))
(def ^:export reactified-nav-content (r/reactify-component nav/nav-content))
(def ^:export reactified-nav-toggle (r/reactify-component nav/nav-toggle))
(def ^:export reactified-tab (r/reactify-component tab/tab))
(def ^:export reactified-tab-list (r/reactify-component tab/tab-list))
(def ^:export reactified-tab-pane (r/reactify-component tab/tab-pane))
(def ^:export reactified-tab-content (r/reactify-component tab/tab-content))
(def ^:export reactified-tab-dropdown (r/reactify-component tab/tab-dropdown))
(def ^:export reactified-tab-container (r/reactify-component tab/tab-container))
(def ^:export reactified-menu (r/reactify-component menu/menu))
(def ^:export reactified-menu-item (r/reactify-component menu/menu-item))
(def ^:export reactified-dropdown (r/reactify-component menu/dropdown))
(def ^:export reactified-dropdown-button (r/reactify-component menu/dropdown-button))
(def ^:export reactified-media (r/reactify-component media/media))
(def ^:export reactified-media-div (r/reactify-component media/media-div))
(def ^:export reactified-media-body (r/reactify-component media/media-body))
(def ^:export reactified-media-list (r/reactify-component media/media-list))
(def ^:export reactified-media-object (r/reactify-component media/media-object))
(def ^:export reactified-list-group (r/reactify-component listgroup/list-group))
(def ^:export reactified-list-group-item (r/reactify-component listgroup/list-group-item))
(def ^:export reactified-list-group-item-text (r/reactify-component listgroup/list-group-item-text))
(def ^:export reactified-list-group-item-heading (r/reactify-component listgroup/list-group-item-heading))
(def ^:export reactified-media-heading (r/reactify-component media/media-heading))
(def ^:export reactified-input (r/reactify-component input/input))
(def ^:export reactified-inputgroup (r/reactify-component inputgroup/inputgroup))
(def ^:export reactified-inputgroupaddon (r/reactify-component inputgroup/inputgroupaddon))
(def ^:export reactified-inputgroupbutton (r/reactify-component inputgroup/inputgroupbutton))
(def ^:export reactified-radio (r/reactify-component checkboxradio/radio))
(def ^:export reactified-checkbox (r/reactify-component checkboxradio/checkbox))
(def ^:export reactified-select (r/reactify-component select/select))
(def ^:export reactified-label (r/reactify-component label/label))
(def ^:export reactified-textarea (r/reactify-component textarea/textarea))
(def ^:export reactified-lead (r/reactify-component lead/lead))
(def ^:export reactified-staticcontrol (r/reactify-component staticcontrol/staticcontrol))
(def ^:export reactified-helpblock (r/reactify-component helpblock/helpblock))
(def ^:export reactified-jumbotron (r/reactify-component jumbotron/jumbotron))
(def ^:export reactified-modal (r/reactify-component modal/modal))
(def ^:export reactified-modal-body (r/reactify-component modal/modal-body))
(def ^:export reactified-modal-header (r/reactify-component modal/modal-header))
(def ^:export reactified-modal-footer (r/reactify-component modal/modal-footer))
(def ^:export open-modal modal/open-modal)
(def ^:export close-modal modal/close-modal)
(def ^:export set_modal_manager modal/set_modal_manager)

(def ^:export reactified-accordian (r/reactify-component accordian/accordian))
(def ^:export reactified-accordian-pane (r/reactify-component accordian/accordian-pane))
(def ^:export reactified-accordian-title (r/reactify-component accordian/accordian-title))
(def ^:export reactified-accordian-content (r/reactify-component accordian/accordian-content))

(def ^:export reactified-homepage (r/reactify-component exported))

; Google Closure Exports
(def ^:export goog.dom.append goog.dom.append)
(def ^:export goog.style.setStyle goog.style.setStyle)
(def ^:export goog.dom.removeNode goog.dom.removeNode)
(def ^:export goog.dom.htmlToDocumentFragment goog.dom.htmlToDocumentFragment)
