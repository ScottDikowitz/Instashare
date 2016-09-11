  import {EventEmitter} from 'events';
  import dispatcher from './../dispatcher/dispatcher';

  var CHANGE_EVENT = "change";
  var modal = false;
  var AnimationStore = $.extend({}, EventEmitter.prototype, {

    modalShow: function(){
      return modal;
    },

    addChangeHandler: function (callback) {
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeHandler: function (callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },

    closeModal: function(){
      modal = false;
    },

    openModal: function(){
      modal = true;
    },

    dispatcherId: dispatcher.register(function (payload) {
      switch (payload.actionType) {

        case "CLOSE_MODAL":
          AnimationStore.closeModal();
          AnimationStore.emit(CHANGE_EVENT);
          break;
        case "OPEN_MODAL":
          AnimationStore.openModal();
          AnimationStore.emit(CHANGE_EVENT);
          break;

      }
    }),

  });

export default AnimationStore;
