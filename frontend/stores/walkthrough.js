import {EventEmitter} from 'events';
import dispatcher from './../dispatcher/dispatcher';
import Steps from './../steps';
var _walkthrough = {
    steps: Steps.feed
};
var CHANGE_EVENT = 'CHANGE';
var WalkthroughStore = $.extend( {},  EventEmitter.prototype);

WalkthroughStore.addChangeListener = function(callback){
  this.on(CHANGE_EVENT, callback);
};

WalkthroughStore.getSteps = () => {
    return _walkthrough.steps;
};

WalkthroughStore.removeChangeListener = function(callback){
  this.removeListener(CHANGE_EVENT, callback);
};

WalkthroughStore.dispatcherID = dispatcher.register(function(payload){
    switch (payload.actionType) {
      default:
        return;
    }
  });

export default WalkthroughStore;
