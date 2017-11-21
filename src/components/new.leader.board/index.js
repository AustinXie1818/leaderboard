
import React from 'react';

import { RIEToggle, RIEInput, RIETextArea, RIENumber, RIETags, RIESelect } from 'riek';

import _ from 'lodash';
// import {Route} from 'react-router-dom';

// import FontAwesome from 'react-fontawesome';

//import './user.home.css';

import { Button } from 'react-bootstrap';

class NewLeaderBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'New Leader Board',
      players: [
        {
          name: 'player1'
        },
        {
          name: 'player2'
        }
      ]
    };

    this.httpTaskCallback   = this.httpTaskCallback.bind(this);
    this.isString           = this.isString.bind(this);
    this.handlePlayerChange = this.handlePlayerChange.bind(this);
    this.addPlayer = this.addPlayer.bind(this);
  }

  httpTaskCallback(text) {
    console.log(text);
    this.setState({
      name: text.name
    });
  }

  handlePlayerChange(value) {
    console.log(`this.state: `, this.state);
    const propPath = Object.keys(value)[0];
    _.set(this.state, propPath, value[propPath]);
    this.setState(this.state);
  }

  addPlayer() {
    this.state.players.push({name: 'Player (new)'});
    this.setState(this.state);
  }

  isString(text) {
    return true;
  }

  render() {
    let i = -1;
    return (
      <div className="new-leader-board">

        <RIEInput
          value={this.state.name}
          change={this.httpTaskCallback}
          propName='name'
          validate={this.isString}
        />
        <br/>

        {
          this.state.players.map(player => {
            console.log(`player: `, player);
            i++;
            return <RIEInput
              key={`player${i}`}
              value={this.state.players[i].name}
              change={this.handlePlayerChange}
              propName={`players[${i}].name`}
              validate={this.isString}
            />;
          })
        }

        <br/>

        <Button bsStyle="success" onClick={this.addPlayer}>Success</Button>
      </div>
    );
  }

}

export default NewLeaderBoard;