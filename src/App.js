import React from "react";
import "./styles.css";

class App extends React.Component {
  state = {
    clients: [
      { id: 1, name: "hamza" },
      { id: 2, name: "Hammouda" },
      { id: 3, name: "amine" },
      { id: 4, name: "haroun" }
    ],
    compteur: 0
  };
  title = "Liste des clients";

  handleClick = () => {
    console.log(this.state);
    this.setState({
      compteur: this.state.compteur + 1
    });
  };

  handleDelete = (id) => {
    console.log(id);
    const clients = this.state.clients.slice();
    const index = clients.findIndex((client) => {
      return client.id === id;
    });
    clients.splice(index, 1);
    this.setState({ clients: clients });
  };

  addClient = () => {
    // faire une compie de state
    const clients = this.state.clients.slice();
    clients.push({ id: 5, name: "Zahra zozo" });
    this.setState({
      clients: clients
    });
  };

  render() {
    const elements = this.state.clients.map((client) => {
      return (
        <li>
          {" "}
          {client.name}{" "}
          <button
            onClick={() => {
              this.handleDelete(client.id);
            }}
          >
            {" "}
            X{" "}
          </button>
        </li>
      );
    });

    return (
      <div>
        <h1> {this.title} </h1>
        {this.state.compteur}{" "}
        <button onClick={this.addClient}> Incrementer </button>
        <ul>{elements}</ul>
        <form>
          <input type="text" placeholder="Add a client" />
          <button type="submit"> Add </button>
        </form>
      </div>
    );
  }
}

export default App;
