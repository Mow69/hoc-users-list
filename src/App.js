import React, { Component } from "react";
import Nav from "./Nav";
import UserList from "./UserList";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("Construction du composant");
    // Le constructeur est le seul endroit où on peut manipuler directement le state
    this.state = {
      users: []
    };
  }


  render = () => {
    console.log("Dans le render avant return");
    return (
      <>
        <Nav />
        <div className="container">
          <div className="row">
            <div className="col p-2">
              <h1>Utilisateurs</h1>
            </div>
          </div>
          <table>
            <UserList />
          </table>
        </div>
      </>
    );
  };
}

export default App;
