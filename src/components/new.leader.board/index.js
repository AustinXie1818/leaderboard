
import React from 'react';

import { RIEToggle, RIEInput, RIETextArea, RIENumber, RIETags, RIESelect } from 'riek';

import _ from 'lodash';

import { Button } from 'react-bootstrap';

import './new.leader.board.css';

class NewLeaderBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'New Leader Board',
      tournaments: [{id: 't1', label: 'TOURNAMENT 1'}, {id: 't2', label: 'TOURNAMENT 2'}],
      players: [
        {
          name: 'player1',
          't1': 1,
          't2': 2
        },
        {
          name: 'player2',
          't1': 2,
          't2': 1
        }
      ],
    };

    this.isString           = this.isString.bind(this);
    this.handleBoardChange = this.handleBoardChange.bind(this);
    this.addPlayer = this.addPlayer.bind(this);
  }

  handleBoardChange(value) {
    const propPath = Object.keys(value)[0];
    _.set(this.state, propPath, value[propPath]);
    this.setState(this.state);
  }


  addPlayer() {
    const newPlayer = {
      name: 'new Player',
    };

    this.state.tournaments.forEach((tournament) => {
      newPlayer[tournament] = 'score ?';
    });
    this.state.players.push(newPlayer);
    this.setState(this.state);
  }

  isString(text) {
    return true;
  }

  render() {
    let i = -1, j = -1;

    let BorderHeader = <div/>;
    if (this.state.tournaments.length) {
      let col = -1;
      BorderHeader = <div className="border-header">
        <div className="place-holder header">Player</div>
        {
          this.state.tournaments.map((tournament) => {
            col++;
            return <RIEInput
              key={`tournament${col}`}
              value={this.state.tournaments[col].label}
              change={this.handleBoardChange}
              propName={`tournaments[${col}].label`}
              validate={this.isString}
            />
          })
        }
      </div>
    }

    return (
      <div className="new-leader-board">

        <RIEInput
          value={this.state.name}
          change={this.handleBoardChange}
          propName='name'
          validate={this.isString}
        />

        <br/>

        {BorderHeader}

        {
          this.state.players.map(player => {
            console.log(`player: `, player);
            i++, j++;
            return (
              <div className="new-leader-border">
                <div className={`row${i} player-row`}>
                  <div className={`fixed-col${i} cell`}>
                    <RIEInput
                      key={`player${i}.name`}
                      value={this.state.players[i].name}
                      change={this.handleBoardChange}
                      propName={`players[${i}].name`}
                      validate={this.isString}
                    />
                  </div>

                  {
                    this.state.tournaments.map((tournament) => {
                      return <div className={`tournament-${j} cell`}>
                        <RIEInput
                          key={`player${i}-tournaments[${j}]-score`}
                          value={this.state.players[i][`${tournament.id}`]}
                          change={this.handleBoardChange}
                          propName={`players[${i}][${tournament.id}]`}
                          validate={this.isString}
                        />
                      </div>
                    })
                  }

                </div>
              </div>

            );

          })
        }

        <br/>

        <Button bsStyle="success" onClick={this.addPlayer}>Success</Button>
      </div>
    );
  }

}

export default NewLeaderBoard;