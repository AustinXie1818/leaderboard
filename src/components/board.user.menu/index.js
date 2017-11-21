
import React from 'react';

import  { bindActionCreators } from 'redux';
import  { connect } from 'react-redux';
import { MenuItem, NavDropdown } from 'react-bootstrap';

import FontAwesome from 'react-fontawesome';

import './board.user.menu.css';

import newBoardActionCreators from '../../actions/new.board.action.creator';

const mapPropsToState = (state) => ({...state});
const mapDispatchToState = (dispatch) => ({ newBoardActionCreators: bindActionCreators(newBoardActionCreators, dispatch) });

class UserMenu extends React.Component {
  constructor(props) {
    super(props);

    this.clickNewBoard = this.clickNewBoard.bind(this);
  }

  clickNewBoard(e) {
    e.preventDefault();
    this.props.newBoardActionCreators.newBoardAction({name: 'New Board2', players: []});
    const { history } = this.props;
    history.push('/user/new');
  }

  render() {
    return (
    <NavDropdown eventKey="4" title={<span><FontAwesome name='align-justify' size='2x'/></span>}
                 id="nav-dropdown">
      <MenuItem eventKey="1">Edit</MenuItem>
      <MenuItem eventKey="1">See all leaderboards</MenuItem>
      <MenuItem eventKey="1" onClick={this.clickNewBoard}>Create new leaderboard</MenuItem>
      <MenuItem eventKey="1">Log Out</MenuItem>
    </NavDropdown>
    );
  }
}

export default connect(mapPropsToState, mapDispatchToState)(UserMenu);