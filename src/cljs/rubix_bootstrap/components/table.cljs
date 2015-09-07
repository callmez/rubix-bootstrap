(ns rubix-bootstrap.components.table
  (:require [reagent.core :as r]
            [cljsjs.util :as util]))

(defn- gen-classes [props]
  (let [hover? (:hover props)
        striped? (:striped props)
        bordered? (:bordered props)
        collapsed? (:collapsed props)
        condensed? (:condensed props)
        align-top? (:alignTop props)
        align-middle? (:alignMiddle props)
        align-bottom? (:alignBottom props)]
    (str "table "
         (when hover? "table-hover ")
         (when striped? "table-striped ")
         (when bordered? "table-bordered ")
         (when collapsed? "table-collapsed ")
         (when condensed? "table-condensed ")
         (when align-top? "table-top-align ")
         (when align-middle? "table-middle-align ")
         (when align-bottom? "table-bottom-align "))))

(defn- table-construct [props classes]
  [:table
    (merge
      props
      {:class (util/trim (str classes " " (:className props)))})
    (:children props)])

(defn table [props]
  (let [this (r/current-component)
        classes (gen-classes props)
        responsive? (:responsive props)]
    (if responsive?
      [:div.table-responsive
        [table-construct props classes]]
      [table-construct props classes])))
