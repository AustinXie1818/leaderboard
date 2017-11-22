import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';


import {Navbar, Nav} from 'react-bootstrap';


import './App.css';


import store from './store/leader.board.store';


import BoardVisitorMenu from './components/board.visitor.menu';
import BoardUserMenu from './components/board.user.menu';

import UserHome from './components/user.home';

import NewLeaderBoard from './components/new.leader.board';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar inverse collapseOnSelect>
              <Navbar.Header>
                <Navbar.Brand>
                  <a href="#">BIG DUX</a>
                </Navbar.Brand>
                <Navbar.Toggle />
              </Navbar.Header>
              <Navbar.Collapse>
                <Nav pullRight>
                  <Route path="/visitor" component={BoardVisitorMenu}/>
                  <Route path="/user" component={BoardUserMenu}/>
                </Nav>
              </Navbar.Collapse>
            </Navbar>

            <div className="App-intro">

              <Route exact path="/user" component={UserHome} />
              <Route path="/user/new" component={NewLeaderBoard} />

            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
