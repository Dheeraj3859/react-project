import React from "react";
import ReactDom, { render } from "react-dom";
import Table1 from "./Table1";
import "./index.css";
import Form from "./Form";
class App extends React.Component {
  state = {
    characters: [],
  };

  removeChar = (index) => {
    const { characters } = this.state;

    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index;
      }),
    });
  };

  handleSubmit = (character) => {
    this.setState({ characters: [...this.state.characters, character] });
  };

  render() {
    const { characters } = this.state;

    return (
      <div className="container">
        <h1>React Tutorial</h1>
        <p>Add a character with a name and a job to the table.</p>
        <Table1
          characterData={characters}
          removeChar={this.removeChar}
        />
        <h3>Add New</h3>
        <Form handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}



ReactDom.render(<App />, document.getElementById("root"));

