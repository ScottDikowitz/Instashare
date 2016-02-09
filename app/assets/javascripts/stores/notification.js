(function (root) {
  var _notificatons = [];
  var CHANGE_EVENT = "change";

  root.NotificationStore = $.extend({}, EventEmitter.prototype, {



    addChangeHandler: function (callback) {
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeHandler: function (callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },

    dispatcherId: AppDispatcher.register(function (payload) {
      switch (payload.actionType) {

        case "NOTIFICATIONS_RECEIVED":
          _notifications = payload.notifications;
          NotificationStore.emit(CHANGE_EVENT);
          break;

      }
    }),

  });
})(this);
