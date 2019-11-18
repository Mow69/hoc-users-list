import React, { Component } from "react";

class User extends Component {
    render = () => {
        const { name } = this.props.data;
        const { username } = this.props.data;
        const { email } = this.props.data;


        return (

                <tr>
                    <td className="col-12 col-lg-4">{name}</td>
                    <td className="col-12 col-lg-4">{username}</td>
                    <td className="col-12 col-lg-4">{email}</td>
                </tr>

        );
    };
}

export default User;