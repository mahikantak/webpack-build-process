import React, { Component } from 'react';

import AllUserList from '../components/UserList/UserList';

class Users extends Component {
    render () {
        return (
            <div>
                <h1>All Users</h1>
                <AllUserList />
            </div>
        );
    }
}

export default Users;