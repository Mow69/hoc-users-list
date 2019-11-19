import React, { Component } from "react";
import User from "./User";

class UserList extends Component {

    render = () => {
        return (
            <table>
                <tbody>
                {this.props.users.map(user => <User data={user} key={user.id} />)}
                </tbody>
            </table>
            );
    };
}

export default UserList;