(function(){

  var _location = {};
  var _locations = [];
  var CHANGE_EVENT = 'CHANGE';
  var LocationStore = window.LocationStore = $.extend( {},  EventEmitter.prototype);
  LocationStore.getLocation = function(){
    return _location;
  };

  LocationStore.getLocations = function(){
    return _locations.slice();
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

  LocationStore.resetLocations = function(locations){
    _locations = locations;
  };

  LocationStore.dispatcherID = AppDispatcher.register(function(payload){
      if(payload.actionType === LocationConstants.LOCATION_RECEIVED){
        LocationStore.resetLocation(payload.location);
        LocationStore.emit(CHANGE_EVENT);

      }
      else if (payload.actionType === LocationConstants.LOCATIONS_RECEIVED){
        LocationStore.resetLocations(payload.locations);
        LocationStore.emit(CHANGE_EVENT);
      }
    });

})();
