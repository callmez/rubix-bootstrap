(ns cljsjs.dispatcher
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [reagent.core :as r]
            [cljs.core.async :refer [chan pub sub unsub <! >!]]))

(defonce c (chan))
(defonce subscriptions (r/atom {}))

(defonce publication
  (pub c #(:topic %)))

(defn notiy-fn [channel callback]
  (go-loop []
    (callback (<! channel))
    (recur)))

(defn subscribe [topic callback]
  (let [subscription (chan)]
    (sub publication topic subscription)
    (swap! subscriptions assoc topic {:subscription subscription})
    (notiy-fn subscription callback)))

(defn unsubscribe [topic]
  (let [subscription-cursor (r/cursor subscriptions [topic])
        subscription (:subscription @subscription-cursor)]
    (unsub publication topic subscription)
    (swap! subscriptions dissoc topic)))

(defn publish [topic & [data]]
  (go
    (>! c {:topic topic
           :data data})))
