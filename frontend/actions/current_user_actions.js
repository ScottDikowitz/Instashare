import dispatcher from './../dispatcher/dispatcher';
import CurrentUserConstants from './../constants/current_user_constants';

var CurrentUserActions = {
  receiveCurrentUser: function (currentUser) {
    dispatcher.dispatch({
      actionType: CurrentUserConstants.RECEIVE_CURRENT_USER,
      currentUser: currentUser
    });
  }
};

export default CurrentUserActions;
