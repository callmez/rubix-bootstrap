(ns rubix-bootstrap.components.common.buttonclasses
  (:require [clojure.string :as s]))

(defn gen-classes [props]
  (let [xs? (:xs props)
        sm? (:sm props)
        lg? (:lg props)
        block?  (:block  props)
        active? (:active props)
        navbar? (:navbar props)
        retainBackground? (:retainBackground props)
        rounded? (:rounded props)
        onlyOnHover? (:onlyOnHover props)
        inverse? (or (:inverse props)
                     retainBackground?)
        outlined? (or (:outlined props)
                      onlyOnHover?
                      inverse?
                      retainBackground?)
        bsStyle (when (not (nil? (:bsStyle props)))
                  (filter
                    not-empty
                    (s/split (:bsStyle props) #"\s|,")))
        styles (if (not (nil? bsStyle))
                 (apply str
                    (for [st bsStyle]
                       (str " btn-" (s/trim st) " ")))
                 " btn-default ")]
    (str "btn "
         (when xs? " btn-xs ")
         (when sm? " btn-sm ")
         (when lg? " btn-lg ")
         (when active? " active ")
         (when block? " btn-block ")
         (when navbar? " navbar-btn ")
         (when inverse? " btn-inverse ")
         (when rounded? " btn-rounded ")
         (when outlined? " btn-outlined ")
         (when onlyOnHover? " btn-onlyOnHover ")
         (when retainBackground? " btn-retainBg ")
         styles
         " ")))
