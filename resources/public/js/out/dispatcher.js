goog.provide('rubix.dispatcher');

goog.require('goog.events');
goog.require('goog.events.EventTarget');

rubix.dispatcher.Dispatcher = function() {
  goog.base(this);
}

goog.inherits(rubix.dispatcher.Dispatcher, goog.events.EventTarget);
