import React, { Component } from "react";

class User extends Component {
    render = () => {
        const { id, name, username, email } = this.props.data;

        return (
            <>
                <tr className="mt-1">
                    <td className="col-12 col-lg-4">{name}</td>
                    <td className="col-12 col-lg-4">{username}</td>
                    <td className="col-12 col-lg-4">{email}</td>
                    <td>
                        <a href={`/user/${id}`} className="btn btn-success">
                            Voir
                        </a>
                    </td>
                </tr>
            </>

        );
    }
}



export default User;