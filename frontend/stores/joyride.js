import {EventEmitter} from 'events';
import dispatcher from './../dispatcher/dispatcher';
var _joyride = {};
var CHANGE_EVENT = 'CHANGE';
var JoyrideStore = $.extend( {},  EventEmitter.prototype);


JoyrideStore.isReady = function(){
  return !!_joyride.addStep;
};

JoyrideStore.getFunc = function(){
  return _joyride.addStep;
};

JoyrideStore.getJoyride = () => {
    return _joyride;
};

JoyrideStore.addChangeListener = function(callback){
  this.on(CHANGE_EVENT, callback);
};

JoyrideStore.removeChangeListener = function(callback){
  this.removeListener(CHANGE_EVENT, callback);
};

JoyrideStore.addStep = function(addStep){
    _joyride.addStep = addStep;
};

JoyrideStore.dispatcherID = dispatcher.register(function(payload){
    switch (payload.actionType) {
      case 'ADD_STEP':
        _joyride.addStep = payload.addStep;
        JoyrideStore.emit(CHANGE_EVENT);
        break;
    }
  });

export default JoyrideStore;
