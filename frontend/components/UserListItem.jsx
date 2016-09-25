import React from 'react';
import ApiUtil from './../util/api_util';
import UsersStore from './../stores/users';

class UserListItem extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            following: false
        };
    }

    render () {
        const {user} = this.props;
        return (
            <li key={user.id}
                style={{
                    position: 'relative',
                    padding: 10,
                    backgroundColor: '#fff'}}>
                <div style={{position: 'relative'}}>
                    <div style={{display: 'inline-block',
                            verticalAlign: 'middle'}}>
                        <a href={"#/users/" + user.username} className="user-thumb" style={{backgroundImage: `url(${user.pic})`}}/>
                        <a href={"#/users/" + user.username} className="name-box"><span className="uname">{user.username}</span></a>
                    </div>
                    <button className={user.following ? 'follows following-button' : 'follows follow-button'}
                        onClick={user.following ? this.props.unfollowUser.bind(null, user.id) : this.props.followUser.bind(null, user.id)}
                        style={{position: 'absolute',
                            right: 0}}>
                            {user.following ? 'Following' : 'Follow'}
                    </button>
                </div>
            </li>
        );
    }
}

export default UserListItem;
