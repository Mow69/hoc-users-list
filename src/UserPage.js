import React, {Component} from 'react';
import {getUser} from './UserService';
import {CubeGrid} from 'better-react-spinkit';

class UserPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            loading: true
        }
    }

    componentDidMount() {
        const {id} = this.props.match.params;
        getUser(id).then(user => this.setState({
            user: user,
            loading: false
        }));
    }

    render = () => {
        if (this.state.user && this.state.user.name) {
            return (
                <div className="row">
                    <div className="col">
                        <h1>{this.state.user.name}</h1>
                        <a href="/">Retour à la liste</a>
                    </div>
                </div>
            )
        } else {
            return <CubeGrid size={50}/>;
        }
    }
}

export default UserPage;