  import {EventEmitter} from 'events';
  import dispatcher from './../dispatcher/dispatcher';
  var _notifications = {};
  var CHANGE_EVENT = "change";

  var NotificationStore = $.extend({}, EventEmitter.prototype, {

    getNotifications: function () {
        return _notifications;
    },

    addChangeHandler: function (callback) {
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeHandler: function (callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },

    dispatcherId: dispatcher.register(function (payload) {
      switch (payload.actionType) {
        case "NOTIFICATIONS_RECEIVED":
          _notifications = payload.notifications;
          NotificationStore.emit(CHANGE_EVENT);
          break;
      }
    }),

  });

export default NotificationStore;
