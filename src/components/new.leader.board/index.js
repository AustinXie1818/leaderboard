
import React from 'react';

import { RIEInput } from 'riek';

import _ from 'lodash';

import { Button } from 'react-bootstrap';

import './new.leader.board.css';

import  { bindActionCreators } from 'redux';
import  { connect } from 'react-redux';

import newBoardActionCreators from '../../actions/new.board.action.creator';

const mapDispatchToState = (dispatch) => ({ newBoardActionCreators: bindActionCreators(newBoardActionCreators, dispatch) });


class NewLeaderBoard extends React.Component {
  constructor(props) {
    super(props);
    this.isString           = this.isString.bind(this);
    this.handleBoardChange = this.handleBoardChange.bind(this);
    this.addPlayer = this.addPlayer.bind(this);
    this.addTournament = this.addTournament.bind(this);
    this.saveNewTournament = this.saveNewTournament.bind(this);

    this.state = props.newBoard;
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
      newPlayer[tournament.id] = 'score ?';
    });
    this.state.players.push(newPlayer);
    this.setState(this.state);
  }

  addTournament(e) {
    const colSize = this.state.tournaments.length;
    this.state.tournaments.push({id: `t${colSize}`, label: `TOURNAMENT ${colSize + 1}`});
    this.state.players.forEach((player) => {
      player[`t${colSize}`] = 'Score?'
    });

    this.setState(this.state);
  }

  saveNewTournament() {
    this.props.newBoardActionCreators.saveNewBoardAction(this.state);
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

        <Button bsStyle="success" onClick={this.addPlayer}>add another row</Button>&nbsp;&nbsp;&nbsp;
        <Button bsStyle="success" onClick={this.addTournament}>add another column</Button>&nbsp;&nbsp;&nbsp;
        <Button bsStyle="success" onClick={this.saveNewTournament}>SAVE</Button>
      </div>
    );
  }

}

export default connect((state) => state, mapDispatchToState)(NewLeaderBoard);