(ns cljsjs.util
  (:require [reagent.core :as r]
            [clojure.string :as s]))

(defonce debug? false)
(defonce counter (r/atom 0))

(defn reset-counter! []
  (reset! counter 0))

(defn deep-merge* [& maps]
  (let [f (fn [old new]
             (if (and (map? old) (map? new))
                 (merge-with deep-merge* old new)
                 new))]
    (if (every? map? maps)
      (apply merge-with f maps)
     (last maps))))

(defn deep-merge [& maps]
  (let [maps (filter identity maps)]
    (assert (every? map? maps))
   (apply merge-with deep-merge* maps)))

(defn indexOf [v p]
  (first
    (first
      (filter
        #(= (second %) p)
         (map-indexed vector v)))))

(defn gen-id []
  (swap! counter inc))

(defn get-id [this props]
  (or (:id props)
      (aget this "id")
      (aset this "id" (gen-id))))

(defn map-children [func rchildren]
  (try
    (let [_ (count rchildren)]
      (map-indexed func rchildren))
  (catch js/Error err
    (func 0 rchildren))))

(defn debug [& args]
  (when debug?
    (.apply (.-log js/console) js/console (clj->js args))))

(defn convert-props [a]
  (let [b (if (:className a)
            (merge a {:class (:className a)})
            a)
        c (if (:htmlFor b)
            (merge b {:for (:htmlFor a)})
            b)
        d (dissoc c :className)
        e (dissoc d :htmlFor)]
    e))

(defn trim [st]
  (let [st (s/replace st #"\s+" " ")]
    (s/trim st)))
