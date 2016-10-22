import React from 'react';
import ApiUtil from './../util/api_util';
import UsersStore from './../stores/users';
import UserListItem from './UserListItem';
import ApiActions from './../actions/api_actions';

class Users extends React.Component {

    constructor (props) {
        super(props);

        this.state = {
            users: [],
            page: 1,
            loading: true
        };

        this._changed = this._changed.bind(this);
    }

    componentDidMount () {
        UsersStore.addChangeListener(this._changed);
        ApiUtil.fetchUserList(this.state.page);
    }

    componentWillUnmount () {
        UsersStore.removeChangeListener(this._changed);
    }

    _changed (){
        this.setState({loading: false});
        if (UsersStore.all().length !== 0){
            this.setState({users: UsersStore.all()});
        }
        else {
            this.setState({page: this.state.page - 1});
        }
    }

    followUser (user) {
        var follow = {follower_id: user};
        ApiUtil.followUser(follow, ApiActions.updateFollowStatus);
    }

    unfollowUser (user) {
        var follow = {follower_id: user};
        ApiUtil.unfollowUser(follow, ApiActions.updateFollowStatus);
    }

  render (){
    return (
        <div style={{marginBottom: 40}}>
            <div className="users-content">
                <div className='discover-box' style={{margin: '0 auto'}}>
                    <div className='discover'>DISCOVER PEOPLE</div>
                    <ul className="user-list">
                        {this.state.loading && <div className="spinner"></div>}
                        {this.state.users.map(user => {
                            return <UserListItem key={`user-${user.id}`}
                                user={user}
                                followUser={this.followUser}
                                unfollowUser={this.unfollowUser}/>;
                      })}
                    </ul>
                </div>
            </div>
        </div>
    );
  }
}

export default Users;
