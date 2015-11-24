(function(){

  var _location = {};
  var CHANGE_EVENT = 'CHANGE';
  var LocationStore = window.LocationStore = $.extend( {},  EventEmitter.prototype);
  LocationStore.getLocation = function(){
    return _location;
  };

  LocationStore.addChangeListener = function(callback){
    this.on(CHANGE_EVENT, callback);
  };

  LocationStore.removeChangeListener = function(callback){
    this.removeListener(CHANGE_EVENT, callback);
  };

  LocationStore.resetLocation = function(location){
      _location = location;
  };

  LocationStore.dispatcherID = AppDispatcher.register(function(payload){
      if(payload.actionType === LocationConstants.LOCATION_RECEIVED){
        LocationStore.resetLocation(payload.location);
        LocationStore.emit(CHANGE_EVENT);
        
      }
    });

})();
