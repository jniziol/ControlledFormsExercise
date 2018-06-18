import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    formName: "",
    formEmail: "",
    formPosition: "",
    participants: []
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  createParticipant = () => {
    this.setState((previousState) => {
      return (
        { participants: [ ...previousState.participants, 
            { name: previousState.formName, 
              email: previousState.formEmail, 
              position: previousState.formPosition 
            }], 
          formEmail: "", 
          formPosition: "", 
          formName: ""
        }
      )
    })   
  }

  render() {
    return (
      <div className="App">
        <label>
          Name: 
          <input type="text" name="formName" value={this.state.formName} onChange={this.handleChange} />
        </label>
        <label>
          Email:
          <input type="email" name="formEmail" value={this.state.formEmail} onChange={this.handleChange} />
        </label>
        <label>
          Position:
          <select name="formPosition" value={this.state.formPosition} onChange={this.handleChange}>
            <option value="Player">Player</option>
            <option value="Coach">Coach</option>
            <option value="Spectator">Spectator</option>
            <option value="Trainer">Trainer</option>
          </select>
        </label>
        <button onClick={this.createParticipant}>Create Player</button>
        {this.state.participants.map((participant) => {
          return (
            <div>
              Name: {participant.name}
              Email: {participant.email}
              Position: {participant.position} 
            </div>
          )
        })}
      </div>
    );
  }
}

export default App;
