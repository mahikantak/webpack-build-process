import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import classes from './components/UserList/user.css';
import Admin from './containers/Admin';
import Users from './containers/User';
class App extends Component {
    render () {
        return (
            <div>
                <div className={classes.menuitem}>
                    <Link to="/">Admin</Link> |
                    <Link to="/user">Users</Link>
                </div>
                <div>
                    <Route path="/" exact component={Admin} />
                    <Route path="/user" component={Users} />
                </div>
            </div>
        );
    }
}

export default App;