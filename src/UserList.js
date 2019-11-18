import React, { Component } from "react";
import User from "./User";
import { getUsers } from "./UserService";


class UserList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
    }

    componentDidMount = () => {
        getUsers().then(users => {
          this.setState({
            users: users
          });
        });
      };

    render = () => {
        return this.state.users.map(user => <User data={user} key={user.id} />);
    };
}

export default UserList;