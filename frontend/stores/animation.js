(function (root) {
  var CHANGE_EVENT = "change";
  var modal = false;
  root.AnimationStore = $.extend({}, EventEmitter.prototype, {

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

    dispatcherId: AppDispatcher.register(function (payload) {
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
})(this);
